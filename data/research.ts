import type { ResearchChallenge, PipelineStep } from "@/types";

export const researchChallenges: ResearchChallenge[] = [
  {
    id: "1",
    title: "Finding the Right Research Problem",
    description:
      "Identifying a novel, feasible, and impactful research problem that fills a genuine knowledge gap.",
    icon: "Search",
  },
  {
    id: "2",
    title: "Literature Review",
    description:
      "Systematically searching, screening, and synthesizing thousands of papers without missing key work.",
    icon: "BookOpen",
  },
  {
    id: "3",
    title: "Research Methodology",
    description:
      "Designing a rigorous, reproducible, and ethical methodology aligned with your research question.",
    icon: "Compass",
  },
  {
    id: "4",
    title: "Data & Statistical Analysis",
    description:
      "Cleaning data, choosing the right tests, and interpreting results correctly without bias.",
    icon: "BarChart3",
  },
  {
    id: "5",
    title: "AI/ML Experimentation",
    description:
      "Running reproducible ML experiments, tuning models, and validating them statistically.",
    icon: "Brain",
  },
  {
    id: "6",
    title: "Publication",
    description:
      "Writing, structuring, formatting, and targeting the right journal or conference.",
    icon: "FileText",
  },
];

export const researchPipeline: PipelineStep[] = [
  { id: "p1", title: "Research Idea", description: "Initial concept, area of interest identified" },
  { id: "p2", title: "Problem Definition", description: "Problem statement, objectives, and scope" },
  { id: "p3", title: "Literature Review", description: "Search, screen, and synthesize prior work" },
  { id: "p4", title: "Research Design", description: "Methodology and study design" },
  { id: "p5", title: "Data Collection", description: "Gather datasets and primary data" },
  { id: "p6", title: "Data Analysis", description: "Clean, explore, and analyze data" },
  { id: "p7", title: "AI/ML Modeling", description: "Build, train, and evaluate models" },
  { id: "p8", title: "Results", description: "Interpret, validate, and visualize findings" },
  { id: "p9", title: "Manuscript", description: "Write a complete research paper" },
  { id: "p10", title: "Submission", description: "Target journal selection and submission" },
  { id: "p11", title: "Publication", description: "Peer review, revision, and publication" },
];

export const aiWorkflow: PipelineStep[] = [
  { id: "a1", title: "AI Literature Discovery", description: "Intelligent paper search and ranking" },
  { id: "a2", title: "Paper Classification", description: "Automated semantic categorization" },
  { id: "a3", title: "Knowledge Extraction", description: "Structured extraction of findings" },
  { id: "a4", title: "Research Gap Identification", description: "Highlight unexplored areas" },
  { id: "a5", title: "Data Analysis", description: "AI-assisted pattern detection" },
  { id: "a6", title: "Model Development", description: "Rapid ML prototyping" },
  { id: "a7", title: "Statistical Validation", description: "Robustness checks and validation" },
  { id: "a8", title: "Research Insights", description: "Actionable, interpretable insights" },
];
