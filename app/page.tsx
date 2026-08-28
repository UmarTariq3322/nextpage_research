import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsNexpageSection } from "@/components/sections/WhatIsNexpageSection";
import { SolutionPipelineSection } from "@/components/sections/SolutionPipelineSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MeetMentorSection } from "@/components/sections/MeetMentorSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";

import { ImpactMetricsSection } from "@/components/sections/ImpactMetricsSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Nexpage Research — Research. Innovate. Publish.",
  description:
    "Nexpage Research is a research and innovation division of Nexpage Technologies. Research methodology, statistical analysis, mentorship, and publication support for students, researchers, academics, and organizations.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsNexpageSection />
      <SolutionPipelineSection />
      <MeetMentorSection />
      <ServicesSection />
      <PublicationsSection />

      <ImpactMetricsSection />
      <CommunitySection />
      <FinalCTASection />
    </>
  );
}
