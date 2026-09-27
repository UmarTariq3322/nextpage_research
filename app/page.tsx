import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Network } from "lucide-react";

import { Arrow, ArrowLink, Button } from "@/components/ui/button";
import { SectionHeading, SectionLabel } from "@/components/ui/section-heading";
import { Section } from "@/components/site/primitives";
import { ResearchPathway } from "@/components/site/ResearchPathway";
import { Journey } from "@/components/site/Journey";
import { CurriculumExplorer } from "@/components/site/CurriculumExplorer";
import { IdeaBoardVisual } from "@/components/site/CommunityBlocks";
import { Disciplines, LeaderCard } from "@/components/site/OrgBlocks";
import { CtaBand } from "@/components/site/CtaBand";
import { communityHighlights, offer, outputs } from "@/content/home";
import { progressionLevels } from "@/content/academy";
import { modules } from "@/content/curriculum";
import { workflow } from "@/content/community";
import { leaders } from "@/content/team";
import { communityCta, primaryCta } from "@/content/site";

const offerIcons = [BookOpen, FlaskConical, Network];

// Facts derived from the handbook structure, not marketing numbers.
const facts = [
  { value: modules.length, label: "Academy modules" },
  { value: workflow.length, label: "Workflow phases" },
  { value: progressionLevels.length, label: "Progression levels" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="relative overflow-hidden border-b border-line" aria-labelledby="hero-title">
        <div aria-hidden className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_70%)]" />
        <div className="container relative grid items-center gap-12 pb-16 pt-12 sm:pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:pb-28 lg:pt-24">
          <div>
            <SectionLabel>Nexpage Research</SectionLabel>
            <h1 id="hero-title" className="t-display mt-6 sm:mt-7">
              From research ideas to <span className="text-accent">publishable evidence.</span>
            </h1>
            <p className="t-lead mt-6 max-w-lg sm:mt-7">
              Learn rigorous research methods, develop real research projects and keep collaborating through a
              research community.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Button asChild size="lg">
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <Arrow />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={communityCta.href}>{communityCta.label}</Link>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-t border-line pt-6">
              {facts.map((f) => (
                <div key={f.label} className="px-4 first:pl-0 last:pr-0">
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-semibold tracking-tight">{f.value}</span>
                    <span className="mt-1 block text-xs leading-snug text-fg-mute sm:text-sm">{f.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <ResearchPathway className="mx-auto w-full max-w-md lg:max-w-none" />
        </div>
      </section>

      {/* 2 — What we offer: three actionable entry points */}
      <Section labelledBy="what-title">
        <SectionHeading
          id="what-title"
          layout="split"
          eyebrow="What is Nexpage Research"
          title="Research education. Collaboration. Community."
          description="Structured research education, mentorship and collaboration that move students from ideas to meaningful evidence."
          className="mb-12 lg:mb-16"
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {offer.map((o, i) => {
            const Icon = offerIcons[i];
            return (
              <li key={o.title} className="reveal">
                <Link
                  href={o.href}
                  className="surface-interactive group flex h-full gap-5 p-6 md:flex-col md:gap-0 md:p-8"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-on">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="flex flex-1 flex-col md:mt-10">
                    <span className="t-h3 text-xl md:text-2xl">{o.title}</span>
                    <span className="mt-1.5 text-fg-soft md:mt-2">{o.body}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent md:mt-auto md:pt-8">
                      {o.cta} <Arrow />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* 3 — Research journey */}
      <Section tone="band" labelledBy="journey-title">
        <SectionHeading
          id="journey-title"
          eyebrow="The research journey"
          title="Seven steps from a first idea to a research community."
          className="mb-14 lg:mb-20"
        />
        <Journey />
      </Section>

      {/* 4 — Academy */}
      <Section labelledBy="academy-title">
        <SectionHeading
          id="academy-title"
          layout="split"
          eyebrow="The Academy"
          title="A research curriculum, not a lecture series."
          description="Nine modules from research foundations to scientific writing and evidence synthesis. Each one ends in a real output."
          action={<ArrowLink href="/curriculum">Explore the full curriculum</ArrowLink>}
          className="mb-12"
        />
        <CurriculumExplorer />
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 lg:flex-row lg:items-center lg:gap-10">
          <p className="t-label shrink-0">What students build</p>
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium">
            {outputs.map((o, i) => (
              <li key={o} className="flex items-center gap-3">
                {o}
                {i < outputs.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-fg-mute" aria-hidden />}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 5 — Research Community */}
      <Section tone="subtle" labelledBy="community-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              id="community-title"
              eyebrow="Research Community"
              title="Research doesn't stop after the Academy."
              description="A structured environment to find collaborators, review each other's work and build projects together."
            />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {communityHighlights.map((c) => (
                <li key={c.title} className="grid gap-0.5 py-4 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6">
                  <span className="font-display font-semibold tracking-tight">{c.title}</span>
                  <span className="text-sm text-fg-soft">{c.body}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild>
                <Link href={communityCta.href}>
                  Join the Community <Arrow />
                </Link>
              </Button>
              <ArrowLink href="/community">How it works</ArrowLink>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-paper p-5 shadow-lg sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <span className="t-label">Research idea board</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-fg-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> open
              </span>
            </div>
            <IdeaBoardVisual />
          </div>
        </div>
      </Section>

      {/* 6 — Workflow: each phase deep-links to its detail */}
      <Section labelledBy="workflow-title" size="compact">
        <SectionHeading
          id="workflow-title"
          layout="split"
          eyebrow="Research workflow"
          title="Ten phases, each with a defined output."
          description="Every project follows a structured lifecycle with quality checks along the way. Select a phase to see what happens in it."
          action={<ArrowLink href="/workflow">View the research workflow</ArrowLink>}
          className="mb-10 lg:mb-12"
        />
        {/* Swipeable on small screens; the edge fade hints that it scrolls. */}
        <div className="-mx-5 overflow-x-auto px-5 pb-3 [mask-image:linear-gradient(to_right,black_80%,transparent)] sm:mx-0 sm:px-0 lg:overflow-visible lg:pb-0 lg:[mask-image:none]">
          <ol className="relative grid min-w-[56rem] grid-cols-10 gap-3 lg:min-w-0" aria-label="Research lifecycle">
            <span aria-hidden className="draw-x absolute left-2 right-2 top-[7px] h-px bg-gradient-to-r from-line-strong to-accent" />
            {workflow.map((p) => (
              <li key={p.n}>
                <Link href={`/workflow#phase-${p.n}`} className="group relative block rounded-sm pb-1">
                  <span className="relative z-10 block h-[15px] w-[15px] rounded-full border border-line-strong bg-paper transition-colors duration-200 group-hover:border-accent group-hover:bg-accent" />
                  <span className="mt-4 block font-mono text-[0.68rem] text-fg-mute transition-colors group-hover:text-accent">
                    {pad(p.n)}
                  </span>
                  <span className="mt-0.5 block text-sm font-medium transition-colors group-hover:text-accent">{p.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 7 — Who we serve */}
      <Section tone="subtle" labelledBy="serve-title" size="compact">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
          <SectionHeading
            id="serve-title"
            eyebrow="Who we serve"
            title="Built for researchers across disciplines."
            description="One shared research process, with field-specific adaptations where needed."
          />
          <Disciplines />
        </div>
      </Section>

      {/* 8 — Leadership */}
      <Section labelledBy="team-title">
        <SectionHeading
          id="team-title"
          layout="split"
          eyebrow="Leadership"
          title="Research, teaching and technology."
          action={<ArrowLink href="/team">Meet the team</ArrowLink>}
          className="mb-10 lg:mb-14"
        />
        <ul className="grid gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-8">
          {leaders.map((l) => (
            <li key={l.slug} className="reveal">
              <LeaderCard leader={l} compact />
            </li>
          ))}
        </ul>
      </Section>

      {/* 9 — Final CTA */}
      <CtaBand showDirect />
    </>
  );
}
