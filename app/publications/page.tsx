import type { Metadata } from "next";
import PublicationsPageClient from "./PublicationsPageClient";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed papers and research publications from Nexpage Research spanning AI, data science, cybersecurity, and evidence synthesis methodology.",
  alternates: {
    canonical: "/publications",
  },
};

export default function PublicationsPage() {
  return <PublicationsPageClient />;
}
