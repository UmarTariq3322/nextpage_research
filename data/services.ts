import type { ResearchService } from "@/types";

export const researchServices: ResearchService[] = [
  {
    id: "s1",
    slug: "research-consulting",
    title: "Research Consulting",
    shortDescription:
      "Research problem formulation, methodology, study design, and research planning.",
    description:
      "We work with you to transform a vague idea into a well-defined research project with clear objectives, rigorous methodology, and a realistic timeline.",
    icon: "Lightbulb",
    problemsSolved: [
      "Unclear or unfocused research questions",
      "Weak or unstructured methodology",
      "Lack of study design knowledge",
      "Unrealistic project timelines",
    ],
    deliverables: [
      "Problem statement document",
      "Research proposal outline",
      "Methodology design",
      "Project plan with timeline",
    ],
    process: [
      { step: "Discovery Call", description: "Understand your area, goals, and constraints" },
      { step: "Problem Framing", description: "Define research question and objectives" },
      { step: "Methodology Design", description: "Design study, methods, and analysis plan" },
      { step: "Roadmap Delivery", description: "Deliver plan, timeline, and next steps" },
    ],
    faq: [
      {
        question: "Who is this service for?",
        answer:
          "Students, researchers, faculty, and organizations who want to start a research project on a solid foundation.",
      },
      {
        question: "How long does it take?",
        answer:
          "Typically 2-4 sessions depending on the complexity of the proposed research.",
      },
    ],
  },
  {
    id: "s2",
    slug: "systematic-review-meta-analysis",
    title: "Systematic Review & Meta-Analysis",
    shortDescription:
      "PRISMA-based systematic reviews, evidence synthesis, effect-size analysis, and meta-analysis.",
    description:
      "We conduct rigorous, transparent, and replicable systematic reviews and meta-analyses following PRISMA, Cochrane, and JBI standards.",
    icon: "FileSearch2",
    problemsSolved: [
      "Literature reviews that are not reproducible",
      "Incomplete search coverage",
      "No clear screening or selection process",
      "Lack of statistical synthesis knowledge",
    ],
    deliverables: [
      "PRISMA flow diagram",
      "Search strategy documentation",
      "Evidence tables and synthesis",
      "Meta-analysis forest plots (if applicable)",
      "Full manuscript draft",
    ],
    process: [
      { step: "Protocol Design", description: "Develop review protocol, PICO, and search strategy" },
      { step: "Search & Screen", description: "Systematic search and screening" },
      { step: "Data Extraction", description: "Extract data and assess risk of bias" },
      { step: "Synthesis & Analysis", description: "Qualitative and quantitative synthesis" },
      { step: "Manuscript", description: "Write and deliver the review paper" },
    ],
    faq: [
      {
        question: "What standards do you follow?",
        answer:
          "PRISMA 2020 for reviews, PRISMA-MA for meta-analysis, along with Cochrane/JBI guidance as appropriate.",
      },
      {
        question: "Can you do rapid reviews?",
        answer:
          "Yes. We offer scoping reviews, rapid reviews, and full systematic reviews tailored to your timeline.",
      },
    ],
  },
  {
    id: "s3",
    slug: "ai-machine-learning-research",
    title: "AI & Machine Learning Research",
    shortDescription:
      "Machine learning, deep learning, NLP, computer vision, generative AI, LLMs, RAG, and AI experimentation.",
    description:
      "We design and run rigorous ML experiments, from baseline studies and ablation analysis to novel architecture proposals and empirical validations.",
    icon: "Brain",
    problemsSolved: [
      "Difficulty choosing the right model",
      "Unreproducible ML experiments",
      "Lack of proper baselines or ablation",
      "Weak statistical validation",
    ],
    deliverables: [
      "Experiment design document",
      "Reproducible code repository",
      "Detailed results report",
      "Figures and comparative tables",
      "Manuscript-ready write-up",
    ],
    process: [
      { step: "Problem Scoping", description: "Define research problem and success metrics" },
      { step: "Data & Baselines", description: "Curate datasets and implement baselines" },
      { step: "Experimentation", description: "Train, tune, and run ablation studies" },
      { step: "Analysis & Paper", description: "Analyze results and write the paper" },
    ],
    faq: [
      {
        question: "What AI areas do you cover?",
        answer:
          "NLP, computer vision, generative AI, LLMs, RAG systems, AI agents, time-series, tabular, graph learning, and reinforcement learning.",
      },
      {
        question: "Will the code be reproducible?",
        answer:
          "Yes. We provide versioned code, seed control, logs, and environment definitions.",
      },
    ],
  },
  {
    id: "s4",
    slug: "statistical-analysis",
    title: "Statistical Analysis",
    shortDescription:
      "Hypothesis testing, regression, correlation, ANOVA, statistical modeling, and interpretation.",
    description:
      "We help you choose the right statistical tests, run them correctly, and interpret the results clearly and honestly.",
    icon: "BarChart3",
    problemsSolved: [
      "Choosing the wrong statistical test",
      "Misinterpreting p-values or effect sizes",
      "Violated assumptions",
      "Poorly reported statistics",
    ],
    deliverables: [
      "Statistical analysis plan",
      "Assumption checks and diagnostics",
      "Results with effect sizes and CI",
      "Figures and tables",
      "Interpretation narrative",
    ],
    process: [
      { step: "Understand Data & Goals", description: "Discuss hypotheses and data structure" },
      { step: "Plan Design", description: "Select methods and write the analysis plan" },
      { step: "Execution", description: "Run analysis with proper diagnostics" },
      { step: "Interpretation", description: "Explain results in plain language" },
    ],
    faq: [
      {
        question: "Which tools do you use?",
        answer:
          "R, Python, SPSS, Stata, and JASP depending on the field and analysis.",
      },
      {
        question: "Do you help with writing results?",
        answer:
          "Yes. We provide results text suitable for a thesis or journal paper.",
      },
    ],
  },
  {
    id: "s5",
    slug: "data-science",
    title: "Data Science",
    shortDescription:
      "Data preprocessing, exploratory analysis, visualization, feature engineering, and predictive modeling.",
    description:
      "We transform raw, messy, real-world data into clean datasets, clear visualizations, and reliable predictive models.",
    icon: "Database",
    problemsSolved: [
      "Dirty or missing data",
      "No clear exploratory analysis",
      "Weak feature engineering",
      "Overfitted or non-interpretable models",
    ],
    deliverables: [
      "Cleaned dataset and pipeline",
      "EDA report with visualizations",
      "Trained models and benchmarks",
      "Interpretability plots",
    ],
    process: [
      { step: "Data Audit", description: "Understand data quality and structure" },
      { step: "Preprocessing", description: "Clean, impute, and transform data" },
      { step: "Exploration", description: "Visualize patterns and relationships" },
      { step: "Modeling", description: "Build, validate, and interpret models" },
    ],
    faq: [
      {
        question: "Can you work with big data?",
        answer:
          "Yes, including SQL, Spark, and cloud-based pipelines where needed.",
      },
      {
        question: "Do you build production ML pipelines?",
        answer:
          "We focus on research-grade analysis and prototyping, and can advise on productionization.",
      },
    ],
  },
  {
    id: "s6",
    slug: "thesis-fyp-support",
    title: "Thesis & FYP Research Support",
    shortDescription:
      "Research design, implementation, experimentation, evaluation, and technical guidance.",
    description:
      "Dedicated end-to-end mentorship for undergraduate final-year projects, MS theses, and PhD-level components.",
    icon: "GraduationCap",
    problemsSolved: [
      "Stuck on topic or methodology",
      "Implementation difficulties",
      "Lack of evaluation rigor",
      "Unclear writing structure",
    ],
    deliverables: [
      "Research plan with milestones",
      "Implementation guidance and code reviews",
      "Evaluation and result discussion",
      "Thesis structure and writing support",
    ],
    process: [
      { step: "Topic & Plan", description: "Finalize topic and research plan" },
      { step: "Implementation", description: "Weekly guidance and code reviews" },
      { step: "Evaluation", description: "Experiments, validation, and results" },
      { step: "Write-Up", description: "Thesis drafting and feedback" },
    ],
    faq: [
      {
        question: "Is this only for CS students?",
        answer:
          "No. We support computing, engineering, applied sciences, social sciences, and business research.",
      },
      {
        question: "How often do we meet?",
        answer:
          "Typically once or twice a week depending on the phase and student needs.",
      },
    ],
  },
  {
    id: "s7",
    slug: "manuscript-development",
    title: "Manuscript Development",
    shortDescription:
      "Research paper structure, technical writing, figures, tables, and results presentation.",
    description:
      "We help you turn raw results into a clear, well-structured, journal-ready research paper.",
    icon: "PenLine",
    problemsSolved: [
      "Disorganized paper structure",
      "Poorly written results section",
      "Unclear figures or tables",
      "Weak introduction or discussion",
    ],
    deliverables: [
      "Full manuscript draft",
      "Figures and tables formatted for target venue",
      "Abstract and highlights",
      "Cover letter template",
    ],
    process: [
      { step: "Outline", description: "Structure paper by target journal guide" },
      { step: "Draft", description: "Write each section with clear narrative" },
      { step: "Figures & Tables", description: "Create publication-quality visuals" },
      { step: "Revision", description: "Incorporate feedback and polish" },
    ],
    faq: [
      {
        question: "Can you work with LaTeX?",
        answer:
          "Yes. We support Word, Overleaf/LaTeX, and markdown-based writing flows.",
      },
      {
        question: "Is this ghostwriting?",
        answer:
          "No. We guide, structure, and edit; you retain authorship and substantive content.",
      },
    ],
  },
  {
    id: "s8",
    slug: "publication-support",
    title: "Publication Support",
    shortDescription:
      "Journal/conference selection, formatting, manuscript preparation, and submission guidance.",
    description:
      "We help you identify the right venue, prepare everything required, and navigate the submission and review process.",
    icon: "Send",
    problemsSolved: [
      "Targeting the wrong venue",
      "Improper formatting leading to desk rejection",
      "Missing submission items",
      "Unclear response to reviewer comments",
    ],
    deliverables: [
      "Venue shortlist and recommendation",
      "Formatting per author guidelines",
      "Complete submission package",
      "Reviewer response strategy",
    ],
    process: [
      { step: "Venue Selection", description: "Match scope, impact, and timeline" },
      { step: "Formatting", description: "Apply journal/conference template" },
      { step: "Submission Prep", description: "Prepare all required documents" },
      { step: "Review Support", description: "Respond to reviewers if needed" },
    ],
    faq: [
      {
        question: "Can you guarantee publication?",
        answer:
          "No. We ensure the submission is strong and well-prepared, but editorial decisions remain with the venue.",
      },
      {
        question: "Do you help with reviewer responses?",
        answer:
          "Yes, we help you craft clear, constructive rebuttal letters.",
      },
    ],
  },
];
