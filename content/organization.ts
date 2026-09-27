// Source: Company Handbook v1.0, Chapters 1–3.

export const promise =
  "Nexpage Research is more than a lecture series. It is a research-focused ecosystem that takes students from understanding research to participating in real research, with education, mentorship, collaboration and multidisciplinary support continuing beyond the classroom.";

export const vision =
  "To grow beyond an academy into a multidisciplinary research community in which a student with a research idea can find the statistician, programmer, writer, or fellow researcher needed to turn that idea into published evidence.";

export const mission =
  "To teach students from every academic discipline how to conduct meaningful, ethical and scientifically sound research, and to give them a structured community in which to apply those skills to real projects.";

export const progression = {
  title: "From Research Ideas → Publishable Evidence → Research Community",
  summary:
    "Students arrive with ideas, learn to turn them into rigorous and publishable evidence, and remain part of a community that continues to produce research together.",
};

/** Handbook 1.3 — Areas of Expertise and Services. */
export const expertiseAreas = [
  {
    title: "Research education",
    short: "A staged curriculum from foundations to publication.",
    description:
      "A staged curriculum covering research foundations, scientific writing, evidence synthesis, statistical analysis and public-health data.",
    href: "/curriculum",
  },
  {
    title: "Mentorship and feedback",
    short: "Feedback on methodology and writing, plus peer review.",
    description:
      "Instructor and mentor feedback on methodology and writing, with structured peer review.",
    href: "/academy#teaching-model",
  },
  {
    title: "Statistical and methodological support",
    short: "Study design, analysis and reproducible work in R.",
    description:
      "Guidance on study design, analysis, model checking and reproducible workflows in R.",
    href: "/community#programs",
  },
  {
    title: "Research community and collaboration",
    short: "Matchmaking, project rooms, paper clubs and challenges.",
    description:
      "Project matchmaking, project rooms, journal and paper clubs, peer-review circles and research challenges.",
    href: "/community",
  },
  {
    title: "Digital learning infrastructure",
    short: "Learning platforms supported by Nexpage Technologies.",
    description:
      "The platforms through which students learn, communicate and collaborate, supported by Nexpage Technologies.",
    href: "/about",
  },
] as const;

/** Handbook 1.4 — The Nexpage Advantage. */
export const advantages = [
  {
    title: "Research-centered curriculum",
    description: "The research process is the foundation of every module.",
  },
  {
    title: "Cross-disciplinary learning",
    description:
      "Students from different fields learn shared research principles and collaborate with one another.",
  },
  {
    title: "Methodological rigor",
    description:
      "Study design, analysis, interpretation and reporting are taught together, not in isolation.",
  },
  {
    title: "Practical, project-oriented learning",
    description:
      "Students apply every concept to real or realistic research questions, papers, datasets and projects.",
  },
  {
    title: "Multidisciplinary support",
    description:
      "Researchers, statisticians, programmers and technology professionals contribute where their expertise is needed.",
  },
  {
    title: "Continuing research community",
    description:
      "Learning continues after the lectures through peer interaction, mentorship and collaborative projects.",
  },
] as const;

/** Handbook 2.3 — Core Values. */
export const coreValues = [
  {
    title: "Research first",
    short: "Research is the core; tools serve it.",
    description:
      "Research remains the core of everything we do. Statistics, programming and technology are used only where they improve the quality, efficiency or accessibility of research.",
  },
  {
    title: "Rigor",
    short: "Methods fit the question and are checked.",
    description:
      "Methods are chosen to fit the question. Designs, analyses and interpretations are justified, checked and reported accurately.",
  },
  {
    title: "Integrity",
    short: "Ethical research and honest authorship.",
    description:
      "We practise and teach ethical research, honest authorship, correct citation and responsible publication, and we avoid predatory outlets.",
  },
  {
    title: "Transparency and reproducibility",
    short: "Work others can follow and repeat.",
    description:
      "Work is documented so that others can follow, verify and repeat it, using reproducible tools and reporting guidelines.",
  },
  {
    title: "Critical thinking",
    short: "Appraise evidence, don't just summarize it.",
    description:
      "Students learn to appraise and question evidence rather than simply collect or summarize it.",
  },
  {
    title: "Learning by doing",
    short: "Every module produces a real output.",
    description: "Every major module produces a real research output that students can reuse.",
  },
  {
    title: "Collaboration across disciplines",
    short: "Different perspectives, stronger research.",
    description:
      "Different academic perspectives strengthen research; we create the conditions for people to work together.",
  },
] as const;

/** Handbook 2.4 — Strategic Goals. */
export const strategicGoals = [
  "Teach students to think like researchers and formulate meaningful research questions.",
  "Make rigorous research methodology understandable and accessible to students from different academic fields.",
  "Guide students through the complete research process, from identifying a research gap to communicating findings.",
  "Teach students to evaluate existing evidence critically rather than simply collect or summarize papers.",
  "Develop a culture of ethical, transparent, reproducible and responsible research.",
  "Create opportunities for students from different disciplines and within a single field to learn from and collaborate with one another.",
  "Use statistics, programming and digital technology where they improve the quality, efficiency or accessibility of research.",
  "Build a long-term research community in which students continue developing and collaborating after formal teaching ends.",
] as const;

/** Handbook 1.2 — Who We Serve. */
export const disciplines = [
  "Medicine",
  "Health sciences",
  "Life sciences",
  "Pharmacy",
  "Psychology",
  "Public health",
  "Social sciences",
  "Computer science",
  "Engineering",
  "Business",
  "Education",
  "Other academic disciplines",
] as const;

/** Handbook 1.2 — the research process shared across fields. */
export const sharedProcess = [
  "Identify a problem",
  "Review evidence",
  "Develop a question",
  "Choose a suitable design",
  "Collect or obtain data",
  "Analyze evidence",
  "Interpret findings",
  "Communicate results",
] as const;

/** Handbook 4.3 — Application Across Disciplines. */
export const acrossDisciplines = {
  consistent:
    "Question formulation, sampling, measurement, data collection, analysis, interpretation and reporting",
  varies:
    "The research question and population, the type of data, terminology, ethical requirements and the appropriate study designs",
  examples: [
    { field: "Medicine", example: "a cross-sectional study of disease prevalence" },
    { field: "Psychology", example: "the association between a behavior and an outcome" },
    { field: "Business", example: "a study of consumer behavior" },
  ],
  note: "Where methods differ substantially by discipline, Nexpage Research introduces field-specific examples or specialist sessions without changing the central curriculum.",
} as const;

/** Handbook 3.2 — Organizational Structure (functions, not headcount). */
export const functions = [
  {
    name: "Academic and Research",
    scope:
      "Curriculum design and delivery, disciplinary expertise, paper walkthroughs and research supervision.",
    leads: ["Muhammad Shamikh Shahid", "Muhammad Areeb Ul Haq"],
  },
  {
    name: "Statistics and Methods",
    scope:
      "Methodological guidance, statistical teaching, analysis support and quality of analyses.",
    leads: ["Muhammad Shamikh Shahid", "Muhammad Areeb Ul Haq"],
  },
  {
    name: "Community and Mentorship",
    scope:
      "Operation of community programs, project matchmaking, mentor coordination and peer-review circles.",
    // Handbook: "Not yet decided". Do not name a lead.
    leads: [],
  },
  {
    name: "Technology and Digital",
    scope:
      "Learning and communication platforms, website, SEO and digital operations, supported by Nexpage Technologies.",
    leads: ["Muhammad Umar Tariq"],
  },
] as const;

/** Handbook 3.3 — Team Roles and Responsibilities. */
export const contributorRoles = [
  {
    role: "Researchers and subject-matter experts",
    responsibilities:
      "Provide methodological and disciplinary expertise; teach modules; lead paper walkthroughs; supervise student projects; deliver field-specific sessions.",
  },
  {
    role: "Statisticians",
    responsibilities:
      "Teach and support rigorous analysis; review analysis plans, models and interpretation; staff the statistics help desk.",
  },
  {
    role: "Educators and instructors",
    responsibilities:
      "Deliver concept lectures, live demonstrations and guided practice; give mentor feedback on methodology and writing.",
  },
  {
    role: "Programmers and web developers",
    responsibilities:
      "Build and maintain the digital platforms used for learning, communication and collaboration; support reproducible computing workflows.",
  },
  {
    role: "SEO and digital professionals",
    responsibilities:
      "Manage the organization's online presence, digital communication and outreach.",
  },
  {
    role: "Community mentors",
    responsibilities:
      "Guide newer students, answer questions and review work within the Community.",
  },
] as const;

export const guidingPrinciple =
  "Every role exists to support research. Researchers provide methodological and disciplinary expertise, statisticians support rigorous analysis, and technology professionals build and maintain the infrastructure that makes learning and collaboration possible.";

/** Handbook 9.2 — Digital Infrastructure (components to be confirmed). */
export const digitalInfrastructure = [
  { component: "Website", purpose: "Public information, enrolment and outreach" },
  { component: "Learning platform", purpose: "Lectures, materials, datasets and assignments" },
  { component: "Communication platform", purpose: "Announcements and Community discussion" },
  { component: "Project rooms and file storage", purpose: "Project collaboration, documents and data" },
] as const;
