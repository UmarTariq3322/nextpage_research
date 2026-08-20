import type { Metadata } from "next";
import PortalPageClient from "./PortalPageClient";

export const metadata: Metadata = {
  title: "Research Portal",
  description:
    "Nexpage Research Portal — role-based dashboard architecture for students, researchers, mentors, and administrators. Research project management, mentorship, documents, and progress tracking.",
  alternates: {
    canonical: "/portal",
  },
};

export default function PortalPage() {
  return <PortalPageClient />;
}
