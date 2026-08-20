import type { ResearchProject } from "@/types";

export const researchProjects: ResearchProject[] = [
  {
    id: "proj1",
    slug: "llm-research-assistant",
    title:
      "LLM-based Research Assistant with Structured Knowledge Extraction",
    category: "Artificial Intelligence",
    shortDescription:
      "A domain-adapted LLM assistant that extracts structured knowledge from research papers and identifies novel research gaps.",
    fullDescription:
      "This project investigates how large language models can be combined with retrieval and structured information extraction to accelerate literature review. We build a pipeline capable of processing PDFs, extracting entities, relationships, and study outcomes, and visualizing knowledge graphs over a research field. Gap identification is benchmarked against curated survey papers.",
    methodology:
      "Pipeline evaluation using GPT-4 and open-source LLMs with RAG. Structured extraction validated against expert-annotated datasets. Gap detection benchmark using survey papers.",
    status: "In Progress",
    researchers: ["muhammad-umar-tariq"],
    year: 2025,
    tags: ["LLMs", "RAG", "Knowledge Extraction", "Literature Review"],
  },
  {
    id: "proj2",
    slug: "vision-ssl-biomedical",
    title:
      "Self-Supervised Visual Representation Learning for Low-Resource Biomedical Imaging",
    category: "Machine Learning",
    shortDescription:
      "Self-supervised pre-training strategies for chest X-ray and dermatology datasets with limited labeled data.",
    fullDescription:
      "We evaluate and extend modern self-supervised learning algorithms in the medical imaging domain, where annotations are expensive. The project compares contrastive, masked-image, and hybrid pre-training objectives on chest X-ray and skin imaging benchmarks, with transfer to downstream diagnosis tasks.",
    methodology:
      "Controlled benchmark across three public biomedical datasets. Linear probing, fine-tuning, and out-of-distribution robustness analysis.",
    status: "In Progress",
    researchers: ["muhammad-umar-tariq"],
    year: 2025,
    tags: ["Computer Vision", "Self-Supervised Learning", "Biomedical AI"],
  },
  {
    id: "proj3",
    slug: "generative-tabular-synthetic",
    title:
      "Generative Models for Privacy-Preserving Tabular Data Synthesis",
    category: "Generative AI",
    shortDescription:
      "A comparison of GANs, diffusion, and VAE-based approaches for generating high-fidelity, privacy-aware tabular data.",
    fullDescription:
      "Organizations often cannot share real data due to privacy or regulation. This project benchmarks recent generative tabular models using statistical fidelity, downstream utility, and differential privacy guarantees, providing a practical decision framework.",
    methodology:
      "Benchmark of 8 generative models on 6 tabular datasets. Metrics: statistical similarity, ML utility, epsilon-delta privacy.",
    status: "Under Review",
    researchers: ["muhammad-umar-tariq"],
    year: 2025,
    tags: ["Generative AI", "Privacy", "Tabular Data", "Benchmark"],
  },
  {
    id: "proj4",
    slug: "cyber-threat-intel",
    title:
      "Multi-Source Cyber Threat Intelligence Aggregation using NLP",
    category: "Cybersecurity",
    shortDescription:
      "NLP-based aggregation of threat reports, blogs, and CVEs into structured adversary TTP knowledge bases.",
    fullDescription:
      "Security analysts read hundreds of disjoint threat documents daily. This project builds an NLP pipeline for extracting structured TTPs (Tactics, Techniques, Procedures), IOCs, and attributed actors from unstructured reports, then normalizes them to MITRE ATT&CK.",
    methodology:
      "Few-shot and fine-tuned NER and RE extraction. Evaluated against manually annotated threat reports with MITRE mapping.",
    status: "Completed",
    researchers: ["muhammad-umar-tariq"],
    year: 2024,
    tags: ["NLP", "Cybersecurity", "Threat Intelligence"],
  },
  {
    id: "proj5",
    slug: "time-series-forecasting",
    title:
      "Benchmarking Deep Forecasting Models on Real-World Demand Data",
    category: "Data Science",
    shortDescription:
      "A reproducible benchmark of transformer, temporal-fusion, and statistical baselines for retail demand forecasting.",
    fullDescription:
      "Recent deep forecasting architectures promise strong performance on standard benchmarks, yet real-world retail data has noise, promotions, stockouts, and hierarchies. This project benchmarks representative models on a multi-retailer demand dataset with rigorous cross-validation.",
    methodology:
      "Time-series cross-validation. Metrics: MAE, MAPE, WAPE, coverage of prediction intervals. Baselines: ETS, ARIMA, XGB, TFT, PatchTST.",
    status: "Completed",
    researchers: ["muhammad-umar-tariq"],
    year: 2024,
    tags: ["Time-Series", "Forecasting", "Benchmark"],
  },
  {
    id: "proj6",
    slug: "research-automation-pipeline",
    title:
      "Automated Literature Screening Pipeline for Systematic Reviews",
    category: "Research Automation",
    shortDescription:
      "An end-to-end screening pipeline with active learning to reduce screening burden in large systematic reviews.",
    fullDescription:
      "Screening thousands of abstracts is the most expensive step of a systematic review. This project implements an active-learning-based screening system with transparent stopping criteria, integrated deduplication, and reviewer disagreement workflows.",
    methodology:
      "Simulations on public review datasets plus a live case study. Burden reduction and recall at various stopping thresholds.",
    status: "In Progress",
    researchers: ["muhammad-umar-tariq"],
    year: 2025,
    tags: ["Systematic Review", "Active Learning", "Automation"],
  },
  {
    id: "proj7",
    slug: "rag-safety-benchmark",
    title:
      "Safety and Faithfulness Benchmark for RAG Systems in Research",
    category: "Generative AI",
    shortDescription:
      "A benchmark evaluating hallucination, attribution, and citation quality in research-oriented RAG.",
    fullDescription:
      "RAG systems are increasingly used for research chatbots and literature assistants, yet they hallucinate claims and misattribute citations. This project publishes a benchmark dataset and evaluation framework for faithfulness and citation attribution in research QA.",
    methodology:
      "Crowd + expert QA dataset. Evaluations: exact attribution, citation coverage, contradiction rate, pairwise preference.",
    status: "In Progress",
    researchers: ["muhammad-umar-tariq"],
    year: 2025,
    tags: ["RAG", "LLMs", "Faithfulness", "Evaluation"],
  },
  {
    id: "proj8",
    slug: "multimodal-emotion",
    title:
      "Multimodal Emotion Recognition in Video Learning Environments",
    category: "NLP",
    shortDescription:
      "Fusion of text, audio, and visual modalities for engagement and affect detection in educational videos.",
    fullDescription:
      "We develop a multimodal baseline for engagement and emotion recognition using transcripts, audio prosody, and facial expressions, with the long-term goal of improving learning analytics.",
    methodology:
      "Cross-validated training on public and custom annotated datasets. Late fusion, early fusion, and attention-based fusion compared.",
    status: "Under Review",
    researchers: ["muhammad-umar-tariq"],
    year: 2025,
    tags: ["Multimodal", "NLP", "Audio", "Vision"],
  },
];

export const projectCategories = [
  "All",
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Data Science",
  "Cybersecurity",
  "NLP",
  "Research Automation",
];
