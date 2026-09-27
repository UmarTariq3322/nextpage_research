import type { Metadata } from "next";

import { Accordion } from "@/components/ui/accordion";
import { ArrowLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero, PendingNote, Section, Tag } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { glossary, modules, toolkit, type Module } from "@/content/curriculum";
import { capstone } from "@/content/academy";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "The Nexpage Research Academy curriculum: Research Foundations, Letter to the Editor, Narrative Review, Cross-sectional Study, Original Study Analysis, Systematic Review and Meta-analysis, Advanced Meta-analysis, CDC and GBD public health data, and Scientific Writing and Publication.",
  alternates: { canonical: "/curriculum" },
};

const anchor = (m: Module) => `module-${m.code.toLowerCase()}`;

function capstoneLinks(code: string) {
  return capstone.filter((c) => new RegExp(`\\b${code}\\b`).test(c.modules)).map((c) => c.title);
}

function ModuleRow({ m, n }: { m: Module; n: number }) {
  const feeds = capstoneLinks(m.code);
  return (
    <Accordion
      id={anchor(m)}
      headingLevel="h3"
      className="border-b border-line"
      triggerClassName="py-6 [&:hover_.module-title]:text-accent"
      panelClassName="pb-8 lg:pl-16"
      summary={
        <span className="grid flex-1 gap-2 lg:grid-cols-[4rem_1fr_auto] lg:items-baseline lg:gap-0">
          <span className="font-mono text-sm text-fg-mute">{String(n).padStart(2, "0")}</span>
          <span>
            <span className="module-title block font-display text-xl font-semibold tracking-tight text-fg transition-colors sm:text-2xl">
              {m.title}
            </span>
            <span className="mt-1 block text-sm font-normal text-fg-soft">{m.oneLiner}</span>
          </span>
          <span className="flex gap-2 lg:ml-6">
            {m.stage === "Throughout" && <Tag tone="accent">Throughout</Tag>}
            <Tag>{m.level}</Tag>
          </span>
        </span>
      }
    >
      <dl className="grid gap-6 border-t border-line pt-6 md:grid-cols-2">
        <div>
          <dt className="t-label">Core outcome</dt>
          <dd className="mt-2 text-fg">{m.outcome}</dd>
        </div>
        <div>
          <dt className="t-label">Deliverable</dt>
          <dd className="mt-2 font-medium text-fg">{m.deliverable}</dd>
        </div>
      </dl>
      <div className="mt-8">
        <p className="t-label">Topics</p>
        <ul className="mt-3 grid gap-x-8 gap-y-2 md:grid-cols-2">
          {m.topics.map((t) => (
            <li key={t} className="flex gap-3 text-sm text-fg-soft">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        {feeds.length > 0 ? (
          <p className="text-fg-soft">
            <span className="font-medium text-fg">Capstone:</span> {feeds.join(" · ")}
          </p>
        ) : (
          <span />
        )}
        <ArrowLink href={`/contact?interest=academy&module=${m.code}`}>Ask about this module</ArrowLink>
      </div>
    </Accordion>
  );
}

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum"
        title="Nine modules. Every one ends in a real output."
        lead="Increasing in complexity from research foundations to evidence synthesis, with scientific writing throughout."
      />

      <Section labelledBy="modules-title">
        <h2 id="modules-title" className="sr-only">
          Modules
        </h2>
        <div className="grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <nav aria-label="Modules" className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="t-label mb-4">Learning path</p>
            <ol className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
              {modules.map((m, i) => (
                <li key={m.code} className="shrink-0">
                  <a
                    href={`#${anchor(m)}`}
                    className="flex items-center gap-3 whitespace-nowrap rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-fg-soft transition-colors hover:text-fg lg:border-0 lg:bg-transparent lg:px-0 lg:py-1.5"
                  >
                    <span className="font-mono text-xs text-fg-mute">{String(i + 1).padStart(2, "0")}</span>
                    {m.shortTitle}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0">
            <div className="border-t border-line">
              {modules.map((m, i) => (
                <ModuleRow key={m.code} m={m} n={i + 1} />
              ))}
            </div>
            <div className="band mt-8 flex flex-col gap-4 rounded-lg p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="t-label">Then</p>
                <p className="mt-2 font-display text-xl font-semibold tracking-tight">Research Community</p>
                <p className="mt-1 text-sm text-fg-soft">Collaborate, peer-review and develop projects.</p>
              </div>
              <ArrowLink href="/community">How the Community works</ArrowLink>
            </div>
            <PendingNote title="Schedule and format to be announced" className="mt-6">
              Duration, sessions and whether modules are offered individually are still being decided.
            </PendingNote>
          </div>
        </div>
      </Section>

      <Section id="toolkit" tone="subtle" labelledBy="toolkit-title">
        <SectionHeading
          id="toolkit-title"
          layout="split"
          eyebrow="Tools and standards"
          title="The research toolkit."
          description="Tools and standards used across all Nexpage Research projects. No partnership with their providers is implied."
          className="mb-12"
        />
        <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {toolkit.map((t) => (
            <div key={t.category} className="bg-surface p-6">
              <dt className="t-label">{t.category}</dt>
              <dd className="mt-4 space-y-1.5">
                {t.items.map((i) => (
                  <span key={i} className="block font-display text-[0.95rem] font-medium tracking-tight text-fg">
                    {i}
                  </span>
                ))}
              </dd>
            </div>
          ))}
          <div className="hidden bg-surface sm:block" aria-hidden />
        </dl>

        <Accordion
          summary={<span>Glossary of terms used in the curriculum</span>}
          className="mt-10 border-y border-line py-4"
          panelClassName="pt-4"
        >
          <dl className="grid gap-x-10 md:grid-cols-2">
            {glossary.map((g) => (
              <div key={g.term} className="flex gap-4 border-b border-line py-3">
                <dt className="w-24 shrink-0 font-mono text-sm text-fg">{g.term}</dt>
                <dd className="text-sm text-fg-soft">{g.meaning}</dd>
              </div>
            ))}
          </dl>
        </Accordion>
      </Section>

      <CtaBand />
    </>
  );
}
