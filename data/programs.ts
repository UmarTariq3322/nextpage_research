import type { Program } from "@/types";

export const programs: Program[] = [
  {
    id: "prog1",
    slug: "research-foundations",
    title: "Research Foundations",
    level: "Beginner",
    duration: "6 weeks",
    format: "Live + Recorded",
    description:
      "A hands-on foundational program for students and early researchers who want to learn how research actually works—from finding a problem to writing a short research paper.",
    topics: [
      "Research fundamentals and mindset",
      "Problem identification and gap analysis",
      "Searching and screening literature",
      "Formulating research questions and hypotheses",
      "Quantitative and qualitative methodology basics",
      "Data collection and measurement",
      "Academic writing and referencing",
      "Writing a short research paper",
    ],
    learningOutcomes: [
      "Write a clear research problem statement",
      "Perform a structured literature search",
      "Design a basic study",
      "Draft a small research paper",
      "Read and critique published papers critically",
    ],
    faq: [
      {
        question: "Do I need prior research experience?",
        answer: "No. This program starts from first principles.",
      },
      {
        question: "Which fields is it for?",
        answer:
          "We design it to be useful across computing, engineering, sciences, social sciences, and business.",
      },
      {
        question: "Will I get a certificate?",
        answer:
          "Yes. A certificate of completion is awarded after final submission and review.",
      },
    ],
  },
  {
    id: "prog2",
    slug: "ai-research-program",
    title: "AI Research Program",
    level: "Intermediate",
    duration: "12 weeks",
    format: "Live, Mentored, Project-based",
    description:
      "A project-based AI research program designed to take practitioners from using ML frameworks to doing publishable AI research—including experiments, evaluation, and paper writing.",
    topics: [
      "AI research methodology and open problem discovery",
      "Dataset development, curation, and documentation",
      "Machine learning experimentation workflow",
      "Deep learning and transformer fundamentals",
      "LLM research, prompting, and evaluation",
      "Retrieval-Augmented Generation (RAG)",
      "Model evaluation and statistical validation",
      "Ethics, reproducibility, and ablation studies",
      "Writing an AI research paper",
    ],
    learningOutcomes: [
      "Design and run reproducible ML experiments",
      "Implement and evaluate baselines fairly",
      "Write a full AI paper with figures and tables",
      "Target a suitable venue for submission",
      "Conduct and report ablation studies",
    ],
    faq: [
      {
        question: "What are the prerequisites?",
        answer:
          "Basic Python programming, introductory ML, and linear algebra/statistics basics.",
      },
      {
        question: "Will we produce a paper?",
        answer:
          "Yes. By the end of the program you will have a draft research paper ready for internal review.",
      },
      {
        question: "Is GPU access provided?",
        answer:
          "We provide guidance on free and low-cost GPU options. In some cases, limited shared compute is available.",
      },
    ],
  },
  {
    id: "prog3",
    slug: "systematic-review-meta-analysis",
    title: "Systematic Review & Meta-Analysis",
    level: "Intermediate",
    duration: "10 weeks",
    format: "Live, Mentored, Protocol-first",
    description:
      "A structured, protocol-first program that teaches you to design and execute a rigorous systematic review, with optional quantitative meta-analysis.",
    topics: [
      "Types of reviews: narrative, scoping, systematic, meta-analysis",
      "PRISMA 2020 and reporting guidelines",
      "Formulating PICO / PECO / SPIDER questions",
      "Search strategy design across databases",
      "Screening, inclusion/exclusion, and agreement",
      "Data extraction and critical appraisal",
      "Risk of bias and quality assessment",
      "Effect sizes, forest plots, heterogeneity",
      "Subgroup analysis, sensitivity analysis, meta-regression",
      "Writing and publishing a review paper",
    ],
    learningOutcomes: [
      "Write and register a review protocol",
      "Design a reproducible search strategy",
      "Execute screening with conflict resolution",
      "Run and interpret a basic meta-analysis",
      "Complete a full manuscript draft",
    ],
    faq: [
      {
        question: "Do we cover both qualitative and quantitative synthesis?",
        answer:
          "Yes. We cover narrative synthesis, thematic synthesis, and standard meta-analysis (fixed/random effects).",
      },
      {
        question: "Which tools are taught?",
        answer:
          "We use open tools: Zotero, Rayyan, Covidence basics, R packages meta, metafor, metafor, and jamovi / JASP.",
      },
      {
        question: "Can I bring my own review topic?",
        answer:
          "Absolutely. We strongly encourage it so you finish with a real draft.",
      },
    ],
  },
];
