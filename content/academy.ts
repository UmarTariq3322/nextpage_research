// Source: Company Handbook v1.0, Chapters 4 and 6.

export const philosophy = {
  lead: "The Academy is research-centered rather than skill-centered. It is not a lecture-only course: students learn individual methods because those methods are needed to answer research questions and complete research projects.",
  goal: "By the end of the program, students should be able to identify a research question, choose an appropriate design, analyze data, write scientifically and work effectively with other researchers.",
};

/** Handbook 4.2 — Curriculum Design Principles. */
export const designPrinciples = [
  { title: "Learn by doing",
    short: "Every module ends in a real output.", description: "Every major module connects directly to a real research output." },
  {
    title: "Foundations first",
    short: "Questions, design and searching come first.",
    description:
      "Research question formulation, study design, literature searching and reference management are taught before advanced methods.",
  },
  {
    title: "Design before statistics",
    short: "Know why a test is used.",
    description:
      "Students learn study design before statistical tests, so they understand why a particular test is used.",
  },
  {
    title: "Integrity from the start",
    short: "Ethics and authorship from module one.",
    description:
      "Ethics, authorship, plagiarism and publication integrity are introduced in the first module.",
  },
  {
    title: "Writing as a recurring skill",
    short: "Practised at every stage.",
    description: "Scientific writing is practised throughout the program, not only in a final session.",
  },
  {
    title: "Reporting guidelines with each design",
    short: "Taught alongside each study design.",
    description: "The relevant reporting guideline is taught alongside each study design.",
  },
  {
    title: "Real materials",
    short: "Published papers and real datasets.",
    description:
      "Teaching uses published papers, real datasets and genuine research questions rather than only theoretical examples.",
  },
  {
    title: "Reproducible workflows",
    short: "R, Excel and reference managers.",
    description: "Analysis is taught with reproducible tools such as R, Excel and reference managers.",
  },
  {
    title: "Progressive complexity",
    short: "From simple designs to advanced methods.",
    description:
      "Students begin with the research process and progress to increasingly complex designs and analyses.",
  },
  {
    title: "Continuity through community",
    short: "Collaboration continues after the program.",
    description:
      "Students form teams, critique work and collaborate on projects during and after the program.",
  },
] as const;

/** Handbook 4.4 — Teaching Model (eight-step cycle). */
export const teachingCycle = [
  { step: 1, title: "Concept lecture", description: "Explain the idea in simple, accessible language." },
  { step: 2, title: "Paper walkthrough", description: "Dissect a real published study that uses the concept." },
  { step: 3, title: "Live demonstration", description: "Perform the workflow in the relevant software." },
  { step: 4, title: "Guided practice", description: "Students repeat the workflow using a provided dataset." },
  { step: 5, title: "Mini assignment", description: "Students apply the workflow to their own research question." },
  { step: 6, title: "Peer review", description: "Students critique each other's work using a structured checklist." },
  {
    step: 7,
    title: "Mentor feedback",
    description: "Instructors correct methodological and writing problems.",
    // Handbook: "facility not yet available".
    status: "Not yet available",
  },
  { step: 8, title: "Final output", description: "Each major module produces an output that students can reuse in a real project." },
] as const;

/** Handbook 6.1 — Research Progression Levels. Award criteria are TBD. */
export const progressionLevels = [
  { level: 1, title: "Research Explorer", capability: "Understands the research process, research questions and critical appraisal." },
  { level: 2, title: "Researcher", capability: "Can plan and conduct a basic research project." },
  { level: 3, title: "Evidence Synthesizer", capability: "Can conduct structured evidence synthesis and basic meta-analysis." },
  { level: 4, title: "Advanced Researcher", capability: "Can handle more complex study designs, analyses and evidence-synthesis methods." },
  { level: 5, title: "Research Collaborator", capability: "Can contribute to or lead collaborative research projects and mentor peers." },
] as const;

/** Handbook 6.2 — Capstone Portfolio. */
export const capstone = [
  { title: "Research question", modules: "Module A" },
  { title: "Literature search", modules: "Modules A, C and F" },
  { title: "Protocol or study plan", modules: "Modules D and F" },
  { title: "Analysis plan", modules: "Modules D and E" },
  { title: "Data or evidence extraction", modules: "Modules D, F and H" },
  { title: "Statistical or evidence-synthesis analysis", modules: "Modules E, F, G and H" },
  { title: "Abstract", modules: "Module I" },
  { title: "Manuscript", modules: "Module I" },
  { title: "Target-journal selection", modules: "Modules B and I" },
  { title: "Peer-review response or presentation", modules: "Module I and the Community" },
] as const;

/** Handbook 6.3 — Learning Outcomes. */
export const learningOutcomes = [
  "Identify a meaningful and feasible research gap.",
  "Select an appropriate study design.",
  "Construct a questionnaire and plan data collection.",
  "Calculate and justify a sample size.",
  "Clean and analyze a research dataset.",
  "Interpret common statistical tests without relying only on p-values.",
  "Use regression appropriately and interpret its coefficients.",
  "Conduct a systematic review and meta-analysis.",
  "Perform selected advanced meta-analytic methods.",
  "Use CDC, GBD and similar public datasets responsibly.",
  "Write a scientific manuscript and select a suitable journal.",
  "Appraise research critically rather than simply summarize it.",
  "Collaborate effectively on multidisciplinary research projects.",
] as const;

/**
 * Handbook 5.1 and 6.4 — delivery details are explicitly undecided.
 * These are shown only as "to be announced", never as values.
 */
export const pendingDeliveryDetails = [
  "Delivery format",
  "Program duration and weekly commitment",
  "Session length and schedule",
  "Cohort size",
  "Admission requirements",
  "Fees and scholarships",
  "Assessment",
  "Certification",
] as const;
