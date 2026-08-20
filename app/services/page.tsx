import type { Metadata } from "next";
import { ServicesPageClient } from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Research Services",
  description:
    "Nexpage Research offers end-to-end research services including research consulting, systematic reviews, AI/ML research, statistical analysis, data science, thesis/FYP support, manuscript development, and publication support.",
  keywords: [
    "research consulting",
    "systematic review",
    "meta-analysis",
    "AI research services",
    "statistical analysis",
    "data science research",
    "thesis support",
    "publication support",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
