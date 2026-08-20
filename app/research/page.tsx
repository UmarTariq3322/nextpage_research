import type { Metadata } from "next";
import ResearchPageClient from "./ResearchPageClient";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore the research portfolio at Nexpage Research: active and completed projects spanning AI, machine learning, data science, cybersecurity, and research methodology.",
  alternates: {
    canonical: "/research",
  },
};

export default function ResearchPage() {
  return <ResearchPageClient />;
}
