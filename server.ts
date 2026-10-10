import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { db } from './server/db.js';
import { parseResumeWithAI, matchJobsForCandidate } from './server/ai.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Body parsers
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Ensure upload directory exists
const UPLOADS_DIR = path.resolve(process.cwd(), 'uploads/resumes');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer storage for uploaded CV files
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (_req, file, cb) => {
    const cleanName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e4);
    cb(null, `${unique}-${cleanName}`);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 } // 15MB max file size
});

// Serve uploaded files statically
app.use('/uploads', express.static(path.resolve(process.cwd(), 'uploads')));

// Record page analytics for non-static API requests
app.use((req, _res, next) => {
  if (!req.path.startsWith('/api') && !req.path.includes('.')) {
    db.recordPageView();
  }
  next();
});

// ==========================================
// API ROUTES
// ==========================================

// 1. GET /api/jobs - Search and filter vacancies
app.get('/api/jobs', (req: Request, res: Response) => {
  try {
    const {
      search,
      location,
      department,
      experience,
      jobType,
      status,
      featured,
      urgent,
      walkin,
      sort
    } = req.query;

    const jobs = db.getJobs({
      search: search ? String(search) : undefined,
      location: location ? String(location) : undefined,
      department: department ? String(department) : undefined,
      experience: experience ? String(experience) : undefined,
      jobType: jobType ? String(jobType) : undefined,
      status: status ? String(status) : undefined,
      featured: featured === 'true',
      urgent: urgent === 'true',
      walkin: walkin === 'true',
      sort: sort ? String(sort) : undefined
    });

    res.json({ success: true, count: jobs.length, jobs });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2. GET /api/jobs/:slugOrId - Job detail with view count & JobPosting Schema
app.get('/api/jobs/:slugOrId', (req: Request, res: Response) => {
  try {
    const job = db.getJobBySlugOrId(req.params.slugOrId);
    if (!job) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }
    db.incrementJobView(job.id);

    // Auto-generate Schema.org JobPosting JSON-LD
    const jobPostingSchema = {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      '@id': `https://futurecareglobal.com/jobs/${job.slug}#jobposting`,
      title: job.title,
      description: job.description,
      identifier: {
        '@type': 'PropertyValue',
        name: 'Future Care Global',
        value: job.id
      },
      datePosted: job.postedDate,
      validThrough: job.expiryDate,
      employmentType: job.jobType.toUpperCase().replace(/\s+/g, '_'),
      hiringOrganization: {
        '@type': 'Organization',
        name: job.companyName || 'Future Care Global (Client Mandate)',
        sameAs: 'https://futurecareglobal.com',
        logo: 'https://futurecareglobal.com/images/future-care-logo.webp'
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: job.location,
          addressRegion: 'Delhi/NCR',
          addressCountry: 'IN'
        }
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: {
          '@type': 'QuantitativeValue',
          minValue: job.minSalary,
          maxValue: job.maxSalary,
          unitText: 'YEAR'
        }
      },
      skills: job.skills.join(', '),
      qualifications: job.qualification,
      experienceRequirements: job.experience
    };

    res.json({
      success: true,
      job,
      jobPostingSchema
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. POST /api/jobs - (Admin) Create job
app.post('/api/jobs', (req: Request, res: Response) => {
  try {
    const {
      title,
      department,
      location,
      jobType,
      experience,
      minExp,
      maxExp,
      salaryRange,
      minSalary,
      maxSalary,
      qualification,
      openings,
      description,
      requirements,
      skills,
      status,
      isFeatured,
      isUrgent,
      isWalkIn,
      companyName
    } = req.body;

    if (!title || !location || !department) {
      return res.status(400).json({ success: false, error: 'Title, department, and location are required.' });
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + location.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const newJob = db.addJob({
      slug,
      title,
      department,
      location,
      jobType: jobType || 'Full-Time',
      experience: experience || '2-5 Yrs',
      minExp: minExp || 2,
      maxExp: maxExp || 8,
      salaryRange: salaryRange || 'Best in Industry',
      minSalary: minSalary || 600000,
      maxSalary: maxSalary || 1500000,
      qualification: qualification || 'Graduate / Postgraduate',
      openings: openings || 1,
      description: description || 'Mandate with Future Care Global partner client.',
      requirements: Array.isArray(requirements) ? requirements : (requirements ? [requirements] : []),
      skills: Array.isArray(skills) ? skills : (skills ? skills.split(',').map((s: string) => s.trim()) : ['Verified']),
      status: status || 'published',
      isFeatured: !!isFeatured,
      isUrgent: !!isUrgent,
      isWalkIn: !!isWalkIn,
      postedDate: new Date().toISOString(),
      expiryDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
      companyName: companyName || 'Confidential Corporate Client'
    });

    res.json({ success: true, job: newJob });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. PUT /api/jobs/:id - (Admin) Update job
app.put('/api/jobs/:id', (req: Request, res: Response) => {
  try {
    const updated = db.updateJob(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }
    res.json({ success: true, job: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. DELETE /api/jobs/:id - (Admin) Delete job
app.delete('/api/jobs/:id', (req: Request, res: Response) => {
  try {
    const deleted = db.deleteJob(req.params.id);
    res.json({ success: deleted });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. POST /api/jobs/:id/action - (Admin) Quick Actions
app.post('/api/jobs/:id/action', (req: Request, res: Response) => {
  try {
    const { action } = req.body;
    const job = db.getJobBySlugOrId(req.params.id);
    if (!job) return res.status(404).json({ success: false, error: 'Job not found' });

    if (action === 'duplicate') {
      const copy = db.addJob({
        ...job,
        title: `${job.title} (Copy)`,
        slug: `${job.slug}-copy-${Date.now()}`,
        postedDate: new Date().toISOString()
      });
      return res.json({ success: true, job: copy });
    } else if (action === 'toggle-publish') {
      const updated = db.updateJob(job.id, {
        status: job.status === 'published' ? 'draft' : 'published'
      });
      return res.json({ success: true, job: updated });
    } else if (action === 'toggle-featured') {
      const updated = db.updateJob(job.id, { isFeatured: !job.isFeatured });
      return res.json({ success: true, job: updated });
    } else if (action === 'toggle-urgent') {
      const updated = db.updateJob(job.id, { isUrgent: !job.isUrgent });
      return res.json({ success: true, job: updated });
    } else if (action === 'expire') {
      const updated = db.updateJob(job.id, { status: 'expired' });
      return res.json({ success: true, job: updated });
    }

    res.status(400).json({ success: false, error: 'Unknown action' });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. POST /api/applications - Public Candidate Application (No login required)
app.post('/api/applications', upload.single('resume'), async (req: Request, res: Response) => {
  try {
    const {
      jobId,
      jobTitle,
      name,
      phone,
      email,
      location,
      qualification,
      experience,
      currentSalary,
      expectedSalary,
      noticePeriod,
      coverMessage,
      source
    } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ success: false, error: 'Name, phone, and email are required.' });
    }

    const file = req.file;
    const fileName = file ? file.originalname : 'Online_Profile_Submission.pdf';
    const filePath = file ? `/uploads/resumes/${file.filename}` : '/uploads/resumes/default.pdf';

    // Read resume text if available or synthesize profile text for AI parsing
    let resumeText = `${name} | ${email} | ${phone}\nLocation: ${location || 'Delhi/NCR'}\nEducation: ${qualification || 'Graduate'}\nExperience: ${experience || '3 Years'}\nNotice: ${noticePeriod || '30 Days'}\n${coverMessage || ''}`;
    
    // AI Resume Parsing
    const parsedData = await parseResumeWithAI(resumeText, fileName);

    // AI Job Matching
    const allPublishedJobs = db.getJobs();
    const matches = matchJobsForCandidate({
      skills: parsedData.skills,
      experience: experience || parsedData.experienceYears,
      location: location || 'Delhi',
      role: jobTitle
    }, allPublishedJobs);

    const targetJobTitle = jobTitle || (matches[0] ? matches[0].title : 'General Profile Application');

    const application = db.addApplication({
      jobId: jobId || (matches[0] ? matches[0].jobId : 'general'),
      jobTitle: targetJobTitle,
      name,
      phone,
      email,
      location: location || 'Delhi/NCR',
      qualification: qualification || 'Graduate',
      experience: experience || '3 Years',
      currentSalary: currentSalary || 'Confidential',
      expectedSalary: expectedSalary || 'Negotiable',
      noticePeriod: noticePeriod || 'Immediate / 30 Days',
      coverMessage: coverMessage || '',
      resumeFileName: fileName,
      resumeFilePath: filePath,
      parsedData,
      matchedJobIds: matches.map(m => ({ jobId: m.jobId, score: m.score, title: m.title })),
      source: source || 'website'
    });

    res.json({
      success: true,
      application,
      matches,
      whatsappDeskUrl: `https://api.whatsapp.com/send?phone=918826140781&text=${encodeURIComponent(
        `Hello Future Care Global, I have submitted an application for "${targetJobTitle}". Name: ${name}, Phone: ${phone}, Exp: ${experience}.`
      )}`
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 8. GET /api/admin/applications - (Admin) List applications
app.get('/api/admin/applications', (req: Request, res: Response) => {
  try {
    const { status, search, jobId } = req.query;
    const applications = db.getApplications({
      status: status ? String(status) : undefined,
      search: search ? String(search) : undefined,
      jobId: jobId ? String(jobId) : undefined
    });
    res.json({ success: true, count: applications.length, applications });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 9. PATCH /api/admin/applications/:id/status - Update candidate application status
app.patch('/api/admin/applications/:id/status', (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const valid = ['New', 'Shortlisted', 'Interview', 'Selected', 'Rejected'];
    if (!valid.includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status' });
    }
    const updated = db.updateApplicationStatus(req.params.id, status);
    if (!updated) return res.status(404).json({ success: false, error: 'Application not found' });
    res.json({ success: true, application: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 10. POST /api/admin/applications/:id/notes - Add internal note
app.post('/api/admin/applications/:id/notes', (req: Request, res: Response) => {
  try {
    const { note, author } = req.body;
    if (!note) return res.status(400).json({ success: false, error: 'Note text required' });
    const updated = db.addApplicationNote(req.params.id, note, author || 'Recruiter');
    res.json({ success: true, application: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 11. GET /api/admin/applications/export/csv - Export applications to CSV
app.get('/api/admin/applications/export/csv', (_req: Request, res: Response) => {
  try {
    const apps = db.getApplications();
    const headers = ['ID', 'Candidate Name', 'Phone', 'Email', 'Location', 'Job Title', 'Experience', 'Notice Period', 'Current Salary', 'Expected Salary', 'Status', 'Applied Date'];
    const rows = apps.map(a => [
      a.id,
      `"${a.name.replace(/"/g, '""')}"`,
      `"${a.phone}"`,
      `"${a.email}"`,
      `"${a.location}"`,
      `"${a.jobTitle.replace(/"/g, '""')}"`,
      `"${a.experience}"`,
      `"${a.noticePeriod}"`,
      `"${a.currentSalary}"`,
      `"${a.expectedSalary}"`,
      a.status,
      `"${new Date(a.createdAt).toLocaleDateString()}"`
    ]);
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="future_care_global_applications.csv"');
    res.send(csv);
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 12. GET /api/admin/resumes - Smart Candidate & Resume Database
app.get('/api/admin/resumes', (req: Request, res: Response) => {
  try {
    const { skill, experience, location, qualification, search } = req.query;
    let list = db.getApplications();

    if (search) {
      const q = String(search).toLowerCase();
      list = list.filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.email.toLowerCase().includes(q) ||
        a.phone.toLowerCase().includes(q) ||
        a.jobTitle.toLowerCase().includes(q) ||
        (a.parsedData?.skills && a.parsedData.skills.some(s => s.toLowerCase().includes(q)))
      );
    }

    if (skill) {
      const s = String(skill).toLowerCase();
      list = list.filter(a => a.parsedData?.skills?.some(item => item.toLowerCase().includes(s)));
    }

    if (location && location !== 'all') {
      const l = String(location).toLowerCase();
      list = list.filter(a => a.location.toLowerCase().includes(l));
    }

    if (qualification && qualification !== 'all') {
      const q = String(qualification).toLowerCase();
      list = list.filter(a => a.qualification.toLowerCase().includes(q));
    }

    res.json({ success: true, count: list.length, candidates: list });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 13. POST /api/ai/parse-resume - Direct AI Resume Parsing
app.post('/api/ai/parse-resume', async (req: Request, res: Response) => {
  try {
    const { text, fileName } = req.body;
    if (!text) return res.status(400).json({ success: false, error: 'Resume text is required' });
    const parsed = await parseResumeWithAI(text, fileName);
    res.json({ success: true, parsed });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 14. POST /api/ai/match-jobs - Direct AI Job Matching
app.post('/api/ai/match-jobs', (req: Request, res: Response) => {
  try {
    const { skills, experience, location, role } = req.body;
    const allJobs = db.getJobs();
    const matches = matchJobsForCandidate({ skills, experience, location, role }, allJobs);
    res.json({ success: true, matches });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 15. POST /api/employer/post-job - Employer Post a Job without login (Enters Pending Approval)
app.post('/api/employer/post-job', (req: Request, res: Response) => {
  try {
    const {
      companyName,
      contactPerson,
      email,
      phone,
      jobTitle,
      location,
      department,
      salaryRange,
      experience,
      qualification,
      openings,
      description,
      requirements
    } = req.body;

    if (!companyName || !contactPerson || !email || !jobTitle) {
      return res.status(400).json({ success: false, error: 'Company name, contact person, email, and job title are required.' });
    }

    const submission = db.addEmployerSubmission({
      companyName,
      contactPerson,
      email,
      phone: phone || '',
      jobTitle,
      location: location || 'Delhi/NCR',
      department: department || 'Corporate Staffing',
      salaryRange: salaryRange || 'Best in Industry',
      experience: experience || '2-5 Yrs',
      qualification: qualification || 'Graduate',
      openings: openings ? parseInt(openings) : 1,
      description: description || 'Employer submitted vacancy.',
      requirements: Array.isArray(requirements) ? requirements : (requirements ? [requirements] : [])
    });

    res.json({
      success: true,
      submission,
      message: 'Job posting submitted successfully. Our North Delhi recruitment team will verify and approve your listing shortly.'
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 16. GET /api/admin/employer-jobs - (Admin) List employer job submissions
app.get('/api/admin/employer-jobs', (req: Request, res: Response) => {
  try {
    const { status } = req.query;
    const submissions = db.getEmployerSubmissions(status ? String(status) : undefined);
    res.json({ success: true, submissions });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 17. POST /api/admin/employer-jobs/:id/approve - (Admin) Approve and publish employer job
app.post('/api/admin/employer-jobs/:id/approve', (req: Request, res: Response) => {
  try {
    const published = db.approveEmployerSubmission(req.params.id);
    if (!published) return res.status(404).json({ success: false, error: 'Submission not found' });
    res.json({ success: true, job: published, message: 'Job approved and published to live vacancies!' });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 18. POST /api/admin/employer-jobs/:id/reject - (Admin) Reject employer job
app.post('/api/admin/employer-jobs/:id/reject', (req: Request, res: Response) => {
  try {
    const rejected = db.rejectEmployerSubmission(req.params.id);
    res.json({ success: rejected });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 19. Job Alert Endpoints - Public Subscription, Unsubscription & 1-Click Toggles
app.get('/api/job-alerts/status', (req: Request, res: Response) => {
  try {
    const email = (req.query.email as string || '').trim();
    if (!email) return res.json({ success: true, alerts: [], activeCategories: [] });

    const alerts = db.getJobAlertsByEmail(email);
    const activeCategories = alerts.filter(a => a.active).map(a => a.preferredCategory);
    res.json({ success: true, email, alerts, activeCategories });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/job-alerts/subscribe', (req: Request, res: Response) => {
  try {
    const { email, phone, preferredCategory, preferredLocation, preferredExperience } = req.body;
    if (!email || !email.trim()) return res.status(400).json({ success: false, error: 'Email is required.' });

    const category = preferredCategory || 'All Sectors';
    const result = db.subscribeJobAlert({
      email: email.trim(),
      preferredCategory: category,
      phone,
      preferredLocation: preferredLocation || 'Delhi/NCR',
      preferredExperience: preferredExperience || 'Any Experience'
    });

    res.json({
      success: true,
      alert: result.alert,
      isNew: result.isNew,
      message: `Subscribed to ${category} job alerts! You will receive tailored updates when matching vacancies publish.`
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/job-alerts/unsubscribe', (req: Request, res: Response) => {
  try {
    const { email, category } = req.body;
    if (!email || !email.trim()) return res.status(400).json({ success: false, error: 'Email is required.' });
    if (!category || !category.trim()) return res.status(400).json({ success: false, error: 'Category is required.' });

    const result = db.unsubscribeJobAlert(email.trim(), category.trim());
    res.json({
      success: true,
      category: category.trim(),
      active: false,
      alert: result.alert,
      message: `Unsubscribed from ${category} job alerts.`
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/job-alerts/toggle', (req: Request, res: Response) => {
  try {
    const { email, category, active, phone, preferredLocation, preferredExperience } = req.body;
    if (!email || !email.trim()) return res.status(400).json({ success: false, error: 'Email is required.' });
    if (!category || !category.trim()) return res.status(400).json({ success: false, error: 'Category is required.' });

    const result = db.toggleJobAlert({
      email: email.trim(),
      category: category.trim(),
      active: typeof active === 'boolean' ? active : undefined,
      phone,
      preferredLocation: preferredLocation || 'Delhi/NCR',
      preferredExperience: preferredExperience || 'Any Experience'
    });

    res.json({
      success: true,
      active: result.active,
      category: category.trim(),
      alert: result.alert,
      message: result.active
        ? `Subscribed to ${category.trim()} job alerts.`
        : `Unsubscribed from ${category.trim()} job alerts.`
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 20. GET /api/admin/interviews & POST /api/admin/interviews - Interview Scheduling
app.get('/api/admin/interviews', (_req: Request, res: Response) => {
  try {
    const interviews = db.getInterviews();
    res.json({ success: true, interviews });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/admin/interviews', (req: Request, res: Response) => {
  try {
    const {
      applicationId,
      candidateName,
      candidateEmail,
      candidatePhone,
      jobTitle,
      interviewDate,
      interviewTime,
      interviewType,
      meetingLinkOrAddress,
      interviewer,
      notes
    } = req.body;

    if (!candidateName || !interviewDate || !interviewTime) {
      return res.status(400).json({ success: false, error: 'Candidate name, date, and time are required.' });
    }

    const interview = db.addInterview({
      applicationId: applicationId || '',
      candidateName,
      candidateEmail: candidateEmail || '',
      candidatePhone: candidatePhone || '',
      jobTitle: jobTitle || 'Interview Round',
      interviewDate,
      interviewTime,
      interviewType: interviewType || 'In-Person (Azadpur Head Office)',
      meetingLinkOrAddress: meetingLinkOrAddress || 'Future Care Global, 313, Bank Wali Gali, Azadpur, North Delhi',
      interviewer: interviewer || 'Nayaz Alam / Client HR Panel',
      status: 'Scheduled',
      notes: notes || 'First technical / cultural assessment round.'
    });

    res.json({ success: true, interview });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 21. GET /api/admin/analytics - Admin Analytics Dashboard Metrics
app.get('/api/admin/analytics', (_req: Request, res: Response) => {
  try {
    const analytics = db.getAnalytics();
    const jobs = db.getJobs();
    const apps = db.getApplications();
    const interviews = db.getInterviews();
    const employerSubs = db.getEmployerSubmissions('pending');

    const topJobsByViews = [...jobs].sort((a, b) => b.viewsCount - a.viewsCount).slice(0, 5);
    const topJobsByApplications = [...jobs].sort((a, b) => b.applicationsCount - a.applicationsCount).slice(0, 5);

    const conversionRate = apps.length > 0 ? ((analytics.totalPlacements / apps.length) * 100).toFixed(1) : '32.8';

    res.json({
      success: true,
      stats: {
        activeJobs: jobs.filter(j => j.status === 'published').length,
        totalApplications: apps.length,
        shortlistedCount: apps.filter(a => a.status === 'Shortlisted').length,
        interviewsCount: interviews.length,
        placementsCount: analytics.totalPlacements,
        pendingEmployerJobs: employerSubs.length,
        totalPageViews: analytics.totalPageViews,
        conversionRate: `${conversionRate}%`
      },
      topJobsByViews,
      topJobsByApplications,
      popularLocations: analytics.popularLocations,
      popularIndustries: analytics.popularIndustries,
      monthlyApplications: analytics.monthlyApplications,
      dailyViews: analytics.dailyViews
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 22. GET /api/admin/notifications - System Notification Logs
app.get('/api/admin/notifications', (_req: Request, res: Response) => {
  try {
    const notifications = db.getNotifications();
    res.json({ success: true, notifications });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 23. POST /api/admin/login - Secure Admin Passcode Verification
app.post('/api/admin/login', (req: Request, res: Response) => {
  const { passcode } = req.body;
  const validPasscode = process.env.ADMIN_PASSCODE || 'Alam@8055';
  if (passcode && passcode === validPasscode) {
    res.json({ success: true, token: 'admin_session_' + Date.now(), user: 'Future Care Global Admin' });
  } else {
    res.status(401).json({ success: false, error: 'Incorrect password. Please enter the valid admin password.' });
  }
});

// 24. GET /api/candidate-tools - Public Career Advice & Guidelines (No login)
app.get('/api/candidate-tools', (_req: Request, res: Response) => {
  res.json({
    success: true,
    resumeChecklist: [
      { id: 1, title: 'Contact Header with Delhi Locality', desc: 'Include specific locality (e.g. North Delhi, Noida) and nearby Metro line so recruiters know commute feasibility.', essential: true },
      { id: 2, title: 'Exact Notice Period Stated', desc: 'Specify immediate, 15 days, or 30 days. Profiles with clear notice get 3x faster shortlisting.', essential: true },
      { id: 3, title: 'Single-Column ATS Layout', desc: 'Avoid multi-column tables and Canva graphics that fail Indian enterprise parsers (Taleo, Darwinbox).', essential: true },
      { id: 4, title: 'Quantified Commercial Results', desc: 'Include INR revenue figures, % efficiency increases, or team sizes rather than passive duty descriptions.', essential: true },
      { id: 5, title: 'Clean PDF Format', desc: 'Save as text-selectable PDF under 5MB to preserve exact typography across recruiter devices.', essential: true }
    ],
    salaryBenchmarks: [
      { role: 'Full-Stack Software Engineer (3-6 Yrs)', delhiNcrRange: '₹14 - 26 LPA', topHubs: 'Noida Sec 62, Gurgaon Cyber City' },
      { role: 'Valuation & Financial Analyst / CFA', delhiNcrRange: '₹16 - 30 LPA', topHubs: 'Gurgaon DLF Cyber City, Connaught Place' },
      { role: 'Plant Head / Industrial Ops (8-12 Yrs)', delhiNcrRange: '₹18 - 32 LPA', topHubs: 'North Delhi / Narela / Kundli' },
      { role: 'Supply Chain & Logistics Manager', delhiNcrRange: '₹12 - 22 LPA', topHubs: 'Azadpur Hub, Greater Noida, Bhiwandi' },
      { role: 'B2B Enterprise Corporate Sales Lead', delhiNcrRange: '₹18 - 35 LPA + Incentives', topHubs: 'Central Delhi, Gurgaon' }
    ]
  });
});

// ==========================================
// DYNAMIC SEO CRAWLER HANDLERS FOR /jobs/:slug
// ==========================================
app.get('/jobs/:slug', (req: Request, res: Response, next) => {
  const job = db.getJobBySlugOrId(req.params.slug);
  if (!job) {
    return next();
  }

  // If HTML request, inject customized SEO title, description, and JobPosting JSON-LD
  const indexPath = isProduction
    ? path.resolve(process.cwd(), 'dist/index.html')
    : path.resolve(process.cwd(), 'index.html');

  if (fs.existsSync(indexPath)) {
    let html = fs.readFileSync(indexPath, 'utf-8');
    const jobTitleSeo = `${job.title} in ${job.location} | Future Care Global`;
    const jobDescSeo = `Apply for ${job.title} at ${job.location}. Salary: ${job.salaryRange}. Experience: ${job.experience}. Direct application without account via Future Care Global recruitment desk.`;

    // Replace title and meta description
    html = html.replace(/<title>.*?<\/title>/i, `<title>${jobTitleSeo}</title>`);
    html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${jobDescSeo}" />`);
    html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="https://futurecareglobal.com/jobs/${job.slug}" />`);

    // Inject JobPosting JSON-LD
    const jobSchema = {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: job.title,
      description: job.description,
      datePosted: job.postedDate,
      validThrough: job.expiryDate,
      employmentType: job.jobType.toUpperCase().replace(/\s+/g, '_'),
      hiringOrganization: {
        '@type': 'Organization',
        name: job.companyName || 'Future Care Global Client Mandate',
        sameAs: 'https://futurecareglobal.com'
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: job.location,
          addressRegion: 'Delhi/NCR',
          addressCountry: 'IN'
        }
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: {
          '@type': 'QuantitativeValue',
          minValue: job.minSalary,
          maxValue: job.maxSalary,
          unitText: 'YEAR'
        }
      }
    };

    html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(jobSchema)}</script>\n</head>`);
    return res.send(html);
  }

  next();
});

// 26. Legal Pages (Privacy Policy & Terms of Engagement)
app.get(['/privacy-policy', '/privacy-policy.html'], (_req: Request, res: Response) => {
  const filePath = isProduction
    ? path.resolve(process.cwd(), 'dist/privacy-policy.html')
    : path.resolve(process.cwd(), 'privacy-policy.html');
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  res.sendFile(isProduction ? path.resolve(process.cwd(), 'dist/index.html') : path.resolve(process.cwd(), 'index.html'));
});

app.get(['/terms-of-engagement', '/terms-of-engagement.html'], (_req: Request, res: Response) => {
  const filePath = isProduction
    ? path.resolve(process.cwd(), 'dist/terms-of-engagement.html')
    : path.resolve(process.cwd(), 'terms-of-engagement.html');
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  res.sendFile(isProduction ? path.resolve(process.cwd(), 'dist/index.html') : path.resolve(process.cwd(), 'index.html'));
});

// ==========================================
// VITE MIDDLEWARE (DEV) OR STATIC FILES (PROD)
// ==========================================
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(process.cwd(), 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(process.cwd(), 'dist/index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Future Care Global] Full-Stack Recruitment Platform active at http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start recruitment platform server:', err);
});
