// Source: Company Handbook v1.0, Chapters 7, 8 and 10.

export const academyToCommunity = {
  lead: "Nexpage Research has two connected components: education and collaboration. The Academy builds the skills; the Community provides the environment in which those skills are used.",
  body: "After the teaching phase, students transition into a structured research community designed around collaboration rather than informal discussion. Its aim is a network in which a student with a research idea can find the collaborators needed to complete the project.",
};

/** Handbook 7.2 — Community Programs. */
export const communityPrograms = [
  { title: "Research idea board", description: "Members post research questions and look for collaborators." },
  { title: "Project matchmaking", description: "Members are connected by topic, skills and availability." },
  { title: "Statistics help desk", description: "A space to discuss analysis problems with statisticians and experienced peers." },
  { title: "Research opportunities", description: "Calls for collaboration, conferences and legitimate publication opportunities." },
  { title: "Monthly research challenge", description: "A small practical task, such as writing an abstract, extracting data or analyzing a dataset." },
  { title: "Project rooms", description: "Each active project has its own space with defined roles and milestones." },
] as const;

/** Handbook 7.3 — Project Roles (provided under the mentorship program). */
export const projectRoles = [
  { role: "Project Lead", responsibility: "Coordinates the research project", examples: "Timeline, meetings and task allocation" },
  { role: "Researcher", responsibility: "Performs literature and data work", examples: "Screening, extraction and analysis" },
  { role: "Statistics Lead", responsibility: "Supports methodology and analysis", examples: "R and RStudio analysis, model checking" },
  { role: "Writing Lead", responsibility: "Coordinates manuscript development", examples: "Drafting and revisions" },
  { role: "Quality Reviewer", responsibility: "Checks methodological and reporting quality", examples: "Checklists and internal peer review" },
  { role: "Community Mentor", responsibility: "Guides newer students", examples: "Answering questions and reviewing work" },
] as const;

export const projectRolesNote =
  "Every Community project assigns these roles; one member may hold more than one role in a small project. Project roles will be provided under the mentorship program.";

/** Handbook 7.4 — Community Guidelines (recommended baseline). */
export const communityGuidelines = [
  "Agree authorship and contribution roles at the start of every project and revisit them when roles change.",
  "Treat unpublished ideas, protocols, data and manuscripts shared in the Community as confidential to the project.",
  "Give credit accurately; never present another member's work as your own.",
  "Offer critique that is specific, evidence-based and respectful.",
  "Share only publication opportunities that are legitimate; flag suspected predatory journals or conferences.",
  "Give authorship according to the ICMJE criteria.",
] as const;

/** Handbook 7.4 — "To be refined". Shown as open questions, not facts. */
export const communityPending = [
  "The platform on which the Community operates",
  "Membership eligibility after the Academy",
  "The process for handling disputes or misconduct",
] as const;

export type WorkflowPhase = {
  n: number;
  title: string;
  activities: string;
  output: string;
  responsible: string;
  check: string;
};

/** Handbook 8.1 — Project Lifecycle. */
export const workflow: WorkflowPhase[] = [
  { n: 1, title: "Ideation", activities: "Identify topic, problem and gap; post on the idea board", output: "Research question and rationale", responsible: "Project Lead", check: "Feasibility and gap review by a mentor" },
  { n: 2, title: "Team formation", activities: "Matchmaking; assign roles; open a project room", output: "Team, roles and milestones", responsible: "Project Lead", check: "All core roles filled" },
  { n: 3, title: "Planning", activities: "Protocol, study design, sample size, analysis plan, registration where applicable", output: "Protocol and analysis plan", responsible: "Project Lead, Statistics Lead", check: "Methods review by Quality Reviewer" },
  { n: 4, title: "Ethics", activities: "Ethics approval and consent procedures where required", output: "Approvals and consent materials", responsible: "Project Lead", check: "Approval obtained before data collection" },
  { n: 5, title: "Data and evidence", activities: "Data collection, or search, screening and extraction", output: "Clean dataset, data dictionary or extraction sheet", responsible: "Researcher", check: "Data checks and missing-data review" },
  { n: 6, title: "Analysis", activities: "Reproducible analysis in R; tables and figures", output: "Analysis report and scripts", responsible: "Statistics Lead", check: "Assumptions, diagnostics and re-run check" },
  { n: 7, title: "Writing", activities: "Manuscript drafting to the relevant reporting guideline", output: "Manuscript draft", responsible: "Writing Lead", check: "Reporting checklist completed" },
  { n: 8, title: "Internal review", activities: "Peer-review circle and mentor review", output: "Revised manuscript", responsible: "Quality Reviewer", check: "Structured checklist sign-off" },
  { n: 9, title: "Submission", activities: "Journal selection, predatory-journal check, cover letter", output: "Submission package", responsible: "Project Lead", check: "Author guidelines verified" },
  { n: 10, title: "Revision", activities: "Respond to reviewers; revise and resubmit", output: "Response letter and revised manuscript", responsible: "Writing Lead", check: "Every reviewer point addressed" },
];

/** Handbook 8.2 — Project Management Practices. */
export const managementPractices = [
  "Each project maintains a timeline with milestones in its project room; the Project Lead schedules regular meetings and records decisions and task assignments.",
  "Changes to the research question, design or analysis plan after Phase 3 are documented with a reason.",
] as const;

/**
 * Research quality and integrity commitments, drawn from the Integrity and
 * Transparency values (2.3), design principles (4.2) and guidelines (7.4).
 */
export const integrityCommitments = [
  { title: "Ethical research",
    short: "Approval and consent before data collection.", description: "Ethics approval and consent procedures are obtained before data collection where required." },
  { title: "Honest authorship",
    short: "Roles agreed upfront, following ICMJE.", description: "Authorship and contribution roles are agreed at the start of every project, following the ICMJE criteria." },
  { title: "Correct citation",
    short: "Accurate references, no citation dumping.", description: "References and citation accuracy are taught from the first module; citation dumping is avoided." },
  { title: "Responsible publication",
    short: "A predatory-journal check on every submission.", description: "Every submission includes a predatory-journal check, and only legitimate opportunities are shared." },
  { title: "Transparency and reproducibility",
    short: "Scripted, documented, repeatable analysis.", description: "Analyses are scripted in R and documented so others can follow, verify and repeat them." },
  { title: "Critical thinking",
    short: "Evidence is appraised, not just summarized.", description: "Evidence is appraised and questioned, not simply collected or summarized." },
  { title: "Evidence-based critique",
    short: "Specific, respectful, checklist-based review.", description: "Peer review is specific, evidence-based and respectful, using structured checklists." },
  { title: "Confidentiality",
    short: "Unpublished work stays within the project.", description: "Unpublished ideas, protocols, data and manuscripts stay confidential to the project." },
  { title: "Accurate credit",
    short: "Every contribution credited correctly.", description: "Contributions are credited accurately; no one presents another member's work as their own." },
] as const;
