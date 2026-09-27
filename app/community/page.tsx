import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { Arrow, Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero, Section } from "@/components/site/primitives";
import { CommunityPrograms, ProjectRoles, ProjectRoomVisual } from "@/components/site/CommunityBlocks";
import { CtaBand } from "@/components/site/CtaBand";
import { communityGuidelines, communityPending } from "@/content/community";
import { communityCta } from "@/content/site";

export const metadata: Metadata = {
  title: "Research Community",
  description:
    "The Nexpage Research Community: a structured research collaboration network with an idea board, project matchmaking, a statistics help desk, project rooms and peer review.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Community"
        title="Where research ideas find collaborators."
        lead="The Academy builds the skills. The Community is where they are used, together."
        actions={
          <>
            <Button asChild size="lg">
              <Link href={communityCta.href}>
                {communityCta.label} <Arrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/workflow">See how projects run</Link>
            </Button>
          </>
        }
        aside={<ProjectRoomVisual className="mx-auto w-full max-w-md lg:mr-0" />}
      />

      <Section id="programs" labelledBy="programs-title">
        <SectionHeading
          id="programs-title"
          layout="split"
          eyebrow="Programs"
          title="Built for collaboration, not just discussion."
          description="Six ways members find collaborators, get feedback and move projects forward."
          className="mb-12"
        />
        <CommunityPrograms />
      </Section>

      <Section id="roles" tone="subtle" labelledBy="roles-title">
        <SectionHeading
          id="roles-title"
          layout="split"
          eyebrow="Project roles"
          title="Every project has a defined team."
          description="One member may hold more than one role in a small project. Roles are provided under the mentorship program."
          className="mb-12"
        />
        <ProjectRoles />
      </Section>

      <Section labelledBy="guidelines-title" size="compact">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <SectionHeading
            id="guidelines-title"
            eyebrow="How we work together"
            title="Credit, confidentiality and respectful critique."
          />
          <div className="border-t border-line">
            <Accordion summary={<span>Community guidelines</span>} className="border-b border-line py-4" panelClassName="pt-4">
              <ul className="space-y-3">
                {communityGuidelines.map((g) => (
                  <li key={g} className="flex gap-3 text-sm text-fg-soft">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {g}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion summary={<span>Still being finalized</span>} className="border-b border-line py-4" panelClassName="pt-4">
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-soft">
                {communityPending.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Accordion>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Have a research idea?"
        body="Find the people to take it further."
        primary={communityCta}
        secondary={{ label: "Explore the Academy", href: "/academy" }}
      />
    </>
  );
}
