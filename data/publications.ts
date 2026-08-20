import type { Publication } from "@/types";

export const publications: Publication[] = [
  {
    id: "pub1",
    slug: "demo-llm-rag-literature",
    title:
      "A Demonstration of LLM-Assisted Literature Review with Retrieval-Augmented Knowledge Extraction",
    authors: ["M. U. Tariq", "Nexpage Research Team (Demo)"],
    researchArea: "AI/ML",
    venue: "Demo Venue — Conference on Research Methodology (Sample)",
    year: 2025,
    abstract:
      "This is a sample publication entry intended to demonstrate the structure of the publication card and detail page. Replace with real authors, title, venue, year, abstract, and DOI before launch. The publication system supports search, filtering by research area, and individual detail pages via dynamic routing.",
    doi: "10.xxxx/demo-doi-1",
    tags: ["LLMs", "RAG", "Literature Review", "Demo"],
  },
  {
    id: "pub2",
    slug: "demo-self-supervised-biomedical",
    title:
      "Towards Low-Label Biomedical Vision: A Demo Comparison of Self-Supervised Objectives",
    authors: ["M. U. Tariq", "Nexpage Research Team (Demo)"],
    researchArea: "AI/ML",
    venue: "Demo Venue — ML4H Workshop (Sample)",
    year: 2025,
    abstract:
      "Sample placeholder abstract. This entry models the expected data schema for real publications. Data structure is designed for easy CMS import later.",
    doi: "10.xxxx/demo-doi-2",
    tags: ["Computer Vision", "Self-Supervised Learning", "Biomedical", "Demo"],
  },
  {
    id: "pub3",
    slug: "demo-tabular-synthesis",
    title:
      "Demo: A Benchmark of Generative Tabular Models Under Differential Privacy",
    authors: ["M. U. Tariq", "Nexpage Research Team (Demo)"],
    researchArea: "Generative AI",
    venue: "Demo Venue — Journal of Data & Privacy (Sample)",
    year: 2024,
    abstract:
      "Sample publication placeholder for a generative AI paper. Replace prior to launch with a real paper and verified DOI.",
    doi: "10.xxxx/demo-doi-3",
    tags: ["Generative AI", "Privacy", "Tabular Data", "Demo"],
  },
  {
    id: "pub4",
    slug: "demo-cyber-ttp-nlp",
    title:
      "Demo: Structured Extraction of MITRE ATT&CK TTPs from Unstructured Threat Reports",
    authors: ["M. U. Tariq", "Nexpage Research Team (Demo)"],
    researchArea: "Cybersecurity",
    venue: "Demo Venue — Secure AI Workshop (Sample)",
    year: 2024,
    abstract:
      "Sample placeholder abstract for a cybersecurity + NLP paper. This is a demo publication and should be replaced before production use.",
    doi: "10.xxxx/demo-doi-4",
    tags: ["Cybersecurity", "NLP", "Threat Intelligence", "Demo"],
  },
  {
    id: "pub5",
    slug: "demo-forecasting-benchmark",
    title:
      "Demo: Are Deep Forecasters Better in Practice? A Multi-Retailer Benchmark",
    authors: ["M. U. Tariq", "Nexpage Research Team (Demo)"],
    researchArea: "Data Science",
    venue: "Demo Venue — Applied Data Science Track (Sample)",
    year: 2024,
    abstract:
      "Sample placeholder abstract. Replace with real publication content when available.",
    doi: "10.xxxx/demo-doi-5",
    tags: ["Time-Series", "Forecasting", "Benchmark", "Demo"],
  },
  {
    id: "pub6",
    slug: "demo-systematic-review-automation",
    title:
      "Demo: Active-Learning Assisted Screening Can Reduce Burden in Large Systematic Reviews",
    authors: ["M. U. Tariq", "Nexpage Research Team (Demo)"],
    researchArea: "Other",
    venue: "Demo Venue — Evidence Synthesis Journal (Sample)",
    year: 2025,
    abstract:
      "Sample placeholder entry for a systematic review methods paper. Replace before launch.",
    doi: "10.xxxx/demo-doi-6",
    tags: ["Systematic Review", "Active Learning", "Demo"],
  },
];

export const publicationFilters = [
  "All",
  "AI/ML",
  "Data Science",
  "Cybersecurity",
  "Generative AI",
  "Other",
];
