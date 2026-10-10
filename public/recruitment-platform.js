// Future Care Global - Complete Advanced Recruitment Platform Engine
(function() {
  'use strict';

  // ==========================================
  // HYBRID CLIENT & SERVER STORE (FOR HOSTINGER STATIC & NODE VPS)
  // ==========================================
  const FALLBACK_DATA = {"jobs":[{"id":"job-1","slug":"sr-full-stack-engineer-noida-sector-62","title":"Sr. Full-Stack Engineer (React & Node.js)","department":"IT & Software","location":"Noida Sector 62","jobType":"Full-Time","experience":"5-8 Yrs","minExp":5,"maxExp":8,"salaryRange":"₹18,00,000 - ₹28,00,000 PA","minSalary":1800000,"maxSalary":2800000,"qualification":"B.Tech / B.E. / MCA in Computer Science","openings":3,"description":"Leading enterprise product company in Noida Sector 62 seeks a talented Senior Full-Stack Engineer. You will spearhead high-throughput cloud microservices, optimize low-latency APIs, and mentor junior engineers on clean architectural standards.","requirements":["5+ years professional experience building enterprise applications with Node.js and React.","Deep hands-on experience with PostgreSQL, MongoDB, Redis caching, and Docker.","Proven expertise in AWS (ECS, Lambda, RDS) and CI/CD pipelines.","Strong problem-solving skills and familiarity with agile sprint workflows."],"skills":["React","Node.js","TypeScript","PostgreSQL","AWS","Docker","RESTful APIs"],"status":"published","isFeatured":true,"isUrgent":true,"isWalkIn":false,"viewsCount":342,"applicationsCount":28,"postedDate":"2026-10-01T09:00:00.000Z","expiryDate":"2026-11-30T23:59:59.000Z","companyName":"Tier-1 SaaS Enterprise Partner"},{"id":"job-5","slug":"sales-director-enterprise-connaught-place","title":"Director - Enterprise Corporate Sales (North India)","department":"Enterprise Sales","location":"Connaught Place, Central Delhi","jobType":"Full-Time","experience":"8+ Yrs","minExp":8,"maxExp":15,"salaryRange":"₹25,00,000 - ₹38,00,000 PA + Incentives","minSalary":2500000,"maxSalary":3800000,"qualification":"MBA in Sales / Marketing / General Management","openings":2,"description":"B2B enterprise solutions provider in Central Delhi seeks a dynamic Sales Director to lead corporate accounts, government tenders, and strategic partner acquisition across Delhi, Noida, Gurgaon, and Chandigarh.","requirements":["8+ years in enterprise B2B solution sales, IT consulting, or corporate services.","Proven history of consistently surpassing ₹15+ Cr annual revenue targets.","Strong executive relationships with C-Suite leaders in Delhi/NCR.","Excellent negotiation, contract structuring, and team leadership capability."],"skills":["B2B Sales","Enterprise Account Management","Key Account Acquisition","P&L Strategy","Contract Negotiation"],"status":"published","isFeatured":true,"isUrgent":false,"isWalkIn":false,"viewsCount":178,"applicationsCount":16,"postedDate":"2026-10-04T12:00:00.000Z","expiryDate":"2026-11-25T23:59:59.000Z","companyName":"Enterprise Cloud Solutions"},{"id":"job-2","slug":"vp-operations-logistics-north-delhi-hub","title":"VP Operations & Supply Chain Logistics","department":"Supply Chain & Logistics","location":"North Delhi Hub (Azadpur / Kundli)","jobType":"Full-Time","experience":"8+ Yrs","minExp":8,"maxExp":16,"salaryRange":"₹30,00,000 - ₹45,00,000 PA","minSalary":3000000,"maxSalary":4500000,"qualification":"MBA in Operations / Supply Chain or Graduate with equivalent experience","openings":1,"description":"Top national distribution and cold-chain conglomerate headquartered in North Delhi requires a seasoned Vice President of Operations. Responsible for multi-facility warehouse throughput, fleet telemetry, 99.4% on-time delivery SLA, and team leadership across North India corridors.","requirements":["12+ years experience in logistics, warehousing operations, or industrial supply chain management.","Direct experience handling large automated sortation facilities and fleet management.","Demonstrated expertise in P&L accountability (₹50+ Cr annual operational budget).","Location accessibility to Azadpur / GT Karnal Road / Kundli industrial belt."],"skills":["Supply Chain","Warehouse Management","Fleet Operations","Logistics SLA","P&L Management","Vendor Negotiation"],"status":"published","isFeatured":true,"isUrgent":false,"isWalkIn":false,"viewsCount":215,"applicationsCount":14,"postedDate":"2026-10-02T10:00:00.000Z","expiryDate":"2026-12-15T23:59:59.000Z","companyName":"National Logistics Conglomerate"},{"slug":"lead-bio-informatics-engineer-okhla-phase-ii-new-delhi","title":"Lead Bio-Informatics Engineer","department":"Healthcare","location":"Okhla Phase II, New Delhi","jobType":"Full-Time","experience":"4-7 Years","minExp":2,"maxExp":8,"salaryRange":"₹16 - 25 LPA","minSalary":800000,"maxSalary":2000000,"qualification":"M.Tech / M.Sc Bioinformatics or Computer Science","openings":2,"description":"We are expanding our clinical genomics analytics platform and need a Senior Bioinformatics Engineer with Python and next-gen sequencing pipelines.","requirements":["4+ years in genomics data pipelines","Python, Nextflow, AWS","Experience with clinical data compliance"],"skills":["Verified Requirement"],"status":"published","isFeatured":false,"isUrgent":true,"isWalkIn":false,"postedDate":"2026-10-07T12:00:10.187Z","expiryDate":"2026-11-21T12:00:10.187Z","companyName":"Apex HealthTech Solutions","employerContact":"Dr. Rohan Mehra","employerEmail":"rohan.mehra@apexhealth.in","employerPhone":"+91 98101 22334","id":"job-1791374410187","viewsCount":0,"applicationsCount":0},{"id":"job-6","slug":"walk-in-customer-success-lead-okhla-delhi","title":"Customer Success & Key Account Manager (Walk-in)","department":"E-Commerce","location":"Okhla Phase III, South Delhi","jobType":"Walk-in Interview","experience":"2-5 Yrs","minExp":2,"maxExp":5,"salaryRange":"₹8,00,000 - ₹14,00,000 PA","minSalary":800000,"maxSalary":1400000,"qualification":"Any Graduate / Postgraduate with strong communication","openings":5,"description":"Rapid-growth D2C consumer goods brand based in Okhla Phase III is holding walk-in interviews for passionate Customer Success and Account Management specialists. Direct client interaction, retention metrics, and escalation management.","requirements":["2 to 5 years experience in customer success, retention marketing, or client servicing.","Fluent verbal and written English communication.","Experience with Zendesk, Freshdesk, Salesforce CRM, or HubSpot.","Immediate joiners or 15 days notice period strictly preferred."],"skills":["Customer Success","Key Account Retention","CRM","Zendesk","Client Servicing"],"status":"published","isFeatured":false,"isUrgent":true,"isWalkIn":true,"viewsCount":290,"applicationsCount":37,"postedDate":"2026-10-05T09:30:00.000Z","expiryDate":"2026-10-25T23:59:59.000Z","companyName":"Consumer D2C Brand"},{"id":"job-3","slug":"chartered-financial-analyst-gurgaon-cyber-city","title":"Lead Valuation & Financial Analyst (CFA)","department":"BFSI & FinTech","location":"Gurgaon DLF Cyber City","jobType":"Full-Time","experience":"5-8 Yrs","minExp":5,"maxExp":8,"salaryRange":"₹22,00,000 - ₹35,00,000 PA","minSalary":2200000,"maxSalary":3500000,"qualification":"Chartered Financial Analyst (CFA Charterholder) or CA / MBA Finance","openings":2,"description":"Fast-growing FinTech investment firm at DLF Cyber City Gurgaon seeks a Lead Valuation Analyst to drive financial modeling, portfolio risk assessments, private equity due diligence, and statutory audit compliance.","requirements":["CFA Charterholder or qualified Chartered Accountant with 5+ years experience in investment banking, equity research, or valuation advisory.","Advanced financial modeling skills in Excel, Bloomberg Terminal, and PowerBI.","Thorough understanding of SEBI guidelines, RBI compliance, and cross-border M&A valuations.","Outstanding presentation skills with CXO stakeholders."],"skills":["Financial Modeling","DCF Valuation","CFA","Due Diligence","FinTech","Portfolio Risk","M&A"],"status":"published","isFeatured":false,"isUrgent":true,"isWalkIn":false,"viewsCount":189,"applicationsCount":19,"postedDate":"2026-10-03T11:30:00.000Z","expiryDate":"2026-11-20T23:59:59.000Z","companyName":"Cyber City FinTech Capital"},{"id":"job-7","slug":"senior-talent-acquisition-specialist-delhi-ncr","title":"Senior Talent Acquisition Specialist (Internal Hiring)","department":"Human Resources","location":"North Delhi (Azadpur) / Hybrid","jobType":"Full-Time","experience":"2-5 Yrs","minExp":2,"maxExp":5,"salaryRange":"₹7,00,000 - ₹12,00,000 PA","minSalary":700000,"maxSalary":1200000,"qualification":"MBA / PGDM in HR or Bachelor’s with equivalent experience","openings":2,"description":"Future Care Global is expanding its internal recruitment delivery team at our Azadpur North Delhi head office. You will head end-to-end recruitment pipelines for our premier corporate clients across Delhi, Noida, and Gurgaon.","requirements":["2 to 5 years hands-on experience in corporate or agency recruitment in Delhi/NCR.","Strong network of IT, Finance, or Engineering professionals.","Proven expertise in headhunting, LinkedIn Recruiter, and candidate closing.","Goal-driven attitude with excellent stakeholder management."],"skills":["Recruitment","Talent Acquisition","Headhunting","LinkedIn Recruiter","HR Screening","Offer Negotiation"],"status":"published","isFeatured":false,"isUrgent":false,"isWalkIn":false,"viewsCount":165,"applicationsCount":22,"postedDate":"2026-10-05T14:00:00.000Z","expiryDate":"2026-12-31T23:59:59.000Z","companyName":"Future Care Global"},{"id":"job-4","slug":"plant-production-head-narela-industrial-area","title":"Plant Production Head (Manufacturing & Precision Tooling)","department":"Manufacturing","location":"Narela Industrial Area, Delhi","jobType":"Full-Time","experience":"8+ Yrs","minExp":8,"maxExp":15,"salaryRange":"₹15,00,000 - ₹24,00,000 PA","minSalary":1500000,"maxSalary":2400000,"qualification":"B.E. / B.Tech in Mechanical / Industrial Engineering","openings":1,"description":"ISO 9001 certified precision manufacturing unit in Narela Industrial Zone requires an experienced Plant Head to oversee production scheduling, CNC machining floors, quality control standards, and factory labor compliance.","requirements":["10+ years in discrete engineering manufacturing or automotive component fabrication.","Thorough expertise in Kaizen, 5S, Six Sigma, and Total Productive Maintenance (TPM).","Strong knowledge of Delhi State labor statutory requirements and OSHA standards.","Proven record of reducing scrap rate below 1.2% while increasing OEE by 15%."],"skills":["Plant Operations","CNC Machining","Six Sigma","TPM","Quality Control","Manufacturing Engineering"],"status":"published","isFeatured":false,"isUrgent":false,"isWalkIn":false,"viewsCount":142,"applicationsCount":11,"postedDate":"2026-10-04T08:00:00.000Z","expiryDate":"2026-12-01T23:59:59.000Z","companyName":"Precision Engineering Group"}],"applications":[{"id":"app-101","jobId":"job-1","jobTitle":"Sr. Full-Stack Engineer (React & Node.js)","name":"Aakash Verma","phone":"+91 98712 34567","email":"aakash.verma.dev@gmail.com","location":"Noida Sector 62","qualification":"B.Tech Computer Science (2018)","experience":"7 Years","currentSalary":"₹17.5 LPA","expectedSalary":"₹24 LPA","noticePeriod":"15 Days (Serving Notice)","coverMessage":"I have 7 years experience building high-scale React and Node.js applications with PostgreSQL and AWS. Looking for an immediate opportunity in Noida.","resumeFileName":"Aakash_Verma_FullStack_Resume.pdf","resumeFilePath":"/uploads/resumes/sample-resume-1.pdf","parsedData":{"extractedName":"Aakash Verma","extractedEmail":"aakash.verma.dev@gmail.com","extractedPhone":"+91 98712 34567","skills":["React","Node.js","TypeScript","PostgreSQL","Docker","AWS","Redis"],"education":"B.Tech Computer Science","experienceYears":7,"summary":"Senior software engineer with 7 years specializing in full stack web development and microservices."},"matchedJobIds":[{"jobId":"job-1","score":96,"title":"Sr. Full-Stack Engineer (React & Node.js)"},{"jobId":"job-3","score":45,"title":"Lead Valuation & Financial Analyst (CFA)"}],"status":"Shortlisted","internalNotes":[{"id":"note-1","note":"Screened by Nayaz Alam. Strong React/Node skills. Candidate is on 15 days notice and ready for client interview round on Tuesday.","author":"Nayaz Alam","timestamp":"2026-10-05T16:20:00.000Z"}],"createdAt":"2026-10-04T11:15:00.000Z","source":"website"},{"id":"app-102","jobId":"job-2","jobTitle":"VP Operations & Supply Chain Logistics","name":"Suresh Singhania","phone":"+91 98114 55667","email":"suresh.singhania.ops@gmail.com","location":"Rohini, North Delhi","qualification":"MBA Logistics & Supply Chain","experience":"14 Years","currentSalary":"₹32 LPA","expectedSalary":"₹40 LPA","noticePeriod":"30 Days","coverMessage":"Executive operations leader with 14 years managing warehouse sortation hubs and cold chain operations across North India.","resumeFileName":"Suresh_Singhania_VP_Ops.pdf","resumeFilePath":"/uploads/resumes/sample-resume-2.pdf","parsedData":{"extractedName":"Suresh Singhania","extractedEmail":"suresh.singhania.ops@gmail.com","extractedPhone":"+91 98114 55667","skills":["Supply Chain","Warehouse Operations","Fleet Management","P&L Strategy","Logistics SLA"],"education":"MBA Logistics & Supply Chain","experienceYears":14,"summary":"VP of operations with 14 years leading warehouse logistics and supply chain optimization across Delhi/NCR."},"matchedJobIds":[{"jobId":"job-2","score":98,"title":"VP Operations & Supply Chain Logistics"},{"jobId":"job-4","score":62,"title":"Plant Production Head"}],"status":"Interview","internalNotes":[{"id":"note-2","note":"First round completed with client COO. Excellent culture fit. Scheduled final founder discussion.","author":"Nayaz Alam","timestamp":"2026-10-05T17:00:00.000Z"}],"createdAt":"2026-10-03T14:30:00.000Z","source":"website"},{"id":"app-103","jobId":"job-3","jobTitle":"Lead Valuation & Financial Analyst (CFA)","name":"Divya Malhotra","phone":"+91 99580 88221","email":"divya.malhotra.cfa@outlook.com","location":"Gurgaon DLF Phase 5","qualification":"CFA Charterholder, B.Com (Hons) SRCC","experience":"6.5 Years","currentSalary":"₹21 LPA","expectedSalary":"₹28 LPA","noticePeriod":"Immediate","coverMessage":"CFA Charterholder with 6.5 years in equity valuation and PE deal due diligence. Immediate availability in Gurgaon.","resumeFileName":"Divya_Malhotra_CFA_CV.pdf","resumeFilePath":"/uploads/resumes/sample-resume-3.pdf","parsedData":{"extractedName":"Divya Malhotra","extractedEmail":"divya.malhotra.cfa@outlook.com","extractedPhone":"+91 99580 88221","skills":["CFA","Financial Modeling","DCF","M&A","Due Diligence","Equity Valuation"],"education":"CFA, B.Com (Hons)","experienceYears":6.5,"summary":"Chartered Financial Analyst with 6.5 years specializing in corporate valuations and investment analysis."},"matchedJobIds":[{"jobId":"job-3","score":95,"title":"Lead Valuation & Financial Analyst (CFA)"}],"status":"Selected","internalNotes":[{"id":"note-3","note":"Offer rolled out at ₹28 LPA fixed + performance bonus. Candidate accepted. Joining on October 15.","author":"Nayaz Alam","timestamp":"2026-10-06T09:15:00.000Z"}],"createdAt":"2026-10-02T10:00:00.000Z","source":"website"}],"interviews":[{"id":"int-301","applicationId":"app-102","candidateName":"Suresh Singhania","candidateEmail":"suresh.singhania.ops@gmail.com","candidatePhone":"+91 98114 55667","jobTitle":"VP Operations & Supply Chain Logistics","interviewDate":"2026-10-08","interviewTime":"11:30 AM","interviewType":"In-Person (Azadpur Head Office)","meetingLinkOrAddress":"Future Care Global, 313, Bank Wali Gali, Azadpur, North Delhi","interviewer":"Managing Director & Client COO","status":"Scheduled","notes":"Final round focusing on regional fleet management strategies and annual budgeting.","createdAt":"2026-10-05T17:10:00.000Z"}],"submissions":[{"companyName":"123","contactPerson":"123","email":"123@gmail.com","phone":"123123123","jobTitle":"123","location":"123","department":"IT & Software","salaryRange":"123","experience":"1","qualification":"123","openings":1,"description":"123","requirements":[],"id":"emp-1791372766391","status":"pending","createdAt":"2026-10-07T11:32:46.391Z"},{"id":"emp-201","companyName":"Apex HealthTech Solutions","contactPerson":"Dr. Rohan Mehra","email":"rohan.mehra@apexhealth.in","phone":"+91 98101 22334","jobTitle":"Lead Bio-Informatics Engineer","location":"Okhla Phase II, New Delhi","department":"Healthcare","salaryRange":"₹16 - 25 LPA","experience":"4-7 Years","qualification":"M.Tech / M.Sc Bioinformatics or Computer Science","openings":2,"description":"We are expanding our clinical genomics analytics platform and need a Senior Bioinformatics Engineer with Python and next-gen sequencing pipelines.","requirements":["4+ years in genomics data pipelines","Python, Nextflow, AWS","Experience with clinical data compliance"],"status":"approved","createdAt":"2026-10-05T15:20:00.000Z"}]};
  const STORE_KEY = "fcg_recruitment_store_v2";
  let fcgStore = (function() {
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.jobs) && parsed.jobs.length > 0) return parsed;
      }
    } catch(e) {}
    return JSON.parse(JSON.stringify(FALLBACK_DATA));
  })();

  
  function wrapResponse(data) {
    if (!data || typeof data !== "object") data = { success: false, data };
    return {
      ...data,
      ok: data.success !== false,
      status: data.success !== false ? 200 : 400,
      json: async () => data,
      text: async () => JSON.stringify(data)
    };
  }

  function persistStore() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(fcgStore));
    } catch(e) {}
  }

  
  window.safeFetchJson = safeFetchJson;
  async function safeFetchJson(url, options = {}) {
    // 1. Try real server request first
    try {
      const res = await fetch(url, options);
      const cType = res.headers.get("content-type") || "";
      if (res.ok && cType.includes("application/json")) {
        return wrapResponse(await res.json());
      }
    } catch(err) {
      // Server not reachable (Hostinger static hosting)
    }

    // 2. Client-side static fallback for Hostinger
    const parsedUrl = new URL(url, window.location.origin);
    const pathname = parsedUrl.pathname;
    const method = (options.method || "GET").toUpperCase();
    let body = {};
    if (options.body) {
      try {
        if (typeof options.body === "string") {
          body = JSON.parse(options.body);
        } else if (options.body instanceof FormData) {
          body = Object.fromEntries(options.body.entries());
        }
      } catch(e) {}
    }

    const raw = dispatchClientFallback(pathname, method, body, parsedUrl);
    return wrapResponse(raw);
  }

  function dispatchClientFallback(pathname, method, body, parsedUrl) {
    // Admin login
    if (pathname.includes("/api/admin/login") && method === "POST") {
      if (body.passcode === "Alam@8055") {
        return wrapResponse({ success: true, token: "admin_session_" + Date.now(), user: "Future Care Global Admin" });
      }
      return wrapResponse({ success: false, error: "Incorrect password. Please enter the valid admin password." });
    }

    // Analytics
    if (pathname.includes("/api/admin/analytics")) {
      const activeJobs = fcgStore.jobs.filter(j => j.status === "published").length;
      const shortlisted = fcgStore.applications.filter(a => a.status === "Shortlisted").length;
      const selected = fcgStore.applications.filter(a => a.status === "Selected").length;
      const pendingEmployer = fcgStore.submissions.filter(s => s.status === "pending").length;
      return {
        success: true,
        stats: {
          activeJobs,
          totalApplications: fcgStore.applications.length,
          shortlistedCount: shortlisted,
          interviewsCount: fcgStore.interviews.length,
          placementsCount: selected,
          pendingEmployerJobs: pendingEmployer
        },
        topJobsByViews: fcgStore.jobs.slice(0, 4),
        topJobsByApplications: fcgStore.jobs.slice(0, 4)
      };
    }

    // Jobs listing
    if (pathname === "/api/jobs") {
      if (method === "POST") {
        const newJob = {
          id: "job-" + Date.now(),
          slug: (body.title || "job").toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now(),
          title: body.title || "Executive Mandate",
          department: body.department || "General",
          location: body.location || "Delhi/NCR",
          jobType: "Full-Time",
          experience: body.experience || "2-5 Yrs",
          salaryRange: body.salaryRange || "₹6,00,000 - ₹12,00,000 PA",
          qualification: "Graduate / Post Graduate",
          openings: parseInt(body.openings || 2),
          description: "Verified mandate managed by Future Care Global consultants.",
          requirements: ["Relevant experience in Delhi/NCR territory.", "Strong functional domain expertise."],
          skills: ["Domain Knowledge", "Client Communication"],
          status: body.status || "published",
          isFeatured: false,
          isUrgent: false,
          isWalkIn: false,
          viewsCount: 1,
          applicationsCount: 0,
          postedDate: new Date().toISOString(),
          expiryDate: new Date(Date.now() + 60*24*60*60*1000).toISOString(),
          companyName: "Corporate Hiring Partner"
        };
        fcgStore.jobs.unshift(newJob);
        persistStore();
        return wrapResponse({ success: true, job: newJob });
      }

      // GET jobs
      let filtered = [...fcgStore.jobs];
      const search = parsedUrl.searchParams.get("search")?.toLowerCase();
      const loc = parsedUrl.searchParams.get("location");
      const dept = parsedUrl.searchParams.get("department");
      const exp = parsedUrl.searchParams.get("experience");
      const status = parsedUrl.searchParams.get("status");

      if (status !== "all") {
        filtered = filtered.filter(j => j.status === "published");
      }
      if (search) {
        filtered = filtered.filter(j =>
          (j.title || "").toLowerCase().includes(search) ||
          (j.department || "").toLowerCase().includes(search) ||
          (j.location || "").toLowerCase().includes(search)
        );
      }
      if (loc && loc !== "all") {
        filtered = filtered.filter(j => (j.location || "").toLowerCase().includes(loc.toLowerCase()));
      }
      if (dept && dept !== "all") {
        filtered = filtered.filter(j => (j.department || "").toLowerCase().includes(dept.toLowerCase()));
      }
      if (exp && exp !== "all") {
        filtered = filtered.filter(j => (j.experience || "").includes(exp));
      }
      return wrapResponse({ success: true, jobs: filtered, count: filtered.length });
    }

    // Job actions
    if (pathname.match(/\/api\/jobs\/([^\/]+)\/action/)) {
      const id = pathname.match(/\/api\/jobs\/([^\/]+)\/action/)[1];
      const job = fcgStore.jobs.find(j => j.id === id);
      if (job && body.action === "toggle-publish") {
        job.status = job.status === "published" ? "draft" : "published";
      } else if (job && body.action === "toggle-urgent") {
        job.isUrgent = !job.isUrgent;
      } else if (job && body.action === "duplicate") {
        const copy = { ...job, id: "job-" + Date.now(), title: job.title + " (Copy)" };
        fcgStore.jobs.unshift(copy);
      }
      persistStore();
      return wrapResponse({ success: true, job });
    }

    // Delete job
    if (pathname.match(/\/api\/jobs\/([^\/]+)/) && method === "DELETE") {
      const id = pathname.match(/\/api\/jobs\/([^\/]+)/)[1];
      fcgStore.jobs = fcgStore.jobs.filter(j => j.id !== id);
      persistStore();
      return wrapResponse({ success: true });
    }

    // Applications listing
    if (pathname.includes("/api/admin/applications")) {
      return wrapResponse({ success: true, applications: fcgStore.applications, count: fcgStore.applications.length });
    }

    // Resumes listing
    if (pathname.includes("/api/admin/resumes")) {
      return wrapResponse({ success: true, candidates: fcgStore.applications, count: fcgStore.applications.length });
    }

    // Application status update
    if (pathname.match(/\/api\/admin\/applications\/([^\/]+)\/status/)) {
      const id = pathname.match(/\/api\/admin\/applications\/([^\/]+)\/status/)[1];
      const app = fcgStore.applications.find(a => a.id === id);
      if (app && body.status) {
        app.status = body.status;
        persistStore();
      }
      return wrapResponse({ success: true, application: app });
    }

    // Application notes
    if (pathname.match(/\/api\/admin\/applications\/([^\/]+)\/notes/)) {
      const id = pathname.match(/\/api\/admin\/applications\/([^\/]+)\/notes/)[1];
      const app = fcgStore.applications.find(a => a.id === id);
      if (app && body.note) {
        app.internalNotes = app.internalNotes || [];
        app.internalNotes.push({ id: "note-" + Date.now(), note: body.note, author: "Recruiter Admin", timestamp: new Date().toISOString() });
        persistStore();
      }
      return wrapResponse({ success: true, application: app });
    }

    // Employer jobs
    if (pathname.includes("/api/admin/employer-jobs")) {
      if (pathname.includes("/approve")) {
        const id = pathname.split("/")[4];
        const sub = fcgStore.submissions.find(s => s.id === id);
        if (sub) {
          sub.status = "approved";
          const newJob = {
            id: "job-emp-" + Date.now(),
            slug: (sub.jobTitle || "employer-job").toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now(),
            title: sub.jobTitle,
            department: sub.department || "Corporate",
            location: sub.location || "Delhi/NCR",
            jobType: "Full-Time",
            experience: sub.experience || "3+ Yrs",
            salaryRange: sub.salaryRange || "Best in Industry",
            qualification: sub.qualification || "Graduate",
            openings: sub.openings || 1,
            description: sub.description || "Verified employer mandate.",
            requirements: sub.requirements || ["Relevant experience."],
            skills: ["Communication", "Domain Expertise"],
            status: "published",
            isFeatured: false,
            isUrgent: true,
            isWalkIn: false,
            viewsCount: 1,
            applicationsCount: 0,
            postedDate: new Date().toISOString(),
            expiryDate: new Date(Date.now() + 60*24*60*60*1000).toISOString(),
            companyName: sub.companyName || "Verified Employer"
          };
          fcgStore.jobs.unshift(newJob);
          persistStore();
        }
        return wrapResponse({ success: true });
      }
      return wrapResponse({ success: true, submissions: fcgStore.submissions });
    }

    // Interviews
    if (pathname.includes("/api/admin/interviews")) {
      if (method === "POST") {
        const newInt = {
          id: "int-" + Date.now(),
          candidateName: body.candidateName || "Candidate",
          candidatePhone: body.candidatePhone || "9876543210",
          jobTitle: body.jobTitle || "Executive Role",
          scheduledAt: (body.date || "2026-10-15") + "T" + (body.time || "11:00") + ":00.000Z",
          mode: body.mode || "In-Person (Azadpur Head Office)",
          status: "Scheduled",
          createdAt: new Date().toISOString()
        };
        fcgStore.interviews.unshift(newInt);
        persistStore();
        return wrapResponse({ success: true, interview: newInt });
      }
      return wrapResponse({ success: true, interviews: fcgStore.interviews });
    }

    // Post application (candidate form)
    if (pathname === "/api/applications") {
      const newApp = {
        id: "app-" + Date.now(),
        jobId: body.jobId || "general",
        jobTitle: body.jobTitle || "General Candidate Application",
        name: body.name || "Candidate",
        phone: body.phone || "8826140781",
        email: body.email || "candidate@email.com",
        location: body.location || "Delhi/NCR",
        qualification: body.qualification || "Graduate",
        experience: body.experience || "3 Yrs",
        currentSalary: body.currentSalary || "N/A",
        expectedSalary: body.expectedSalary || "N/A",
        noticePeriod: body.noticePeriod || "Immediate",
        coverMessage: body.coverMessage || "",
        resumeFileName: body.resumeFile ? "Uploaded_CV.pdf" : "",
        resumeFilePath: "",
        status: "New",
        internalNotes: [],
        createdAt: new Date().toISOString(),
        source: "Website Form"
      };
      fcgStore.applications.unshift(newApp);
      persistStore();
      return wrapResponse({ success: true, application: newApp });
    }

    // Post employer vacancy
    if (pathname === "/api/employer/post-job") {
      const newSub = {
        id: "sub-" + Date.now(),
        companyName: body.companyName || "Employer",
        contactPerson: body.contactPerson || "HR Manager",
        email: body.email || "hr@company.com",
        phone: body.phone || "8826140781",
        jobTitle: body.jobTitle || "Hiring Requirement",
        location: body.location || "Delhi/NCR",
        department: body.department || "Operations",
        salaryRange: body.salaryRange || "Competitive",
        experience: body.experience || "2+ Yrs",
        qualification: body.qualification || "Graduate",
        openings: parseInt(body.openings || 1),
        description: body.description || "",
        requirements: [],
        status: "pending",
        createdAt: new Date().toISOString()
      };
      fcgStore.submissions.unshift(newSub);
      persistStore();
      return wrapResponse({ success: true, submission: newSub });
    }

    // Candidate tools
    if (pathname.includes("/api/candidate-tools")) {
      return {
        success: true,
        salaryBenchmarks: [
          { role: "Full-Stack Developer (MERN / Python)", exp: "3-6 Yrs", range: "₹12 - ₹22 LPA", trend: "+14% YoY" },
          { role: "Financial Analyst / Senior Accountant", exp: "4-7 Yrs", range: "₹7 - ₹14 LPA", trend: "+10% YoY" },
          { role: "Supply Chain & Logistics Manager", exp: "5-9 Yrs", range: "₹10 - ₹18 LPA", trend: "+12% YoY" },
          { role: "B2B Corporate Sales Lead", exp: "3-6 Yrs", range: "₹8 - ₹16 LPA + Comm", trend: "+18% YoY" }
        ]
      };
    }

    return { success: true, message: "Client static store processed request." };
  }

  let allJobs = [];
  let currentFilter = {
    search: '',
    location: 'all',
    department: 'all',
    experience: 'all',
    sort: 'relevance',
    featured: false,
    urgent: false,
    walkin: false
  };

  let activeAdminTab = 'overview';
  let adminSessionToken = (function() {
    try {
      return sessionStorage.getItem('fcg_admin_token') || null;
    } catch(e) {
      return null;
    }
  })();

  // Initialize once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    initJobExplorer();
    checkUrlHashForAdmin();
    initCategoryAlertToggles();
  });

  window.addEventListener('hashchange', checkUrlHashForAdmin);

  function checkUrlHashForAdmin() {
    const hash = (window.location.hash || '').toLowerCase();
    if (hash === '#admin' || hash === '#recruiter' || hash === '#recruiter-portal' || hash === '#recruiterportal') {
      window.openAdminPortal();
    }
  }

  // Backdrop click and Escape key listeners to close all modals smoothly
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList && e.target.classList.contains('rec-modal-backdrop')) {
      e.target.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.rec-modal-backdrop.open').forEach(m => m.classList.remove('open'));
      document.body.style.overflow = '';
    }
  });

  // ==========================================
  // 1. JOB EXPLORER & VACANCY SEARCH
  // ==========================================
  async function initJobExplorer() {
    await fetchAndRenderJobs();
    bindSearchListeners();
  }

  window.fetchAndRenderJobs = async function() {
    const container = document.getElementById('jobsListContainer');
    if (!container) return;

    try {
      const params = new URLSearchParams();
      if (currentFilter.search) params.append('search', currentFilter.search);
      if (currentFilter.location && currentFilter.location !== 'all') params.append('location', currentFilter.location);
      if (currentFilter.department && currentFilter.department !== 'all') params.append('department', currentFilter.department);
      if (currentFilter.experience && currentFilter.experience !== 'all') params.append('experience', currentFilter.experience);
      if (currentFilter.sort) params.append('sort', currentFilter.sort);
      if (currentFilter.featured) params.append('featured', 'true');
      if (currentFilter.urgent) params.append('urgent', 'true');
      if (currentFilter.walkin) params.append('walkin', 'true');

      const res = await safeFetchJson(`/api/jobs?${params.toString()}`);
      const data = await res.json();

      if (data.success) {
        allJobs = data.jobs;
        renderJobCards(allJobs);
        updateJobsCounter(data.count);
      }
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
      container.innerHTML = `<div style="text-align: center; padding: 2rem; color: #ef4444;">Unable to load vacancies. Please refresh or contact our WhatsApp desk.</div>`;
    }
  };

  function updateJobsCounter(count) {
    const counterEl = document.getElementById('jobsCounterText');
    if (counterEl) {
      counterEl.textContent = `Showing ${count} Active Verified Vacancies in Delhi/NCR`;
    }
  }

  function renderJobCards(jobs) {
    const container = document.getElementById('jobsListContainer');
    if (!container) return;

    if (jobs.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem;">No Vacancies Match Your Filter</h3>
          <p style="color: #64748b; font-size: 0.92rem; max-width: 480px; margin: 0 auto 1.5rem;">Try adjusting your location or sector keywords, or submit your resume directly to our North Delhi recruitment pool.</p>
          <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
            <button onclick="resetJobFilters()" class="btn btn-outline btn-sm">Reset All Filters</button>
            <button onclick="openApplyModal('general', 'General Application')" class="btn btn-primary btn-sm">Submit CV to Talent Pool</button>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = jobs.map(job => {
      const isFeatured = job.isFeatured ? '<span class="badge-tag badge-featured">⭐ Featured</span>' : '';
      const isUrgent = job.isUrgent ? '<span class="badge-tag badge-urgent">🔥 Urgent Hiring</span>' : '';
      const isWalkIn = job.isWalkIn ? '<span class="badge-tag badge-walkin">🚶 Walk-in Interview</span>' : '';

      return `
        <article class="job-card-item ${job.isFeatured ? 'featured-card' : ''} ${job.isUrgent ? 'urgent-card' : ''}">
          <div class="job-card-top">
            <div>
              <div class="job-badge-tags">
                ${isUrgent}
                ${isFeatured}
                ${isWalkIn}
                <span class="badge-tag" style="background: #f1f5f9; color: #475569;">${job.jobType}</span>
              </div>
              <h3 class="job-card-title" onclick="openJobDetailModal('${job.slug}')">${escapeHtml(job.title)}</h3>
              <div class="job-company-dept">
                <strong>${escapeHtml(job.companyName || 'Confidential Client')}</strong> · ${escapeHtml(job.department)}
              </div>
            </div>
          </div>

          <div class="job-specs-pills">
            <span class="spec-pill">📍 ${escapeHtml(job.location)}</span>
            <span class="spec-pill">⏳ ${escapeHtml(job.experience)}</span>
            <span class="spec-pill salary-pill">💰 ${escapeHtml(job.salaryRange)}</span>
            <span class="spec-pill">👥 ${job.openings} Openings</span>
          </div>

          <p class="job-card-desc">${escapeHtml(job.description)}</p>

          <div class="job-card-skills">
            ${(job.skills || []).slice(0, 4).map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('')}
            ${(job.skills || []).length > 4 ? `<span class="skill-tag">+${job.skills.length - 4} more</span>` : ''}
          </div>

          <div class="job-card-footer">
            <span class="job-meta-dates">Posted: ${new Date(job.postedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} · 👁 ${job.viewsCount || 0} views</span>
            <div class="job-actions-wrap">
              <button onclick="openJobDetailModal('${job.slug}')" class="btn btn-outline btn-sm">View Details</button>
              <button onclick="openApplyModal('${job.id}', '${escapeHtml(job.title)}')" class="btn btn-primary btn-sm">Apply Now →</button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function bindSearchListeners() {
    const searchInput = document.getElementById('jobSearchInput');
    if (searchInput) {
      let timeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          currentFilter.search = e.target.value.trim();
          fetchAndRenderJobs();
        }, 300);
      });
    }

    const locSelect = document.getElementById('jobLocationFilter');
    if (locSelect) {
      locSelect.addEventListener('change', (e) => {
        currentFilter.location = e.target.value;
        fetchAndRenderJobs();
      });
    }

    const deptSelect = document.getElementById('jobDeptFilter');
    if (deptSelect) {
      deptSelect.addEventListener('change', (e) => {
        currentFilter.department = e.target.value;
        fetchAndRenderJobs();
      });
    }

    const expSelect = document.getElementById('jobExpFilter');
    if (expSelect) {
      expSelect.addEventListener('change', (e) => {
        currentFilter.experience = e.target.value;
        fetchAndRenderJobs();
      });
    }

    const sortSelect = document.getElementById('jobSortFilter');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentFilter.sort = e.target.value;
        fetchAndRenderJobs();
      });
    }
  }

  window.toggleQuickPill = function(type, el) {
    if (type === 'all') {
      currentFilter.featured = false;
      currentFilter.urgent = false;
      currentFilter.walkin = false;
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      el.classList.add('active');
    } else {
      document.getElementById('pillAll')?.classList.remove('active');
      currentFilter[type] = !currentFilter[type];
      el.classList.toggle('active', currentFilter[type]);
    }
    fetchAndRenderJobs();
  };

  window.resetJobFilters = function() {
    currentFilter = {
      search: '',
      location: 'all',
      department: 'all',
      experience: 'all',
      sort: 'relevance',
      featured: false,
      urgent: false,
      walkin: false
    };
    const s = document.getElementById('jobSearchInput'); if (s) s.value = '';
    const l = document.getElementById('jobLocationFilter'); if (l) l.value = 'all';
    const d = document.getElementById('jobDeptFilter'); if (d) d.value = 'all';
    const e = document.getElementById('jobExpFilter'); if (e) e.value = 'all';
    const so = document.getElementById('jobSortFilter'); if (so) so.value = 'relevance';
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    document.getElementById('pillAll')?.classList.add('active');
    fetchAndRenderJobs();
  };

  // ==========================================
  // 2. JOB DETAILS MODAL & CRAWLER SCHEMA
  // ==========================================
  window.openJobDetailModal = async function(slugOrId) {
    const modal = document.getElementById('jobDetailModal');
    if (!modal) return;

    try {
      const res = await safeFetchJson(`/api/jobs/${slugOrId}`);
      const data = await res.json();
      if (!data.success || !data.job) return;

      const job = data.job;

      // Update dynamic JobPosting Schema in document head
      if (data.jobPostingSchema) {
        let schemaTag = document.getElementById('dynamic-jobdetail-schema');
        if (!schemaTag) {
          schemaTag = document.createElement('script');
          schemaTag.id = 'dynamic-jobdetail-schema';
          schemaTag.type = 'application/ld+json';
          document.head.appendChild(schemaTag);
        }
        schemaTag.textContent = JSON.stringify(data.jobPostingSchema);
      }

      document.getElementById('jobDetailTitle').textContent = job.title;
      document.getElementById('jobDetailCompany').textContent = `${job.companyName || 'Corporate Client'} · ${job.department}`;
      document.getElementById('jobDetailSalary').textContent = `💰 ${job.salaryRange}`;
      document.getElementById('jobDetailLocation').textContent = `📍 ${job.location}`;
      document.getElementById('jobDetailExperience').textContent = `⏳ ${job.experience}`;
      document.getElementById('jobDetailQual').textContent = `🎓 ${job.qualification}`;
      document.getElementById('jobDetailOpenings').textContent = `👥 ${job.openings} Openings`;
      document.getElementById('jobDetailDesc').innerHTML = `<p>${escapeHtml(job.description)}</p>`;

      const reqList = document.getElementById('jobDetailReqs');
      if (reqList) {
        reqList.innerHTML = (job.requirements || []).map(r => `<li>${escapeHtml(r)}</li>`).join('');
      }

      const skillsWrap = document.getElementById('jobDetailSkills');
      if (skillsWrap) {
        skillsWrap.innerHTML = (job.skills || []).map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('');
      }

      const applyBtn = document.getElementById('jobDetailApplyBtn');
      if (applyBtn) {
        applyBtn.onclick = () => {
          closeJobDetailModal();
          openApplyModal(job.id, job.title);
        };
      }

      const waBtn = document.getElementById('jobDetailWaBtn');
      if (waBtn) {
        const text = `Hello Future Care Global, I am inquiring about the job opening: "${job.title}" in ${job.location} (Ref: ${job.id}).`;
        waBtn.href = `https://api.whatsapp.com/send?phone=918826140781&text=${encodeURIComponent(text)}`;
      }

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    } catch (err) {
      console.error('Failed to load job details:', err);
    }
  };

  window.closeJobDetailModal = function() {
    const modal = document.getElementById('jobDetailModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  // ==========================================
  // 3. CANDIDATE QUICK APPLICATION (NO LOGIN)
  // ==========================================
  window.openApplyModal = function(jobId, jobTitle) {
    const modal = document.getElementById('applyModal');
    if (!modal) return;

    document.getElementById('applyJobId').value = jobId || 'general';
    document.getElementById('applyJobTitleHeading').textContent = jobTitle || 'Submit CV to Future Care Global';
    document.getElementById('applySuccessBox').style.display = 'none';
    document.getElementById('applyFormElements').style.display = 'block';

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeApplyModal = function() {
    const modal = document.getElementById('applyModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  window.handleCandidateApplicationSubmit = async function(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = document.getElementById('applySubmitBtn');
    const originalText = submitBtn.innerHTML;

    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ Submitting &amp; AI Parsing...</span>`;

      const formData = new FormData(form);

      const res = await safeFetchJson('/api/applications', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (data.success) {
        document.getElementById('applyFormElements').style.display = 'none';
        const successBox = document.getElementById('applySuccessBox');
        successBox.style.display = 'block';

        const parsed = data.application.parsedData || {};
        const skillsText = (parsed.skills && parsed.skills.length > 0)
          ? parsed.skills.slice(0, 5).join(', ')
          : 'Profile logged';

        const matches = data.matches || [];
        const matchesHtml = matches.length > 0
          ? `
            <div style="margin-top: 1rem; padding: 0.85rem; background: #ffffff; border: 1px solid #bbf7d0; border-radius: 8px;">
              <div style="font-weight: 700; font-size: 0.85rem; color: #166534; margin-bottom: 0.35rem;">
                🎯 AI Matching Found ${matches.length} Suitable Vacancies:
              </div>
              <ul style="font-size: 0.8125rem; color: #334155; margin-left: 1.25rem;">
                ${matches.slice(0, 3).map(m => `<li><strong>${escapeHtml(m.title)}</strong> (${m.score}% Match score)</li>`).join('')}
              </ul>
            </div>
          `
          : '';

        successBox.innerHTML = `
          <div style="text-align: center; padding: 1.5rem 0;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: #15803d; margin-bottom: 0.35rem;">
              Application Successfully Submitted!
            </h3>
            <p style="color: #475569; font-size: 0.92rem; max-width: 480px; margin: 0 auto 1.25rem;">
              Your profile has been saved securely in our talent database. No account or password is required.
            </p>

            <div class="ai-match-banner" style="text-align: left;">
              <div class="ai-match-badge">
                <span>🤖 AI Resume Parsing Summary:</span>
              </div>
              <div style="font-size: 0.85rem; color: #1e293b;">
                <strong>Extracted Skills:</strong> ${escapeHtml(skillsText)}<br/>
                <strong>Status:</strong> New Application · Assigned to North Delhi Talent Advisory
              </div>
              ${matchesHtml}
            </div>

            <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-top: 1.25rem;">
              <a href="${data.whatsappDeskUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                Forward Directly to WhatsApp (+91 8826140781) 💬
              </a>
              <button onclick="closeApplyModal()" class="btn btn-outline">Close</button>
            </div>
          </div>
        `;

        form.reset();
        fetchAndRenderJobs();
      } else {
        alert(data.error || 'Failed to submit application.');
      }
    } catch (err) {
      alert('Network error while submitting application: ' + err.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  };

  // ==========================================
  // 4. EMPLOYER POST-A-JOB (NO LOGIN)
  // ==========================================
  window.openPostJobModal = function() {
    const modal = document.getElementById('postJobModal');
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closePostJobModal = function() {
    const modal = document.getElementById('postJobModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  window.handleEmployerJobSubmit = async function(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = document.getElementById('postJobSubmitBtn');
    const originalText = submitBtn.innerHTML;

    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ Submitting Vacancy...</span>`;

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      const res = await safeFetchJson('/api/employer/post-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        document.getElementById('postJobFormElements').style.display = 'none';
        const successBox = document.getElementById('postJobSuccessBox');
        successBox.style.display = 'block';
        successBox.innerHTML = `
          <div style="text-align: center; padding: 2rem 0;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🏢</div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: #15803d; margin-bottom: 0.5rem;">
              Requirement Received (Pending Approval)
            </h3>
            <p style="color: #475569; font-size: 0.92rem; max-width: 500px; margin: 0 auto 1.5rem; line-height: 1.6;">
              Thank you <strong>${escapeHtml(payload.companyName)}</strong>. Your vacancy <strong>"${escapeHtml(payload.jobTitle)}"</strong> is logged. Our North Delhi recruitment team verifies requirements within 2 hours before publishing to live candidates.
            </p>
            <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
              <a href="https://api.whatsapp.com/send?phone=918826140781&text=${encodeURIComponent('Hello Future Care Global, We just submitted a job requirement: ' + payload.jobTitle)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                Notify WhatsApp Desk (+91 8826140781)
              </a>
              <button onclick="closePostJobModal()" class="btn btn-outline">Close</button>
            </div>
          </div>
        `;
        form.reset();
      } else {
        alert(data.error || 'Submission failed');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  };

  // ==========================================
  // 5. JOB ALERTS SUBSCRIPTION & INSTANT CATEGORY TOGGLES
  // ==========================================
  const CATEGORY_MAP = [
    { id: 'it_software', name: 'IT & Software', alias: ['it & software', 'it', 'software', 'technology'] },
    { id: 'bfsi', name: 'BFSI & Finance', alias: ['bfsi & finance', 'bfsi', 'banking', 'fintech'] },
    { id: 'finance_accounts', name: 'Finance & Accounts', alias: ['finance & accounts', 'finance', 'accounts', 'accounting', 'tax'] },
    { id: 'manufacturing', name: 'Manufacturing & Industrial', alias: ['manufacturing & industrial', 'manufacturing', 'industrial', 'engineering'] },
    { id: 'supply_chain', name: 'Supply Chain & Logistics', alias: ['supply chain & logistics', 'supply chain', 'logistics', 'operations'] },
    { id: 'healthcare', name: 'Healthcare & Pharma', alias: ['healthcare & pharma', 'healthcare', 'pharma', 'medical'] },
    { id: 'sales_marketing', name: 'Corporate Sales & Marketing', alias: ['corporate sales & marketing', 'sales & marketing', 'sales', 'marketing'] },
    { id: 'executive', name: 'Executive Management', alias: ['executive management', 'executive', 'leadership', 'cxo'] }
  ];

  function getCategoryId(categoryName) {
    if (!categoryName) return null;
    const lower = categoryName.trim().toLowerCase();
    const found = CATEGORY_MAP.find(c => c.name.toLowerCase() === lower || c.alias.some(a => lower.includes(a)));
    return found ? found.id : null;
  }

  function getCategoryOfficialName(idOrName) {
    const found = CATEGORY_MAP.find(c => c.id === idOrName || c.name.toLowerCase() === (idOrName || '').toLowerCase());
    return found ? found.name : idOrName;
  }

  // Extract alert form preferences from the existing modal form, saved profile, or active filters
  window.getExistingAlertFormData = function() {
    const form = document.getElementById('jobAlertForm');
    let email = '';
    let phone = '';
    let preferredLocation = 'Delhi/NCR';
    let preferredExperience = 'Any Experience';

    // 1. From alert modal form input if available
    if (form) {
      const emailInput = form.querySelector('input[name="email"]');
      if (emailInput && emailInput.value.trim()) email = emailInput.value.trim();

      const phoneInput = form.querySelector('input[name="phone"]');
      if (phoneInput && phoneInput.value.trim()) phone = phoneInput.value.trim();

      const locSelect = form.querySelector('select[name="preferredLocation"]');
      if (locSelect && locSelect.value) preferredLocation = locSelect.value;

      const expSelect = form.querySelector('select[name="preferredExperience"]');
      if (expSelect && expSelect.value) preferredExperience = expSelect.value;
    }

    // 2. From saved localStorage profile
    try {
      const saved = localStorage.getItem('fcg_job_alert_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!email && parsed.email) email = parsed.email;
        if (!phone && parsed.phone) phone = parsed.phone;
        if (preferredLocation === 'Delhi/NCR' && parsed.preferredLocation) preferredLocation = parsed.preferredLocation;
        if (preferredExperience === 'Any Experience' && parsed.preferredExperience) preferredExperience = parsed.preferredExperience;
      }
    } catch(e) {}

    // 3. Fallback to active search filters if user has picked one
    const locFilter = document.getElementById('jobLocationFilter');
    if (locFilter && locFilter.value && locFilter.value !== 'all' && preferredLocation === 'Delhi/NCR') {
      preferredLocation = locFilter.value;
    }
    const expFilter = document.getElementById('jobExpFilter');
    if (expFilter && expFilter.value && expFilter.value !== 'all' && preferredExperience === 'Any Experience') {
      preferredExperience = expFilter.value;
    }

    return { email, phone, preferredLocation, preferredExperience };
  };

  window.saveAlertProfile = function(profile) {
    try {
      const current = window.getExistingAlertFormData();
      const updated = { ...current, ...profile };
      localStorage.setItem('fcg_job_alert_profile', JSON.stringify(updated));

      // Sync into alert modal form
      const form = document.getElementById('jobAlertForm');
      if (form) {
        if (updated.email) {
          const emailInput = form.querySelector('input[name="email"]');
          if (emailInput) emailInput.value = updated.email;
        }
        if (updated.phone) {
          const phoneInput = form.querySelector('input[name="phone"]');
          if (phoneInput) phoneInput.value = updated.phone;
        }
        if (updated.preferredLocation) {
          const locSelect = form.querySelector('select[name="preferredLocation"]');
          if (locSelect) locSelect.value = updated.preferredLocation;
        }
        if (updated.preferredExperience) {
          const expSelect = form.querySelector('select[name="preferredExperience"]');
          if (expSelect) expSelect.value = updated.preferredExperience;
        }
      }
      return updated;
    } catch(e) {
      return profile;
    }
  };

  window.renderCategoryAlertProfile = function() {
    const profileBox = document.getElementById('catAlertsProfileBox');
    if (!profileBox) return;

    const profile = window.getExistingAlertFormData();

    if (profile.email) {
      profileBox.innerHTML = `
        <div class="cat-alerts-profile-pill">
          <span class="cat-alerts-status-dot"></span>
          <span style="font-size: 0.76rem; color: #64748b;">Alerts linked to:</span>
          <span class="cat-alerts-email-text">${escapeHtml(profile.email)}</span>
          <button type="button" class="cat-alerts-btn-action" onclick="promptChangeAlertEmail()" title="Change Email Address">Change</button>
        </div>
      `;
    } else {
      profileBox.innerHTML = `
        <div class="cat-alerts-input-group" id="catAlertsInputGroup">
          <input type="email" id="quickAlertEmailInput" placeholder="Enter email to activate instant alerts..." class="cat-alerts-quick-input" />
          <button type="button" class="btn btn-primary btn-sm" onclick="saveQuickAlertEmail()" style="padding: 0.4rem 0.85rem; font-size: 0.8rem; font-weight: 700;">Save</button>
        </div>
      `;
    }

    // Update footer sync note
    const footerNote = document.getElementById('catAlertsSyncStatusText');
    if (footerNote) {
      const locText = profile.preferredLocation || 'Delhi/NCR';
      const expText = profile.preferredExperience || 'Any Experience';
      footerNote.innerHTML = `📍 Synced with alert criteria: <strong>${escapeHtml(locText)}</strong> · <strong>${escapeHtml(expText)}</strong>`;
    }
  };

  window.saveQuickAlertEmail = function() {
    const input = document.getElementById('quickAlertEmailInput');
    if (!input) return;
    const email = input.value.trim();
    if (!email || !email.includes('@') || !email.includes('.')) {
      input.classList.add('highlight-alert');
      setTimeout(() => input.classList.remove('highlight-alert'), 1800);
      if (typeof showToast === 'function') {
        showToast('⚠️ Please enter a valid email address.');
      } else {
        alert('Please enter a valid email address.');
      }
      return;
    }

    window.saveAlertProfile({ email });
    window.renderCategoryAlertProfile();
    window.syncCategoryAlertsWithEmail(email);

    if (typeof showToast === 'function') {
      showToast(`✅ Alert email saved! You can now toggle categories with 1 click.`);
    }
  };

  window.promptChangeAlertEmail = function() {
    const current = window.getExistingAlertFormData();
    const newEmail = prompt('Enter the email address for job alerts:', current.email || '');
    if (newEmail !== null) {
      const trimmed = newEmail.trim();
      if (trimmed && trimmed.includes('@')) {
        window.saveAlertProfile({ email: trimmed });
        window.renderCategoryAlertProfile();
        window.syncCategoryAlertsWithEmail(trimmed);
        if (typeof showToast === 'function') {
          showToast(`✅ Alert email updated to ${trimmed}`);
        }
      }
    }
  };

  window.updateCategoryToggleUI = function(category, isActive) {
    const catId = getCategoryId(category);
    if (!catId) return;

    const card = document.getElementById(`catCard_${catId}`);
    const toggle = document.getElementById(`catToggle_${catId}`);
    const badge = document.getElementById(`catBadge_${catId}`);

    if (card) {
      card.classList.toggle('subscribed', !!isActive);
      card.classList.remove('loading');
    }
    if (toggle) {
      toggle.checked = !!isActive;
    }
    if (badge) {
      badge.textContent = isActive ? 'Subscribed' : 'Off';
    }
  };

  window.syncCategoryAlertsWithEmail = async function(email) {
    if (!email) return;

    try {
      const res = await safeFetchJson(`/api/job-alerts/status?email=${encodeURIComponent(email)}`);
      const data = await res.json();

      if (data.success && Array.isArray(data.activeCategories)) {
        // Reset all toggles first
        CATEGORY_MAP.forEach(c => {
          window.updateCategoryToggleUI(c.name, false);
        });

        // Set active toggles based on server subscriptions
        data.activeCategories.forEach(catName => {
          window.updateCategoryToggleUI(catName, true);
        });
      }
    } catch (err) {
      console.warn('Could not fetch alert status:', err);
    }
  };

  window.handleCategoryToggleChange = async function(category, isChecked) {
    const profile = window.getExistingAlertFormData();

    // If no email, check if user typed one in quick input
    let email = profile.email;
    if (!email) {
      const quickInput = document.getElementById('quickAlertEmailInput');
      if (quickInput && quickInput.value.trim() && quickInput.value.includes('@')) {
        email = quickInput.value.trim();
        window.saveAlertProfile({ email });
        window.renderCategoryAlertProfile();
      }
    }

    const catId = getCategoryId(category);
    const card = catId ? document.getElementById(`catCard_${catId}`) : null;
    const toggle = catId ? document.getElementById(`catToggle_${catId}`) : null;

    if (!email) {
      // Revert switch
      if (toggle) toggle.checked = !isChecked;

      const quickInput = document.getElementById('quickAlertEmailInput');
      if (quickInput) {
        quickInput.focus();
        quickInput.classList.add('highlight-alert');
        setTimeout(() => quickInput.classList.remove('highlight-alert'), 1800);
      }

      if (typeof showToast === 'function') {
        showToast('⚠️ Please enter an email address to activate instant alerts.');
      } else {
        alert('Please enter an email address to activate instant alerts.');
      }
      return;
    }

    const officialName = getCategoryOfficialName(category);

    // Provide visual feedback
    if (card) card.classList.add('loading');

    try {
      const payload = {
        email: email,
        category: officialName,
        active: isChecked,
        phone: profile.phone || '',
        preferredLocation: profile.preferredLocation || 'Delhi/NCR',
        preferredExperience: profile.preferredExperience || 'Any Experience'
      };

      const res = await safeFetchJson('/api/job-alerts/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        window.updateCategoryToggleUI(officialName, data.active);

        const toastMsg = data.active
          ? `🔔 Subscribed to ${officialName} alerts! Sent to ${email}`
          : `🔕 Unsubscribed from ${officialName} alerts.`;

        if (typeof showToast === 'function') {
          showToast(toastMsg);
        }
      } else {
        if (toggle) toggle.checked = !isChecked;
        if (card) card.classList.remove('loading');
        if (typeof showToast === 'function') {
          showToast(`❌ ${data.error || 'Failed to update alert'}`);
        } else {
          alert(data.error || 'Failed to update alert');
        }
      }
    } catch (err) {
      if (toggle) toggle.checked = !isChecked;
      if (card) card.classList.remove('loading');
      if (typeof showToast === 'function') {
        showToast('❌ Network error updating alert');
      } else {
        alert('Network error updating alert');
      }
    }
  };

  window.toggleAllCategoryAlerts = async function(subscribeAll) {
    const profile = window.getExistingAlertFormData();
    let email = profile.email;
    if (!email) {
      const quickInput = document.getElementById('quickAlertEmailInput');
      if (quickInput && quickInput.value.trim() && quickInput.value.includes('@')) {
        email = quickInput.value.trim();
        window.saveAlertProfile({ email });
        window.renderCategoryAlertProfile();
      }
    }

    if (!email) {
      const quickInput = document.getElementById('quickAlertEmailInput');
      if (quickInput) {
        quickInput.focus();
        quickInput.classList.add('highlight-alert');
        setTimeout(() => quickInput.classList.remove('highlight-alert'), 1800);
      }
      if (typeof showToast === 'function') {
        showToast('⚠️ Please enter an email address to activate alerts.');
      }
      return;
    }

    if (typeof showToast === 'function') {
      showToast(subscribeAll ? '⏳ Subscribing to all categories...' : '⏳ Clearing all alert subscriptions...');
    }

    for (const cat of CATEGORY_MAP) {
      try {
        await safeFetchJson('/api/job-alerts/toggle', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            category: cat.name,
            active: subscribeAll,
            phone: profile.phone || '',
            preferredLocation: profile.preferredLocation || 'Delhi/NCR',
            preferredExperience: profile.preferredExperience || 'Any Experience'
          })
        });
        window.updateCategoryToggleUI(cat.name, subscribeAll);
      } catch (e) {}
    }

    if (typeof showToast === 'function') {
      showToast(subscribeAll
        ? `🔔 Subscribed to all categories! Verified updates sent to ${email}.`
        : `🔕 All category alerts have been turned off.`
      );
    }
  };

  window.initCategoryAlertToggles = function() {
    const toggleSection = document.getElementById('categoryAlertsToggleSection');
    if (!toggleSection) return;

    window.renderCategoryAlertProfile();

    const profile = window.getExistingAlertFormData();
    if (profile.email) {
      window.syncCategoryAlertsWithEmail(profile.email);
    }

    // Bidirectional sync with jobAlertForm inputs
    const form = document.getElementById('jobAlertForm');
    if (form) {
      form.addEventListener('input', (e) => {
        if (e.target && e.target.name === 'email' && e.target.value.includes('@')) {
          window.saveAlertProfile({ email: e.target.value.trim() });
          window.renderCategoryAlertProfile();
        }
      });
      form.addEventListener('change', () => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        window.saveAlertProfile(data);
        window.renderCategoryAlertProfile();
      });
    }

    // Also watch filter dropdown changes to keep criteria in sync
    const locFilter = document.getElementById('jobLocationFilter');
    if (locFilter) {
      locFilter.addEventListener('change', () => {
        if (locFilter.value && locFilter.value !== 'all') {
          window.saveAlertProfile({ preferredLocation: locFilter.value });
          window.renderCategoryAlertProfile();
        }
      });
    }

    const expFilter = document.getElementById('jobExpFilter');
    if (expFilter) {
      expFilter.addEventListener('change', () => {
        if (expFilter.value && expFilter.value !== 'all') {
          window.saveAlertProfile({ preferredExperience: expFilter.value });
          window.renderCategoryAlertProfile();
        }
      });
    }
  };

  window.openJobAlertModal = function() {
    const modal = document.getElementById('jobAlertModal');
    if (!modal) return;

    // Pre-populate form with existing alert data
    const profile = window.getExistingAlertFormData();
    const form = document.getElementById('jobAlertForm');
    if (form) {
      if (profile.email) {
        const emailInput = form.querySelector('input[name="email"]');
        if (emailInput && !emailInput.value) emailInput.value = profile.email;
      }
      if (profile.phone) {
        const phoneInput = form.querySelector('input[name="phone"]');
        if (phoneInput && !phoneInput.value) phoneInput.value = profile.phone;
      }
      if (profile.preferredLocation) {
        const locSelect = form.querySelector('select[name="preferredLocation"]');
        if (locSelect) locSelect.value = profile.preferredLocation;
      }
      if (profile.preferredExperience) {
        const expSelect = form.querySelector('select[name="preferredExperience"]');
        if (expSelect) expSelect.value = profile.preferredExperience;
      }
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeJobAlertModal = function() {
    const modal = document.getElementById('jobAlertModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  window.handleJobAlertSubmit = async function(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = document.getElementById('jobAlertSubmitBtn');
    const originalText = submitBtn.innerHTML;

    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ Subscribing...</span>`;

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      const res = await safeFetchJson('/api/job-alerts/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        if (typeof showToast === 'function') {
          showToast(data.message || 'Job alert subscribed successfully!');
        } else {
          alert(data.message || 'Job alert subscribed successfully!');
        }
        closeJobAlertModal();

        // Save form data into profile and sync with toggle component
        if (payload.email) {
          window.saveAlertProfile({
            email: payload.email,
            phone: payload.phone || '',
            preferredLocation: payload.preferredLocation || 'Delhi/NCR',
            preferredExperience: payload.preferredExperience || 'Any Experience'
          });
          window.renderCategoryAlertProfile();
          window.syncCategoryAlertsWithEmail(payload.email);
        }
      } else {
        if (typeof showToast === 'function') {
          showToast('❌ ' + (data.error || 'Failed to subscribe'));
        } else {
          alert(data.error || 'Failed to subscribe');
        }
      }
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  };

  // ==========================================
  // 6. CANDIDATE CAREER TOOLS MODAL
  // ==========================================
  window.openCareerToolsModal = async function() {
    const modal = document.getElementById('careerToolsModal');
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const dynamicTarget = document.getElementById('dynamicBenchmarksList');
    if (dynamicTarget && !dynamicTarget.dataset.loaded) {
      try {
        const res = await safeFetchJson('/api/candidate-tools');
        const data = await res.json();
        if (data.success && data.salaryBenchmarks) {
          dynamicTarget.innerHTML = data.salaryBenchmarks.map(b => `
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.85rem 1rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <div>
                <strong style="color: var(--text-main); font-size: 0.95rem;">${escapeHtml(b.role)}</strong><br/>
                <small style="color: #64748b;">📍 Top Hubs: ${escapeHtml(b.topHubs)}</small>
              </div>
              <span class="spec-pill salary-pill" style="font-size: 0.95rem; font-weight: 800;">${escapeHtml(b.delhiNcrRange)}</span>
            </div>
          `).join('');
          dynamicTarget.dataset.loaded = 'true';
        }
      } catch (e) {
        console.error('Failed to load dynamic tools data', e);
      }
    }
  };

  window.closeCareerToolsModal = function() {
    const modal = document.getElementById('careerToolsModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  // ==========================================
  // 7. ADMIN DASHBOARD (SECURE PASSCODE PROTECTED)
  // ==========================================
  window.openAdminPortal = function() {
    const modal = document.getElementById('adminDashboardModal');
    if (!modal) {
      console.warn('adminDashboardModal element not found');
      return;
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (!adminSessionToken) {
      try {
        adminSessionToken = sessionStorage.getItem('fcg_admin_token') || null;
      } catch(e) {}
    }

    if (!adminSessionToken) {
      showAdminLoginView();
    } else {
      showAdminDashboard();
    }
  };

  window.adminLogout = function() {
    adminSessionToken = null;
    try {
      sessionStorage.removeItem('fcg_admin_token');
    } catch(e) {}
    showAdminLoginView();
    if (window.showToast) window.showToast('Recruiter console locked.');
  };

  function showAdminLoginView(errorMsg = '') {
    const content = document.getElementById('adminTabContent');
    if (!content) return;

    const nav = document.querySelector('.admin-tab-nav');
    if (nav) nav.style.display = 'none';

    const lockBtn = document.getElementById('adminHeaderLockBtn');
    if (lockBtn) lockBtn.style.display = 'none';

    content.innerHTML = `
      <div style="max-width: 440px; margin: 2rem auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 14px; padding: 2.25rem 2rem; box-shadow: 0 10px 25px rgba(0,0,0,0.06); text-align: center;">
        <div style="width: 58px; height: 58px; background: #fef2f2; color: var(--primary-red); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; font-size: 1.75rem;">
          🔐
        </div>
        <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.35rem;">
          Recruiter Portal Access
        </h3>
        <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 1.5rem; line-height: 1.5;">
          Future Care Global verified administrator area for Delhi/NCR candidate management, employer vacancy approvals, and interview scheduling.
        </p>

        ${errorMsg ? `
          <div style="background: #fee2e2; border: 1px solid #fca5a5; color: #b91c1c; padding: 0.65rem 0.85rem; border-radius: 6px; font-size: 0.8125rem; font-weight: 600; margin-bottom: 1.25rem;">
            ${escapeHtml(errorMsg)}
          </div>
        ` : ''}

        <form id="adminLoginForm" onsubmit="handleAdminLoginSubmit(event)">
          <div style="text-align: left; margin-bottom: 1.5rem;">
            <label for="adminPasscodeInput" style="display: block; font-size: 0.8125rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem;">
              Admin Password
            </label>
            <input type="password" id="adminPasscodeInput" class="form-input" placeholder="Enter admin password" value="" required autocomplete="current-password" style="font-size: 1rem; padding: 0.75rem 1rem;" />
          </div>

          <button type="submit" id="adminLoginSubmitBtn" class="btn btn-primary" style="width: 100%; padding: 0.85rem; font-size: 1rem; justify-content: center;">
            Unlock Recruiter Console →
          </button>
        </form>
      </div>
    `;

    setTimeout(() => {
      const input = document.getElementById('adminPasscodeInput');
      if (input) input.focus();
    }, 100);
  }

  window.handleAdminLoginSubmit = async function(event) {
    if (event) event.preventDefault();
    const input = document.getElementById('adminPasscodeInput');
    const passcode = input ? input.value.trim() : '';

    if (!passcode) {
      showAdminLoginView('Please enter your password to proceed.');
      return;
    }

    const btn = document.getElementById('adminLoginSubmitBtn');

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span>Verifying Password...</span>';
    }

    try {
      const res = await safeFetchJson('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode })
      });
      const data = await res.json();

      if (data.success) {
        adminSessionToken = data.token;
        try {
          sessionStorage.setItem('fcg_admin_token', adminSessionToken);
        } catch(e) {}
        const nav = document.querySelector('.admin-tab-nav');
        if (nav) nav.style.display = 'flex';
        showAdminDashboard();
        if (window.showToast) window.showToast('Recruiter console unlocked successfully.');
      } else {
        showAdminLoginView(data.error || 'Incorrect password. Please try again.');
      }
    } catch (err) {
      showAdminLoginView('Network connection error: ' + err.message);
    }
  };

  function showAdminDashboard() {
    const modal = document.getElementById('adminDashboardModal');
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const nav = document.querySelector('.admin-tab-nav');
    if (nav) nav.style.display = 'flex';

    const lockBtn = document.getElementById('adminHeaderLockBtn');
    if (lockBtn) lockBtn.style.display = 'inline-flex';

    loadAdminTab(activeAdminTab);
  }

  window.closeAdminPortal = function() {
    const modal = document.getElementById('adminDashboardModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  window.switchAdminTab = function(tabName) {
    activeAdminTab = tabName;
    document.querySelectorAll('.admin-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    loadAdminTab(tabName);
  };

  async function loadAdminTab(tab) {
    const content = document.getElementById('adminTabContent');
    if (!content) return;

    content.innerHTML = `<div style="text-align: center; padding: 3rem; color: #64748b;">Loading ${tab}...</div>`;

    if (tab === 'overview') {
      const res = await safeFetchJson('/api/admin/analytics');
      const data = await res.json();
      const stats = data.stats || {};

      content.innerHTML = `
        <div class="admin-stats-grid">
          <div class="admin-stat-card">
            <div class="admin-stat-val" style="color: var(--primary-blue);">${stats.activeJobs || 0}</div>
            <div class="admin-stat-label">Active Published Vacancies</div>
          </div>
          <div class="admin-stat-card">
            <div class="admin-stat-val" style="color: #6366f1;">${stats.totalApplications || 0}</div>
            <div class="admin-stat-label">Candidate Applications</div>
          </div>
          <div class="admin-stat-card">
            <div class="admin-stat-val" style="color: #f59e0b;">${stats.shortlistedCount || 0}</div>
            <div class="admin-stat-label">Shortlisted Candidates</div>
          </div>
          <div class="admin-stat-card">
            <div class="admin-stat-val" style="color: #8b5cf6;">${stats.interviewsCount || 0}</div>
            <div class="admin-stat-label">Interviews Scheduled</div>
          </div>
          <div class="admin-stat-card">
            <div class="admin-stat-val" style="color: #10b981;">${stats.placementsCount || 0}</div>
            <div class="admin-stat-label">Successful Placements</div>
          </div>
          <div class="admin-stat-card">
            <div class="admin-stat-val" style="color: var(--primary-red);">${stats.pendingEmployerJobs || 0}</div>
            <div class="admin-stat-label">Pending Employer Posts</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem;">
          <div class="admin-stat-card">
            <h4 style="font-size: 1rem; font-weight: 800; margin-bottom: 0.85rem; border-bottom: 2px solid var(--primary-blue); padding-bottom: 0.4rem;">
              🔥 Most Viewed Vacancies
            </h4>
            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
              ${(data.topJobsByViews || []).map(j => `
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.4rem;">
                  <span>${escapeHtml(j.title)}</span>
                  <strong>${j.viewsCount || 0} views</strong>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="admin-stat-card">
            <h4 style="font-size: 1rem; font-weight: 800; margin-bottom: 0.85rem; border-bottom: 2px solid var(--primary-red); padding-bottom: 0.4rem;">
              📥 Top Applications by Role
            </h4>
            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
              ${(data.topJobsByApplications || []).map(j => `
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.4rem;">
                  <span>${escapeHtml(j.title)}</span>
                  <span class="status-badge status-New">${j.applicationsCount || 0} applicants</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (tab === 'jobs') {
      const res = await safeFetchJson('/api/jobs?status=all');
      const data = await res.json();
      const jobs = data.jobs || [];

      content.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h4 style="font-size: 1.15rem; font-weight: 800; margin: 0;">Vacancy Database (${jobs.length})</h4>
          <button onclick="adminOpenCreateJobModal()" class="btn btn-primary btn-sm">+ Post New Job</button>
        </div>

        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Title &amp; Location</th>
                <th>Department</th>
                <th>Salary Range</th>
                <th>Status</th>
                <th>Views/Apps</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${jobs.map(j => `
                <tr>
                  <td>
                    <strong>${escapeHtml(j.title)}</strong><br/>
                    <small style="color: #64748b;">📍 ${escapeHtml(j.location)} · ${escapeHtml(j.experience)}</small>
                  </td>
                  <td>${escapeHtml(j.department)}</td>
                  <td><span class="spec-pill salary-pill">${escapeHtml(j.salaryRange)}</span></td>
                  <td><span class="status-badge status-${j.status}">${j.status}</span></td>
                  <td>${j.viewsCount || 0} / ${j.applicationsCount || 0}</td>
                  <td>
                    <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
                      <button onclick="adminJobAction('${j.id}', 'toggle-publish')" class="btn btn-outline btn-sm" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">
                        ${j.status === 'published' ? 'Unpublish' : 'Publish'}
                      </button>
                      <button onclick="adminJobAction('${j.id}', 'duplicate')" class="btn btn-outline btn-sm" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Copy</button>
                      <button onclick="adminJobAction('${j.id}', 'toggle-urgent')" class="btn btn-outline btn-sm" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #ef4444;">
                        ${j.isUrgent ? '★ Urgent' : 'Urgent'}
                      </button>
                      <button onclick="adminDeleteJob('${j.id}')" class="btn btn-outline btn-sm" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #dc2626;">Del</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (tab === 'applications') {
      const res = await safeFetchJson('/api/admin/applications');
      const data = await res.json();
      const apps = data.applications || [];

      content.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <h4 style="font-size: 1.15rem; font-weight: 800; margin: 0;">Applications Pipeline (${apps.length})</h4>
          <div style="display: flex; gap: 0.5rem;">
            <a href="/api/admin/applications/export/csv" class="btn btn-outline btn-sm">📥 Export to CSV</a>
          </div>
        </div>

        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Target Job</th>
                <th>Loc / Exp / Notice</th>
                <th>Status</th>
                <th>CV &amp; Notes</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              ${apps.map(a => `
                <tr>
                  <td>
                    <strong>${escapeHtml(a.name)}</strong><br/>
                    <small style="color: #64748b;">${escapeHtml(a.phone)} · ${escapeHtml(a.email)}</small>
                  </td>
                  <td>${escapeHtml(a.jobTitle)}</td>
                  <td>
                    ${escapeHtml(a.location)}<br/>
                    <small style="color: #64748b;">Exp: ${escapeHtml(a.experience)} · Notice: ${escapeHtml(a.noticePeriod)}</small>
                  </td>
                  <td><span class="status-badge status-${a.status}">${a.status}</span></td>
                  <td>
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                      ${a.resumeFilePath ? `<a href="${a.resumeFilePath}" target="_blank" style="font-size: 0.78rem; font-weight: 700; color: var(--primary-blue);">📄 View CV</a>` : ''}
                      <button onclick="adminOpenNotesModal('${a.id}')" class="btn btn-outline btn-sm" style="padding: 0.2rem 0.45rem; font-size: 0.72rem;">Notes (${(a.internalNotes || []).length})</button>
                    </div>
                  </td>
                  <td>
                    <select onchange="adminUpdateAppStatus('${a.id}', this.value)" style="font-size: 0.8rem; padding: 0.25rem 0.4rem; border-radius: 4px; border: 1px solid #cbd5e1;">
                      <option value="New" ${a.status === 'New' ? 'selected' : ''}>New</option>
                      <option value="Shortlisted" ${a.status === 'Shortlisted' ? 'selected' : ''}>Shortlisted</option>
                      <option value="Interview" ${a.status === 'Interview' ? 'selected' : ''}>Interview</option>
                      <option value="Selected" ${a.status === 'Selected' ? 'selected' : ''}>Selected</option>
                      <option value="Rejected" ${a.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
                    </select>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (tab === 'resumes') {
      const res = await safeFetchJson('/api/admin/resumes');
      const data = await res.json();
      const candidates = data.candidates || [];

      content.innerHTML = `
        <div style="margin-bottom: 1rem;">
          <h4 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.35rem;">Smart Candidate &amp; Resume Database</h4>
          <p style="font-size: 0.85rem; color: #64748b;">Searchable private CV database with automated AI skill extraction and candidate scoring.</p>
        </div>

        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Candidate Profile</th>
                <th>AI Extracted Skills</th>
                <th>Experience &amp; Education</th>
                <th>Matched Vacancies</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${candidates.map(c => `
                <tr>
                  <td>
                    <strong>${escapeHtml(c.name)}</strong><br/>
                    <small style="color: #64748b;">${escapeHtml(c.phone)} · ${escapeHtml(c.email)}</small><br/>
                    <small>📍 ${escapeHtml(c.location)}</small>
                  </td>
                  <td>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.25rem;">
                      ${((c.parsedData && c.parsedData.skills) || []).slice(0, 5).map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('')}
                    </div>
                  </td>
                  <td>
                    ${escapeHtml(c.experience)}<br/>
                    <small style="color: #64748b;">${escapeHtml(c.qualification)}</small>
                  </td>
                  <td>
                    ${(c.matchedJobIds || []).slice(0, 2).map(m => `
                      <div style="font-size: 0.78rem;"><strong>${m.score}%:</strong> ${escapeHtml(m.title)}</div>
                    `).join('')}
                  </td>
                  <td>
                    <button onclick="adminScheduleInterviewModal('${c.id}', '${escapeHtml(c.name)}', '${escapeHtml(c.email)}', '${escapeHtml(c.phone)}', '${escapeHtml(c.jobTitle)}')" class="btn btn-primary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">
                      Schedule Interview
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (tab === 'employer-posts') {
      const res = await safeFetchJson('/api/admin/employer-jobs');
      const data = await res.json();
      const subs = data.submissions || [];

      content.innerHTML = `
        <div style="margin-bottom: 1rem;">
          <h4 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.35rem;">Employer Vacancy Submissions</h4>
          <p style="font-size: 0.85rem; color: #64748b;">Submissions from employers without account. Approving instantly publishes to live job vacancies.</p>
        </div>

        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Company &amp; Contact</th>
                <th>Job Title &amp; Dept</th>
                <th>Location &amp; Salary</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${subs.length === 0 ? `<tr><td colspan="5" style="text-align: center; padding: 2rem;">No employer submissions currently.</td></tr>` : ''}
              ${subs.map(s => `
                <tr>
                  <td>
                    <strong>${escapeHtml(s.companyName)}</strong><br/>
                    <small style="color: #64748b;">${escapeHtml(s.contactPerson)} · ${escapeHtml(s.phone)} · ${escapeHtml(s.email)}</small>
                  </td>
                  <td>
                    <strong>${escapeHtml(s.jobTitle)}</strong><br/>
                    <small style="color: #64748b;">${escapeHtml(s.department)} · ${s.openings} Openings</small>
                  </td>
                  <td>
                    ${escapeHtml(s.location)}<br/>
                    <small style="color: #166534; font-weight: 700;">${escapeHtml(s.salaryRange)}</small>
                  </td>
                  <td><span class="status-badge status-${s.status}">${s.status}</span></td>
                  <td>
                    ${s.status === 'pending' ? `
                      <div style="display: flex; gap: 0.35rem;">
                        <button onclick="adminApproveEmployerJob('${s.id}')" class="btn btn-primary btn-sm" style="padding: 0.25rem 0.55rem; font-size: 0.75rem;">Approve &amp; Publish</button>
                        <button onclick="adminRejectEmployerJob('${s.id}')" class="btn btn-outline btn-sm" style="padding: 0.25rem 0.55rem; font-size: 0.75rem; color: #ef4444;">Reject</button>
                      </div>
                    ` : '<span style="color: #10b981; font-weight: 700; font-size: 0.8rem;">✓ Handled</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (tab === 'interviews') {
      const res = await safeFetchJson('/api/admin/interviews');
      const data = await res.json();
      const ints = data.interviews || [];

      content.innerHTML = `
        <div style="margin-bottom: 1rem;">
          <h4 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.35rem;">Scheduled Interviews (${ints.length})</h4>
          <p style="font-size: 0.85rem; color: #64748b;">Manage candidate interview timelines, meeting locations, and notes.</p>
        </div>

        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Candidate &amp; Role</th>
                <th>Date &amp; Time</th>
                <th>Interview Mode</th>
                <th>Interviewer Panel</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${ints.length === 0 ? `<tr><td colspan="5" style="text-align: center; padding: 2rem;">No interviews scheduled yet.</td></tr>` : ''}
              ${ints.map(i => `
                <tr>
                  <td>
                    <strong>${escapeHtml(i.candidateName)}</strong><br/>
                    <small style="color: #64748b;">${escapeHtml(i.jobTitle)} · ${escapeHtml(i.candidatePhone)}</small>
                  </td>
                  <td>
                    <strong>${i.interviewDate}</strong> at ${i.interviewTime}
                  </td>
                  <td>
                    <span class="spec-pill">${escapeHtml(i.interviewType)}</span><br/>
                    <small style="color: #64748b;">${escapeHtml(i.meetingLinkOrAddress)}</small>
                  </td>
                  <td>${escapeHtml(i.interviewer)}</td>
                  <td><span class="status-badge status-Interview">${i.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
  }

  // Admin Job Actions
  window.adminJobAction = async function(id, action) {
    try {
      const res = await safeFetchJson(`/api/jobs/${id}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      const data = await res.json();
      if (data.success) {
        loadAdminTab('jobs');
        fetchAndRenderJobs();
      }
    } catch (err) {
      alert('Action error: ' + err.message);
    }
  };

  window.adminDeleteJob = async function(id) {
    if (!confirm('Are you sure you want to permanently delete this job?')) return;
    try {
      const res = await safeFetchJson(`/api/jobs/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        loadAdminTab('jobs');
        fetchAndRenderJobs();
      }
    } catch (err) {
      alert('Delete error: ' + err.message);
    }
  };

  window.adminUpdateAppStatus = async function(id, status) {
    try {
      const res = await safeFetchJson(`/api/admin/applications/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.success) {
        loadAdminTab('applications');
      }
    } catch (err) {
      alert('Status update error: ' + err.message);
    }
  };

  window.adminApproveEmployerJob = async function(id) {
    try {
      const res = await safeFetchJson(`/api/admin/employer-jobs/${id}/approve`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        alert(data.message || 'Job approved and published!');
        loadAdminTab('employer-posts');
        fetchAndRenderJobs();
      }
    } catch (err) {
      alert('Approval error: ' + err.message);
    }
  };

  window.adminRejectEmployerJob = async function(id) {
    if (!confirm('Reject this employer submission?')) return;
    try {
      const res = await safeFetchJson(`/api/admin/employer-jobs/${id}/reject`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        loadAdminTab('employer-posts');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // Inline Admin Dialog Popup Helper (Zero window.prompt/alert needed)
  function showAdminPopup(title, bodyHtml, onConfirm, confirmText) {
    let popup = document.getElementById('adminSubPopup');
    if (!popup) {
      popup = document.createElement('div');
      popup.id = 'adminSubPopup';
      popup.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.65);backdrop-filter:blur(3px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:1rem;';
      document.body.appendChild(popup);
    }
    popup.innerHTML = `
      <div style="background:#ffffff;border-radius:12px;max-width:480px;width:100%;box-shadow:0 20px 40px rgba(0,0,0,0.3);border:1px solid #cbd5e1;overflow:hidden;animation:modalScale 0.2s ease;">
        <div style="padding:1rem 1.25rem;background:#f8fafc;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;">
          <h4 style="margin:0;font-size:1.05rem;font-weight:800;color:var(--text-main);">${escapeHtml(title)}</h4>
          <button onclick="closeAdminPopup()" style="background:none;border:none;font-size:1.4rem;color:#94a3b8;cursor:pointer;line-height:1;">&times;</button>
        </div>
        <div style="padding:1.25rem;">
          ${bodyHtml}
        </div>
        <div style="padding:0.85rem 1.25rem;background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;justify-content:flex-end;gap:0.5rem;">
          <button onclick="closeAdminPopup()" class="btn btn-outline btn-sm">Cancel</button>
          <button id="adminPopupConfirmBtn" class="btn btn-primary btn-sm">${escapeHtml(confirmText || 'Submit')}</button>
        </div>
      </div>
    `;
    popup.style.display = 'flex';
    document.getElementById('adminPopupConfirmBtn').onclick = onConfirm;
  }

  window.closeAdminPopup = function() {
    const popup = document.getElementById('adminSubPopup');
    if (popup) popup.style.display = 'none';
  };

  window.adminOpenCreateJobModal = function() {
    showAdminPopup(
      'Post New Verified Vacancy',
      `
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          <div>
            <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.25rem;">Job Title *</label>
            <input type="text" id="newJobTitle" class="form-input" placeholder="e.g. Senior Frontend Engineer (React)" />
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
            <div>
              <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.25rem;">Department *</label>
              <input type="text" id="newJobDept" class="form-input" value="IT & Software" />
            </div>
            <div>
              <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.25rem;">Location *</label>
              <input type="text" id="newJobLoc" class="form-input" value="Noida Sector 62" />
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
            <div>
              <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.25rem;">Salary Range</label>
              <input type="text" id="newJobSalary" class="form-input" value="₹14 - 24 LPA" />
            </div>
            <div>
              <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.25rem;">Experience</label>
              <input type="text" id="newJobExp" class="form-input" value="3-6 Yrs" />
            </div>
          </div>
        </div>
      `,
      async () => {
        const title = document.getElementById('newJobTitle')?.value.trim();
        const department = document.getElementById('newJobDept')?.value.trim() || 'IT & Software';
        const location = document.getElementById('newJobLoc')?.value.trim() || 'Delhi/NCR';
        const salary = document.getElementById('newJobSalary')?.value.trim() || 'Best in Industry';
        const exp = document.getElementById('newJobExp')?.value.trim() || '2-5 Yrs';
        if (!title) {
          if (window.showToast) window.showToast('Please enter a job title');
          return;
        }

        const res = await safeFetchJson('/api/jobs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, department, location, salaryRange: salary, experience: exp, status: 'published', openings: 2 })
        });
        const data = await res.json();
        if (data.success) {
          closeAdminPopup();
          if (window.showToast) window.showToast('Job created & published to live portal!');
          loadAdminTab('jobs');
          fetchAndRenderJobs();
        }
      },
      'Publish Job'
    );
  };

  window.adminOpenNotesModal = function(appId) {
    showAdminPopup(
      'Add Internal Candidate Note',
      `
        <div>
          <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.35rem;">Recruiter Observation / Feedback</label>
          <textarea id="candNoteText" class="form-textarea" rows="3" placeholder="Enter notes from screening call, technical round, or salary discussion..."></textarea>
        </div>
      `,
      async () => {
        const note = document.getElementById('candNoteText')?.value.trim();
        if (!note) return;
        const res = await safeFetchJson(`/api/admin/applications/${appId}/notes`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ note, author: 'Recruitment Lead' })
        });
        const data = await res.json();
        if (data.success) {
          closeAdminPopup();
          if (window.showToast) window.showToast('Recruiter note recorded in candidate history.');
          loadAdminTab('applications');
        }
      },
      'Save Note'
    );
  };

  window.adminScheduleInterviewModal = function(appId, name, email, phone, role) {
    const today = new Date().toISOString().split('T')[0];
    showAdminPopup(
      `Schedule Interview: ${name}`,
      `
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          <div style="font-size:0.85rem;color:#64748b;">Target Role: <strong>${escapeHtml(role)}</strong> (${escapeHtml(phone)})</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
            <div>
              <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.25rem;">Date *</label>
              <input type="date" id="intDate" class="form-input" value="${today}" />
            </div>
            <div>
              <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.25rem;">Time *</label>
              <input type="text" id="intTime" class="form-input" value="11:30 AM" />
            </div>
          </div>
          <div>
            <label style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.25rem;">Interview Mode</label>
            <select id="intMode" class="form-select">
              <option value="In-Person (Azadpur Head Office)">In-Person (Azadpur Head Office, North Delhi)</option>
              <option value="Google Meet / Zoom">Google Meet / Video Conference</option>
              <option value="Telephonic Round">Telephonic Assessment</option>
            </select>
          </div>
        </div>
      `,
      async () => {
        const date = document.getElementById('intDate')?.value;
        const time = document.getElementById('intTime')?.value;
        const mode = document.getElementById('intMode')?.value || 'In-Person (Azadpur Head Office)';
        if (!date || !time) return;

        const res = await safeFetchJson('/api/admin/interviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            applicationId: appId,
            candidateName: name,
            candidateEmail: email,
            candidatePhone: phone,
            jobTitle: role,
            interviewDate: date,
            interviewTime: time,
            interviewType: mode,
            meetingLinkOrAddress: mode.includes('In-Person') ? 'Future Care Global, 313 Bank Wali Gali, Azadpur, North Delhi' : 'meet.google.com/fcg-talent-interview'
          })
        });
        const data = await res.json();
        if (data.success) {
          closeAdminPopup();
          if (window.showToast) window.showToast('Interview confirmed & candidate notified!');
          switchAdminTab('interviews');
        }
      },
      'Confirm Interview'
    );
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
