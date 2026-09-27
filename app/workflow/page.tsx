import type { Metadata } from "next";

import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero, Section } from "@/components/site/primitives";
import { WorkflowExplorer } from "@/components/site/WorkflowExplorer";
import { CtaBand } from "@/components/site/CtaBand";
import { integrityCommitments, managementPractices } from "@/content/community";

export const metadata: Metadata = {
  title: "Research Workflow",
  description:
    "The Nexpage Research project lifecycle: ten quality-controlled phases from ideation, ethics and reproducible analysis to internal review, journal submission and revision.",
  alternates: { canonical: "/workflow" },
};

export default function WorkflowPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Ten phases. Defined outputs. Quality checks."
        lead="Every Academy capstone and Community project follows the same structured lifecycle."
      />

      <Section labelledBy="lifecycle-title">
        <SectionHeading
          id="lifecycle-title"
          eyebrow="Project lifecycle"
          title="From ideation to revision."
          description="Select a phase to see its activities, output, owner and quality check."
          className="mb-14"
        />
        <WorkflowExplorer />
        <Accordion
          summary={<span>Project management practices</span>}
          className="mt-14 border-y border-line py-4"
          panelClassName="pt-4"
        >
          <ul className="list-disc space-y-2 pl-5 text-sm text-fg-soft">
            {managementPractices.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Accordion>
      </Section>

      <Section id="integrity" tone="band" labelledBy="integrity-title">
        <SectionHeading
          id="integrity-title"
          layout="split"
          eyebrow="Quality and integrity"
          title="Rigor and integrity from the first module."
          description="Ethics, authorship and publication integrity are taught from the start and checked on every project."
          className="mb-14"
        />
        <ul className="grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-3">
          {integrityCommitments.map((c, i) => (
            <li key={c.title} className="bg-paper p-7">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="t-h3 mt-4">{c.title}</h3>
              <p className="mt-1.5 text-sm text-fg-soft">{c.short}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
