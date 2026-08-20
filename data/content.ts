import type { ResourceArticle, SuccessStory, Metric, AiCapability } from "@/types";

export const resourceArticles: ResourceArticle[] = [
  {
    id: "res1",
    slug: "define-strong-research-problem",
    title: "How to Define a Strong Research Problem",
    category: "Research Guides",
    excerpt:
      "A practical framework to narrow down from a broad interest to a focused, feasible, and impactful research question.",
    readTime: "8 min read",
    publishedAt: "2025-03-01",
    author: "Nexpage Research Team",
  },
  {
    id: "res2",
    slug: "conduct-literature-review",
    title: "How to Conduct a Literature Review",
    category: "Research Guides",
    excerpt:
      "A structured, repeatable process for searching, screening, and synthesizing prior work without drowning in papers.",
    readTime: "12 min read",
    publishedAt: "2025-02-15",
    author: "Nexpage Research Team",
  },
  {
    id: "res3",
    slug: "design-research-methodology",
    title: "How to Design a Research Methodology",
    category: "Research Guides",
    excerpt:
      "From research questions to methods, measures, and analysis plan—design methodology that is rigorous and reproducible.",
    readTime: "11 min read",
    publishedAt: "2025-01-28",
    author: "Nexpage Research Team",
  },
  {
    id: "res4",
    slug: "evaluate-ml-model",
    title: "How to Evaluate a Machine Learning Model",
    category: "AI Research",
    excerpt:
      "Go beyond a single accuracy number: baselines, statistical significance, robustness, and fairness checks.",
    readTime: "10 min read",
    publishedAt: "2025-01-10",
    author: "Nexpage Research Team",
  },
  {
    id: "res5",
    slug: "prepare-research-paper",
    title: "How to Prepare a Research Paper",
    category: "Academic Writing",
    excerpt:
      "Structure, write, and polish a paper that is clear, credible, and well-positioned for review.",
    readTime: "14 min read",
    publishedAt: "2024-12-18",
    author: "Nexpage Research Team",
  },
  {
    id: "res6",
    slug: "intro-systematic-reviews",
    title: "Introduction to Systematic Reviews",
    category: "Systematic Reviews",
    excerpt:
      "The fundamentals: types of reviews, PRISMA, PICO, search strategy, screening, and synthesis—with practical examples.",
    readTime: "15 min read",
    publishedAt: "2024-12-02",
    author: "Nexpage Research Team",
  },
];

export const resourceCategories = [
  "All",
  "Research Guides",
  "AI Research",
  "Data Science",
  "Statistics",
  "Systematic Reviews",
  "Academic Writing",
  "Publication",
];

export const successStories: SuccessStory[] = [
  {
    id: "ss1",
    title:
      "From Idea to Published Systematic Review",
    category: "Systematic Review",
    challenge:
      "Demo / Placeholder: An MS student had a topic interest but no structured protocol, database search strategy, or screening workflow. Target: 6 months to a review draft.",
    approach:
      "Demo / Placeholder: We worked through a protocol-first approach using PRISMA—defined PICO, built a search across 5 databases, set up a two-stage screening workflow, and ran weekly checkpoint reviews with the student.",
    outcome:
      "Demo / Placeholder: The student completed the review draft with PRISMA flow, evidence tables, and a manuscript structure ready for submission within the timeline.",
  },
  {
    id: "ss2",
    title:
      "Final-Year AI Research Project with Reproducible ML",
    category: "AI Research",
    challenge:
      "Demo / Placeholder: A final-year CS team proposed an ML project without clear baselines, no reproducible code, and no evaluation plan 3 months before submission.",
    approach:
      "Demo / Placeholder: We scoped the project to a focused comparison with clear baselines, a reproducible experiment template, and a structured evaluation plan with statistical comparison to a public benchmark.",
    outcome:
      "Demo / Placeholder: Team delivered a reproducible repository, clear result section, and a strong final defense. A short paper outline was also produced.",
  },
  {
    id: "ss3",
    title:
      "Statistical Analysis for a Social Science Thesis",
    category: "Statistical Analysis",
    challenge:
      "Demo / Placeholder: An MS social-science thesis collected survey data but struggled with which tests to run, assumptions, and how to write the analysis chapter.",
    approach:
      "Demo / Placeholder: We defined the analysis plan, validated assumptions, chose appropriate tests, and provided a clear interpretation narrative tied to the research hypotheses.",
    outcome:
      "Demo / Placeholder: The analysis chapter was completed with appropriate statistics, figures, and interpretation suitable for submission.",
  },
];

export const metrics: Metric[] = [
  {
    id: "m1",
    value: "XX",
    label: "Research Projects",
    note: "PLACEHOLDER — Replace with verified number before launch.",
  },
  {
    id: "m2",
    value: "XX",
    label: "Publications",
    note: "PLACEHOLDER — Replace with verified number before launch.",
  },
  {
    id: "m3",
    value: "XX",
    label: "Researchers",
    note: "PLACEHOLDER — Replace with verified number before launch.",
  },
  {
    id: "m4",
    value: "XX",
    label: "Students Trained",
    note: "PLACEHOLDER — Replace with verified number before launch.",
  },
  {
    id: "m5",
    value: "XX",
    label: "Research Collaborations",
    note: "PLACEHOLDER — Replace with verified number before launch.",
  },
];

export const aiCapabilities: AiCapability[] = [
  {
    id: "a1",
    title: "Literature Discovery",
    description:
      "Intelligent search across multiple sources with ranking by relevance and recency.",
  },
  {
    id: "a2",
    title: "Paper Summarization",
    description:
      "Structured summaries of papers with key findings, methods, and gaps.",
  },
  {
    id: "a3",
    title: "Research Question Exploration",
    description:
      "Guided brainstorming and refinement of candidate research questions.",
  },
  {
    id: "a4",
    title: "Knowledge Extraction",
    description:
      "Extract entities, relationships, and findings from papers into structured knowledge.",
  },
  {
    id: "a5",
    title: "Citation Analysis",
    description:
      "Maps citation networks, thematic clusters, and influential works.",
  },
  {
    id: "a6",
    title: "Dataset Analysis",
    description:
      "Automated EDA, outlier detection, and pattern surfacing.",
  },
  {
    id: "a7",
    title: "AI-Assisted Experimentation",
    description:
      "Suggest baselines, experiment plans, and ablation study design.",
  },
  {
    id: "a8",
    title: "Research Automation",
    description:
      "Template-driven pipelines for reproducible experiments and reports.",
  },
  {
    id: "a9",
    title: "RAG-based Research Assistants",
    description:
      "Retrieval-augmented assistants grounded in your own corpus.",
  },
];
