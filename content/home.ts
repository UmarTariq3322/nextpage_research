// Public-facing homepage copy. Condensed from the Company Handbook v1.0;
// the full wording lives in the other content files and dedicated pages.

export const offer = [
  {
    title: "Research Education",
    body: "Learn the methods behind meaningful research.",
    cta: "Explore the Academy",
    href: "/academy",
  },
  {
    title: "Research Projects",
    body: "Apply them to real research questions and evidence.",
    cta: "See how projects run",
    href: "/workflow",
  },
  {
    title: "Research Community",
    body: "Keep learning and collaborating beyond the Academy.",
    cta: "Explore the Community",
    href: "/community",
  },
] as const;

/** The seven-step research journey shown on the homepage. */
export const journey = [
  { n: "01", title: "Research Idea", body: "Start from a problem worth studying." },
  { n: "02", title: "Research Question", body: "Frame it with PICO or PECO and find the gap." },
  { n: "03", title: "Evidence & Methods", body: "Search the literature and choose a design." },
  { n: "04", title: "Analysis", body: "Clean, analyze and interpret data in R." },
  { n: "05", title: "Scientific Writing", body: "Report to the relevant guideline." },
  { n: "06", title: "Publication", body: "Select a journal, submit and revise." },
  { n: "07", title: "Research Community", body: "Keep collaborating on new projects." },
] as const;

export const whyNexpage = [
  { title: "Research First", body: "Methods are taught around real research questions." },
  { title: "Methodological Rigor", body: "Study design, analysis and interpretation work together." },
  { title: "Learn by Doing", body: "Students produce practical research outputs." },
  { title: "Cross-disciplinary", body: "Students from different fields learn and collaborate." },
] as const;

export const communityHighlights = [
  { title: "Research Ideas", body: "Post a question, find collaborators." },
  { title: "Project Matchmaking", body: "Matched by topic, skills and availability." },
  { title: "Peer Review", body: "Structured critique of each other's work." },
  { title: "Project Rooms", body: "Defined roles and milestones per project." },
] as const;

/** Condensed view of the 10-phase lifecycle on the Workflow page. */
export const workflowSteps = ["Ideation", "Planning", "Data", "Analysis", "Writing", "Review", "Submission", "Revision"] as const;

/** Condensed view of the 10-component capstone portfolio. */
export const outputs = [
  "Research Question",
  "Literature Review",
  "Study / Analysis",
  "Manuscript",
  "Publication Preparation",
] as const;

export const homeDisciplines = [
  "Medicine",
  "Health Sciences",
  "Life Sciences",
  "Psychology",
  "Public Health",
  "Computer Science",
  "Engineering",
  "Business",
  "Education",
  "Social Sciences",
] as const;
