import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Cpu, FileText, Lightbulb, MessagesSquare, Network, Sigma, Users } from "lucide-react";

import { Arrow, ArrowLink, Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero, Section } from "@/components/site/primitives";
import { SectionNav } from "@/components/site/SectionNav";
import { AdvantageList, CoreValues, DisciplineContrast, Disciplines, LeaderRows } from "@/components/site/OrgBlocks";
import { CtaBand } from "@/components/site/CtaBand";
import { expertiseAreas, mission, progression, strategicGoals, vision } from "@/content/organization";
import { leaders } from "@/content/team";
import { communityCta } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nexpage Research's vision, mission and core values: a research-focused education and collaboration organization for students from every academic discipline.",
  alternates: { canonical: "/about" },
};

const areaIcons = [BookOpen, MessagesSquare, Sigma, Network, Cpu];

const sections = [
  { id: "what-we-are", label: "What we are" },
  { id: "vision-mission", label: "Vision & mission" },
  { id: "values", label: "Values" },
  { id: "difference", label: "What's different" },
  { id: "who-we-serve", label: "Who we serve" },
  { id: "leadership", label: "Leadership" },
];

// The organization in one progression (Handbook 1.1).
const stages = [
  { icon: Lightbulb, title: "Research Ideas", body: "Students arrive with a question worth asking." },
  { icon: FileText, title: "Publishable Evidence", body: "The Academy teaches the methods to answer it rigorously." },
  { icon: Users, title: "Research Community", body: "Members keep producing research together." },
];

function ProgressionAside() {
  return (
    <figure className="relative hidden overflow-hidden rounded-lg border border-line bg-surface p-6 shadow-lg sm:block sm:p-8">
      <figcaption className="t-label">Nexpage in one line</figcaption>
      <ol className="relative mt-6">
        <span aria-hidden className="draw-y absolute bottom-7 left-5 top-7 w-px bg-gradient-to-b from-line-strong via-accent/60 to-accent" />
        {stages.map((s, i) => {
          const last = i === stages.length - 1;
          return (
            <li key={s.title} className="relative flex gap-5 py-3.5">
              <span
                className={
                  last
                    ? "relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-accent-on"
                    : "relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong bg-surface text-fg-soft"
                }
              >
                <s.icon className="h-[18px] w-[18px]" aria-hidden />
              </span>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">{s.title}</p>
                <p className="mt-0.5 text-sm text-fg-soft">{s.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nexpage Research"
        title="A research-focused education and collaboration organization."
        lead="We teach students from every discipline to conduct meaningful, ethical and scientifically sound research."
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/academy">
                Explore the Academy <Arrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#leadership">Meet the leadership</Link>
            </Button>
          </>
        }
        aside={<ProgressionAside />}
      />

      <SectionNav items={sections} />

      {/* What we are */}
      <Section id="what-we-are" labelledBy="offer-title" className="scroll-mt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <SectionHeading
              id="offer-title"
              eyebrow="What we are"
              title="More than a lecture series."
              description={progression.summary}
            />
          </div>
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {expertiseAreas.map((a, i) => {
              const Icon = areaIcons[i];
              const wide = i === expertiseAreas.length - 1;
              return (
                <li
                  key={a.title}
                  className={
                    wide
                      ? "group flex gap-4 bg-surface p-5 transition-colors hover:bg-subtle sm:col-span-2 sm:block sm:p-7"
                      : "group flex gap-4 bg-surface p-5 transition-colors hover:bg-subtle sm:block sm:p-7"
                  }
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line text-fg-soft transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <div>
                    <h3 className="t-h3 sm:mt-5">{a.title}</h3>
                    <p className="mt-1 text-sm text-fg-soft">{a.short}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* Vision and mission */}
      <Section id="vision-mission" tone="band" labelledBy="vm-title" className="scroll-mt-32">
        <h2 id="vm-title" className="sr-only">
          Vision and mission
        </h2>
        <div className="grid gap-px overflow-hidden rounded-lg bg-line lg:grid-cols-2">
          {[
            { label: "Vision", sub: "Where we are going", text: vision },
            { label: "Mission", sub: "What we do every day", text: mission },
          ].map((b) => (
            <figure key={b.label} className="bg-paper p-7 sm:p-12">
              <figcaption className="flex items-baseline justify-between gap-4">
                <span className="t-label text-accent">{b.label}</span>
                <span className="text-xs text-fg-mute">{b.sub}</span>
              </figcaption>
              <blockquote className="mt-6 font-display text-xl font-medium leading-snug tracking-tight sm:mt-8 sm:text-[1.75rem]">
                {b.text}
              </blockquote>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="values" labelledBy="values-title" className="scroll-mt-32">
        <SectionHeading
          id="values-title"
          layout="split"
          eyebrow="Core values"
          title="Seven principles behind every project."
          description="They guide curriculum decisions, teaching practice and the conduct of every project."
          className="mb-12"
        />
        <CoreValues />
      </Section>

      <Section id="difference" tone="subtle" labelledBy="adv-title" className="scroll-mt-32">
        <SectionHeading
          id="adv-title"
          layout="split"
          eyebrow="What makes Nexpage different"
          title="Rigorous, practical and continuous."
          action={<ArrowLink href="/academy">How the Academy works</ArrowLink>}
          className="mb-10"
        />
        <AdvantageList />
        <Accordion
          summary={<span>Our strategic goals ({strategicGoals.length})</span>}
          className="mt-8 border-t border-line pt-5"
          panelClassName="pt-5"
        >
          <ol className="grid gap-x-10 gap-y-3 md:grid-cols-2">
            {strategicGoals.map((g, i) => (
              <li key={g} className="flex gap-4 text-sm text-fg-soft">
                <span className="w-7 shrink-0 font-mono text-xs text-accent">G{i + 1}</span>
                {g}
              </li>
            ))}
          </ol>
        </Accordion>
      </Section>

      <Section id="who-we-serve" labelledBy="serve-title" className="scroll-mt-32">
        <SectionHeading
          id="serve-title"
          layout="split"
          eyebrow="Who we serve"
          title="Every academic discipline."
          description="The research process is shared across fields. Field-specific examples and specialist sessions are added where methods differ."
          className="mb-12"
        />
        <DisciplineContrast />
        <div className="mt-10">
          <Disciplines />
        </div>
      </Section>

      <Section id="leadership" tone="subtle" labelledBy="lead-title" className="scroll-mt-32">
        <SectionHeading
          id="lead-title"
          layout="split"
          eyebrow="Leadership"
          title="The people behind Nexpage Research."
          action={<ArrowLink href="/team">Full profiles and structure</ArrowLink>}
          className="mb-10"
        />
        <LeaderRows leaders={leaders} />
      </Section>

      <CtaBand
        title="Be part of what we are building."
        body="Learn research the rigorous way, then keep doing it with a community."
        secondary={communityCta}
        showDirect
      />
    </>
  );
}
