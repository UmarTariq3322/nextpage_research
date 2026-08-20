import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/HeroSection";
import { ResearchChallengesSection } from "@/components/sections/ResearchChallengesSection";
import { SolutionPipelineSection } from "@/components/sections/SolutionPipelineSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MeetMentorSection } from "@/components/sections/MeetMentorSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";

import { ImpactMetricsSection } from "@/components/sections/ImpactMetricsSection";
import { SuccessStoriesSection } from "@/components/sections/SuccessStoriesSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Nexpage Research — Research. Innovate. Publish.",
  description:
    "Nexpage Research is a research and innovation division of Nexpage Technologies. Research methodology, AI-powered analysis, mentorship, and publication support for students, researchers, academics, and organizations.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ResearchChallengesSection />
      <SolutionPipelineSection />
      <ServicesSection />
      <MeetMentorSection />
      <ProgramsSection />
      <ProjectsSection />
      <PublicationsSection />

      <ImpactMetricsSection />
      <SuccessStoriesSection />
      <CommunitySection />
      <FinalCTASection />
    </>
  );
}
