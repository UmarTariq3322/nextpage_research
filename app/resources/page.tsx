import type { Metadata } from "next";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, articles, and educational resources on research methodology, AI research, data science, statistics, systematic reviews, academic writing, and publication.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
