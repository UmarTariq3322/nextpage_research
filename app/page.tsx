import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, FlaskConical, Mail, MessageCircle, Network } from "lucide-react";

import { Arrow, Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading, SectionLabel } from "@/components/ui/section-heading";
import { PendingNote, Section } from "@/components/site/primitives";
import { ResearchPathway } from "@/components/site/ResearchPathway";
import { Journey } from "@/components/site/Journey";
import { CurriculumExplorer } from "@/components/site/CurriculumExplorer";
import { CommunityPrograms, ProjectRoles } from "@/components/site/CommunityBlocks";
import { WorkflowExplorer } from "@/components/site/WorkflowExplorer";
import { Disciplines, LeaderCard } from "@/components/site/OrgBlocks";
import { ContactForm } from "@/components/site/ContactForm";
import { offer, outputs } from "@/content/home";
import { progressionLevels } from "@/content/academy";
import { modules } from "@/content/curriculum";
import { communityGuidelines, integrityCommitments, workflow } from "@/content/community";
import { VisionMissionValues } from "@/components/site/VisionMissionValues";
import { leaders } from "@/content/team";
import { communityCta, primaryCta, site } from "@/content/site";

const offerIcons = [BookOpen, FlaskConical, Network];

// Facts derived from the handbook structure, not marketing numbers.
const facts = [
  { value: modules.length, label: "Academy modules" },
  { value: workflow.length, label: "Workflow phases" },
  { value: progressionLevels.length, label: "Progression levels" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
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
                <a href={primaryCta.href}>
                  {primaryCta.label}
                  <Arrow />
                </a>
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

      {/* About */}
      <Section id="about" labelledBy="about-title">
        <SectionHeading
          id="about-title"
          layout="split"
          eyebrow="About Nexpage Research"
          title="Research education. Collaboration. Community."
          description="A research-focused education and collaboration organization that teaches students from every discipline to conduct meaningful, ethical and scientifically sound research."
          className="mb-12 lg:mb-16"
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {offer.map((o, i) => {
            const Icon = offerIcons[i];
            return (
              <li key={o.title} className="reveal">
                <a href={o.href} className="surface-interactive group flex h-full gap-5 p-6 md:flex-col md:gap-0 md:p-8">
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
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Vision, mission and values */}
      <VisionMissionValues />

      {/* Journey */}
      <Section labelledBy="journey-title">
        <SectionHeading
          id="journey-title"
          eyebrow="The research journey"
          title="Seven steps from a first idea to a research community."
          className="mb-14 lg:mb-20"
        />
        <Journey />
      </Section>

      {/* Academy */}
      <Section id="academy" tone="subtle" labelledBy="academy-title">
        <SectionHeading
          id="academy-title"
          layout="split"
          eyebrow="The Academy"
          title="A research curriculum, not a lecture series."
          description="Nine modules from research foundations to scientific writing and evidence synthesis. Methods are taught because a research question needs them, and each module ends in a real output."
          className="mb-12"
        />
        <Link
          href="/nexmeta"
          className="band group relative mb-8 flex flex-col gap-4 overflow-hidden rounded-lg p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div aria-hidden className="grid-lines absolute inset-0 opacity-40 [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
          <div className="relative">
            <p className="t-label flex items-center gap-2 text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Now enrolling
            </p>
            <p className="t-h3 mt-3 text-2xl">NexMeta: The Complete Science of Meta-Analysis</p>
            <p className="mt-1 text-sm text-fg-soft">3 modules · 12 lectures · final quiz · certificate</p>
          </div>
          <span className="relative inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-on">
            View course &amp; register <Arrow />
          </span>
        </Link>
        <CurriculumExplorer />
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 lg:flex-row lg:items-center lg:gap-10">
          <p className="t-label shrink-0">Capstone portfolio</p>
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium">
            {outputs.map((o, i) => (
              <li key={o} className="flex items-center gap-3">
                {o}
                {i < outputs.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-fg-mute" aria-hidden />}
              </li>
            ))}
          </ol>
        </div>
        <PendingNote title="Program delivery details are being finalized" className="mt-8 max-w-2xl bg-surface">
          Format, duration, fees and certification will be announced.{" "}
          <Link href="/?interest=academy#contact" className="font-medium text-accent underline-offset-4 hover:underline">
            Ask to be notified
          </Link>
          .
        </PendingNote>
      </Section>

      {/* Community */}
      <Section id="community" labelledBy="community-title">
        <SectionHeading
          id="community-title"
          layout="split"
          eyebrow="Research Community"
          title="Research doesn't stop after the Academy."
          description="The Academy builds the skills. The Community is where they are used: a structured network where a research idea can find its collaborators."
          action={
            <Button asChild>
              <Link href={communityCta.href}>
                Join the Community <Arrow />
              </Link>
            </Button>
          }
          className="mb-12"
        />
        <CommunityPrograms />
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Accordion
            summary={<span>Project roles in every Community project</span>}
            className="rounded-lg border border-line bg-surface px-5 py-4"
            panelClassName="pt-4"
          >
            <ProjectRoles />
            <p className="mt-3 text-xs text-fg-mute">Roles are provided under the mentorship program.</p>
          </Accordion>
          <Accordion
            summary={<span>Community guidelines</span>}
            className="rounded-lg border border-line bg-surface px-5 py-4"
            panelClassName="pt-4"
          >
            <ul className="list-disc space-y-2 pl-5 text-sm text-fg-soft">
              {communityGuidelines.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </Accordion>
        </div>
      </Section>

      {/* Workflow */}
      <Section id="workflow" tone="subtle" labelledBy="workflow-title">
        <SectionHeading
          id="workflow-title"
          layout="split"
          eyebrow="Research workflow"
          title="Ten phases, each with a defined output."
          description="Every Academy capstone and Community project follows the same lifecycle, with a quality check before work proceeds."
          className="mb-12"
        />
        <WorkflowExplorer />
        <Accordion
          summary={<span>Research quality and integrity</span>}
          className="mt-10 border-y border-line py-4"
          panelClassName="pt-5"
        >
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrityCommitments.map((c) => (
              <li key={c.title}>
                <p className="text-sm font-semibold">{c.title}</p>
                <p className="mt-0.5 text-sm text-fg-soft">{c.short}</p>
              </li>
            ))}
          </ul>
        </Accordion>
      </Section>

      {/* Who we serve */}
      <Section labelledBy="serve-title" size="compact">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
          <SectionHeading
            id="serve-title"
            eyebrow="Who we serve"
            title="Built for researchers across disciplines."
            description="One shared research process, with field-specific examples and specialist sessions where methods differ."
          />
          <Disciplines />
        </div>
      </Section>

      {/* Team */}
      <Section id="team" tone="subtle" labelledBy="team-title">
        <SectionHeading
          id="team-title"
          layout="split"
          eyebrow="Leadership"
          title="Research, teaching and technology."
          description="A multidisciplinary team, where every role exists to support research."
          className="mb-10 lg:mb-14"
        />
        <ul className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-8">
          {leaders.map((l) => (
            <li key={l.slug} className="reveal">
              <LeaderCard leader={l} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-title" className="band relative overflow-hidden py-24 lg:py-32">
        <div aria-hidden className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div className="container relative grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 id="contact-title" className="t-display mt-6 text-[2.5rem] sm:text-6xl">
              Have a research idea?
            </h2>
            <p className="t-lead mt-6 max-w-md">
              Ask about the Academy, join the Research Community or tell us about your idea.
            </p>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {[
                { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
                { label: "WhatsApp", value: site.whatsapp.display, href: site.whatsapp.link, icon: MessageCircle, external: true },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 py-4"
                  >
                    <c.icon className="h-[18px] w-[18px] shrink-0 text-fg-mute transition-colors group-hover:text-accent" aria-hidden />
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-fg-mute">{c.label}</span>
                      <span className="block break-all font-medium transition-colors group-hover:text-accent">{c.value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-fg-mute" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-medium text-fg-soft transition-colors hover:text-fg">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* The form keeps the light surface for legibility */}
          <div className="surface-light rounded-lg p-6 shadow-lg sm:p-10">
            <h3 className="t-h3 text-2xl">Send a message</h3>
            <p className="mt-2 text-sm text-fg-soft">
              Your message opens in your email app or WhatsApp, ready to send. Nothing is stored on this website.
            </p>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
