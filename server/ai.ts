import { GoogleGenAI } from '@google/genai';
import { Job } from './db.js';

export interface ParsedResume {
  extractedName?: string;
  extractedEmail?: string;
  extractedPhone?: string;
  skills: string[];
  education?: string;
  experienceYears?: number;
  summary?: string;
}

export interface JobMatch {
  jobId: string;
  score: number;
  title: string;
  location: string;
  matchReasons: string[];
}

export async function parseResumeWithAI(resumeText: string, originalFileName?: string): Promise<ParsedResume> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey && resumeText.trim().length > 30) {
    try {
      const ai = new GoogleGenAI();
      const prompt = `You are an expert recruitment parser for Future Care Global in Delhi/NCR. 
Analyze the following resume text and extract candidate parameters in valid JSON format:
{
  "extractedName": "Candidate Full Name",
  "extractedEmail": "email address",
  "extractedPhone": "phone number with country code if available",
  "skills": ["Skill 1", "Skill 2", "Skill 3"],
  "education": "Highest degree/qualification and university",
  "experienceYears": 5.5,
  "summary": "2-line executive summary of their background"
}

Resume Text:
${resumeText.slice(0, 4000)}

Return ONLY valid JSON without markdown wrapping.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt
      });

      const text = response.text || '';
      const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      return {
        extractedName: parsed.extractedName || extractNameFallback(resumeText, originalFileName),
        extractedEmail: parsed.extractedEmail || extractEmailFallback(resumeText),
        extractedPhone: parsed.extractedPhone || extractPhoneFallback(resumeText),
        skills: Array.isArray(parsed.skills) ? parsed.skills : extractSkillsFallback(resumeText),
        education: parsed.education || extractEducationFallback(resumeText),
        experienceYears: typeof parsed.experienceYears === 'number' ? parsed.experienceYears : extractExpFallback(resumeText),
        summary: parsed.summary || 'Profile reviewed and parsed by Future Care Global AI Talent Desk.'
      };
    } catch (err) {
      console.warn('Gemini API parse failed or returned invalid JSON, utilizing heuristic parser:', err);
    }
  }

  // Heuristic intelligent fallback parser
  return {
    extractedName: extractNameFallback(resumeText, originalFileName),
    extractedEmail: extractEmailFallback(resumeText),
    extractedPhone: extractPhoneFallback(resumeText),
    skills: extractSkillsFallback(resumeText),
    education: extractEducationFallback(resumeText),
    experienceYears: extractExpFallback(resumeText),
    summary: 'Candidate profile processed via Future Care Global recruitment parser.'
  };
}

export function matchJobsForCandidate(candidate: {
  skills?: string[];
  experience?: string | number;
  location?: string;
  role?: string;
}, allJobs: Job[]): JobMatch[] {
  const candidateSkills = (candidate.skills || []).map(s => s.toLowerCase());
  const candLoc = (candidate.location || '').toLowerCase();
  const candExpNum = typeof candidate.experience === 'number'
    ? candidate.experience
    : parseFloat(String(candidate.experience || '3').replace(/[^0-9.]/g, '')) || 3;

  const matches: JobMatch[] = [];

  for (const job of allJobs) {
    if (job.status !== 'published') continue;

    let score = 50; // base score for active opening
    const matchReasons: string[] = [];

    // Skills match
    const jobSkills = job.skills.map(s => s.toLowerCase());
    const matchedSkills = candidateSkills.filter(cs =>
      jobSkills.some(js => js.includes(cs) || cs.includes(js))
    );

    if (matchedSkills.length > 0) {
      const skillScore = Math.min(35, matchedSkills.length * 10);
      score += skillScore;
      matchReasons.push(`Skills match: ${matchedSkills.slice(0, 3).join(', ')}`);
    }

    // Location match (Delhi/NCR sub-region)
    const jobLoc = job.location.toLowerCase();
    if (candLoc && (jobLoc.includes(candLoc) || candLoc.includes(jobLoc) || (candLoc.includes('delhi') && jobLoc.includes('delhi')))) {
      score += 10;
      matchReasons.push(`Location proximity (${job.location})`);
    }

    // Experience match
    if (candExpNum >= job.minExp && candExpNum <= job.maxExp + 2) {
      score += 10;
      matchReasons.push(`Experience fit (${job.experience})`);
    }

    if (job.isUrgent) {
      score += 5;
    }

    score = Math.min(99, Math.max(40, score));

    matches.push({
      jobId: job.id,
      score,
      title: job.title,
      location: job.location,
      matchReasons
    });
  }

  return matches.sort((a, b) => b.score - a.score).slice(0, 5);
}

// Fallback parsing helpers
function extractEmailFallback(text: string): string | undefined {
  const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return match ? match[0] : undefined;
}

function extractPhoneFallback(text: string): string | undefined {
  const match = text.match(/(?:\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}/);
  return match ? match[0] : undefined;
}

function extractNameFallback(text: string, fileName?: string): string {
  if (fileName) {
    const clean = fileName.replace(/\.(pdf|docx|doc)$/i, '').replace(/[_-]/g, ' ').replace(/(resume|cv|latest|updated)/gi, '').trim();
    if (clean.length > 2) return clean;
  }
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length > 0 && lines[0].length < 40 && !lines[0].includes('@')) {
    return lines[0];
  }
  return 'Applicant';
}

function extractSkillsFallback(text: string): string[] {
  const dictionary = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'Kubernetes', 'CFA', 'Financial Modeling', 'DCF', 'M&A', 'GST Compliance',
    'Supply Chain', 'Warehouse Management', 'Logistics', 'Fleet Operations', 'Six Sigma', 'CNC Machining',
    'Plant Operations', 'B2B Sales', 'Key Account Management', 'CRM', 'Zendesk', 'Recruitment', 'HR Screening'
  ];
  const found: string[] = [];
  const lower = text.toLowerCase();
  for (const skill of dictionary) {
    if (lower.includes(skill.toLowerCase())) {
      found.push(skill);
    }
  }
  return found.length > 0 ? found : ['Full-Stack', 'Problem Solving', 'Communication'];
}

function extractEducationFallback(text: string): string {
  if (/b\.?tech|engineering|b\.?e\b/i.test(text)) return 'B.Tech / Engineering';
  if (/m\.?b\.?a\b/i.test(text)) return 'MBA / Master of Business Administration';
  if (/cfa|ca\b|chartered/i.test(text)) return 'Chartered Accountant / CFA';
  if (/mca|m\.?tech/i.test(text)) return 'Master of Computer Applications / M.Tech';
  if (/b\.?com|bachelor/i.test(text)) return 'Bachelor\'s Degree';
  return 'Graduate Degree';
}

function extractExpFallback(text: string): number {
  const match = text.match(/(\d+(?:\.\d+)?)\s*\+?\s*(?:years?|yrs?)/i);
  if (match) return parseFloat(match[1]);
  return 4;
}
