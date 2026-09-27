import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { Arrow, ArrowLink, Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero, PendingNote, Section } from "@/components/site/primitives";
import { CapstonePath, DesignPrinciples, ProgressionLevels, TeachingCycle } from "@/components/site/AcademyBlocks";
import { CurriculumLadder } from "@/components/site/CurriculumLadder";
import { CtaBand } from "@/components/site/CtaBand";
import { capstone, learningOutcomes, progressionLevels, teachingCycle } from "@/content/academy";
import { modules } from "@/content/curriculum";
import { communityCta } from "@/content/site";

export const metadata: Metadata = {
  title: "The Academy",
  description:
    "The Nexpage Research Academy is a research-centered learning program: research methodology, statistics, evidence synthesis and scientific writing, taught through real research outputs.",
  alternates: { canonical: "/academy" },
};

const glance = [
  { value: modules.length, label: "Curriculum modules" },
  { value: teachingCycle.length, label: "Step teaching cycle" },
  { value: capstone.length, label: "Part capstone portfolio" },
  { value: progressionLevels.length, label: "Progression levels" },
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="The Academy"
        title="Learn research by doing research."
        lead="Methods are taught because your research question needs them, not as isolated lectures."
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/curriculum">
                Explore the curriculum <Arrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#capstone">What you will build</Link>
            </Button>
          </>
        }
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {glance.map((g) => (
              <div key={g.label} className="bg-surface p-6">
                <dt className="sr-only">{g.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-semibold tracking-tight">{g.value}</span>
                  <span className="mt-1 block text-sm text-fg-soft">{g.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <Section labelledBy="principles-title">
        <SectionHeading
          id="principles-title"
          layout="split"
          eyebrow="How it is designed"
          title="Foundations first. Design before statistics."
          description="Ten principles shape every module."
          className="mb-10"
        />
        <DesignPrinciples />
      </Section>

      <Section id="teaching-model" tone="subtle" labelledBy="cycle-title">
        <SectionHeading
          id="cycle-title"
          eyebrow="Teaching model"
          title="One eight-step cycle for every major topic."
          className="mb-12"
        />
        <TeachingCycle />
      </Section>

      <Section labelledBy="path-title">
        <SectionHeading
          id="path-title"
          layout="split"
          eyebrow="Learning path"
          title="Nine modules, foundations to publication."
          action={<ArrowLink href="/curriculum">Full module details</ArrowLink>}
          className="mb-12"
        />
        <CurriculumLadder />
      </Section>

      <Section id="capstone" tone="subtle" labelledBy="capstone-title">
        <SectionHeading
          id="capstone-title"
          layout="split"
          eyebrow="Capstone portfolio"
          title="A portfolio, not an exam."
          description="Each student takes one project through ten research outputs."
          className="mb-12"
        />
        <CapstonePath />
      </Section>

      <Section tone="band" labelledBy="levels-title">
        <SectionHeading id="levels-title" eyebrow="Progression" title="Five levels of research independence." className="mb-14" />
        <ProgressionLevels />
      </Section>

      <Section labelledBy="outcomes-title" size="compact">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <SectionHeading id="outcomes-title" eyebrow="Outcomes" title="What students will be able to do." />
          <div>
            <Accordion
              summary={<span>View all {learningOutcomes.length} learning outcomes</span>}
              className="border-y border-line py-4"
              panelClassName="pt-5"
            >
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {learningOutcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-sm text-fg-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>
            </Accordion>
            <PendingNote title="Program delivery details are being finalized" className="mt-6">
              Format, duration, fees and certification will be announced.{" "}
              <Link href="/contact?interest=academy" className="font-medium text-accent underline-offset-4 hover:underline">
                Ask to be notified
              </Link>
              .
            </PendingNote>
          </div>
        </div>
      </Section>

      <CtaBand
        title="After the Academy, the research continues."
        body="Students move into the Research Community to collaborate on real projects."
        primary={{ label: "Explore the Community", href: "/community" }}
        secondary={communityCta}
      />
    </>
  );
}
