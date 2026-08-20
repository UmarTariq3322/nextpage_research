export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ResearchChallenge = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type PipelineStep = {
  id: string;
  title: string;
  description?: string;
};

export type ResearchService = {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  problemsSolved: string[];
  deliverables: string[];
  process: { step: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export type Program = {
  id: string;
  slug: string;
  title: string;
  level: string;
  duration: string;
  format: string;
  description: string;
  topics: string[];
  learningOutcomes: string[];
  faq: { question: string; answer: string }[];
};

export type ResearchProject = {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  methodology: string;
  status: "In Progress" | "Completed" | "Under Review";
  researchers: string[];
  year: number;
  tags: string[];
};

export type Publication = {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  researchArea: string;
  venue: string;
  year: number;
  abstract: string;
  doi?: string;
  tags: string[];
};

export type Researcher = {
  id: string;
  slug: string;
  name: string;
  role: string;
  photo: string;
  researchInterests: string[];
  shortBio: string;
  fullBio: string;
  socialLinks: {
    linkedin?: string;
    googleScholar?: string;
    orcid?: string;
    github?: string;
  };
};

export type ResourceArticle = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  author: string;
};

export type SuccessStory = {
  id: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  category: string;
};

export type Metric = {
  id: string;
  value: string;
  label: string;
  note: string;
};

export type AiCapability = {
  id: string;
  title: string;
  description: string;
};

export type AiWorkflowStep = {
  id: string;
  title: string;
  description: string;
};
