import type { Metadata } from "next";
import Image from "next/image";

import { Accordion } from "@/components/ui/accordion";
import { ArrowLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero, Section, Tag } from "@/components/site/primitives";
import { Initials } from "@/components/site/OrgBlocks";
import { CtaBand } from "@/components/site/CtaBand";
import { leaders, type Leader } from "@/content/team";
import { contributorRoles, functions, guidingPrinciple } from "@/content/organization";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The leadership and structure of Nexpage Research: Founder and CEO Muhammad Shamikh Shahid, Lead Mentor Muhammad Areeb Ul Haq and Co-founder and CTO Muhammad Umar Tariq.",
  alternates: { canonical: "/team" },
};

function Portrait({ leader, sizes, className, priority }: { leader: Leader; sizes: string; className?: string; priority?: boolean }) {
  return (
    <div className={className}>
      {leader.photo ? (
        <Image
          src={leader.photo.src}
          alt={`Portrait of ${leader.name}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-[50%_20%] transition-transform duration-500 ease-brand group-hover:scale-[1.03]"
        />
      ) : (
        <Initials name={leader.name} tone="band" className="absolute inset-0" />
      )}
    </div>
  );
}

/** Hero aside: jump straight to a profile. */
function ProfileIndex() {
  return (
    <nav aria-label="Leadership profiles" className="overflow-hidden rounded-lg border border-line bg-surface shadow-lg">
      <p className="t-label border-b border-line px-6 py-4">Leadership</p>
      <ul className="divide-y divide-line">
        {leaders.map((l) => (
          <li key={l.slug}>
            <a href={`#${l.slug}`} className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-subtle">
              <Portrait leader={l} sizes="48px" className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-subtle" />
              <span className="min-w-0 flex-1">
                <span className="block font-display font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {l.name}
                </span>
                <span className="block truncate text-sm text-fg-mute">{l.title}</span>
              </span>
              <span aria-hidden className="font-mono text-xs text-fg-mute transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Profile({ leader, index }: { leader: Leader; index: number }) {
  const [lead, ...more] = leader.bio;
  return (
    <article
      id={leader.slug}
      aria-labelledby={`${leader.slug}-name`}
      className="group grid scroll-mt-24 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[15rem_1fr] md:gap-12 lg:grid-cols-[19rem_1fr] lg:gap-16 lg:py-16"
    >
      {/* Portrait: compact on phones, full on larger screens */}
      <div className="flex items-center gap-4 md:block">
        <Portrait
          leader={leader}
          priority={index === 0}
          sizes="(min-width: 1024px) 304px, (min-width: 768px) 240px, 80px"
          className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-subtle md:sticky md:top-28 md:aspect-[4/5] md:h-auto md:w-full md:rounded-lg"
        />
        <div className="md:hidden">
          <p className="t-label text-[0.66rem]">{leader.title}</p>
          <p className="t-h3 mt-1 text-xl" aria-hidden>
            {leader.name}
          </p>
        </div>
      </div>

      <div className="min-w-0">
        <div className="hidden md:block">
          <p className="t-label">{leader.title}</p>
        </div>
        <h2 id={`${leader.slug}-name`} className="t-h2 sr-only mt-3 text-3xl md:not-sr-only md:block lg:text-[2.5rem]">
          {leader.name}
        </h2>
        <p className="t-lead mt-2 text-lg md:mt-5">{leader.summary}</p>

        <dl className="mt-8 divide-y divide-line border-y border-line">
          {leader.facts.map((f, i) => (
            <div key={i} className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="t-label pt-0.5">{f.label}</dt>
              <dd className="text-sm text-fg">{f.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas of responsibility">
          {leader.focus.map((f) => (
            <li key={f}>
              <Tag>{f}</Tag>
            </li>
          ))}
        </ul>

        {(more.length > 0 || lead.length > 180) && (
          <Accordion
            summary={<span>Read full biography</span>}
            className="mt-8 border-t border-line pt-4"
            panelClassName="space-y-4 pt-4 text-fg-soft"
          >
            {leader.bio.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </Accordion>
        )}
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Research, teaching and technology."
        lead="A multidisciplinary team, where every role exists to support research."
        aside={<ProfileIndex />}
      />

      <Section labelledBy="leaders-title">
        <h2 id="leaders-title" className="sr-only">
          Leadership
        </h2>
        <div className="divide-y divide-line">
          {leaders.map((l, i) => (
            <Profile key={l.slug} leader={l} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="subtle" labelledBy="structure-title">
        <SectionHeading
          id="structure-title"
          layout="split"
          eyebrow="Organizational structure"
          title="Four functions around a research core."
          description="Functions, not headcount: one person may contribute to more than one area."
          className="mb-12"
        />

        {/* Leadership node connected to the four functions */}
        <div className="relative">
          <div className="mx-auto w-fit rounded-md border border-line-strong bg-surface px-6 py-3 text-center shadow-sm">
            <p className="t-label">Leadership</p>
            <p className="mt-1 text-sm font-medium">Founder and CEO · strategy, academic direction and partnerships</p>
          </div>
          <div aria-hidden className="mx-auto h-8 w-px bg-line-strong" />
          <div aria-hidden className="mx-[12.5%] hidden h-px bg-line-strong lg:block" />
          <div aria-hidden className="hidden grid-cols-4 lg:grid">
            {functions.map((f) => (
              <span key={f.name} className="mx-auto h-6 w-px bg-line-strong" />
            ))}
          </div>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {functions.map((f) => (
            <li key={f.name} className="flex flex-col bg-surface p-6">
              <h3 className="t-h3">{f.name}</h3>
              <p className="mt-2 text-sm text-fg-soft">{f.scope}</p>
              <div className="mt-auto pt-6">
                <p className="t-label">Lead</p>
                {f.leads.length > 0 ? (
                  <ul className="mt-1.5 space-y-0.5 text-sm font-medium text-fg">
                    {f.leads.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1.5 text-sm text-fg-mute">To be appointed</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <p className="t-label">Guiding principle</p>
            <p className="mt-3 font-display text-xl font-medium leading-snug tracking-tight">{guidingPrinciple}</p>
            <ArrowLink href="/about#values" className="mt-6">
              Our core values
            </ArrowLink>
          </div>
          <Accordion
            summary={<span>How each type of contributor supports research</span>}
            className="self-start border-y border-line py-4"
            panelClassName="pt-4"
          >
            <dl className="divide-y divide-line">
              {contributorRoles.map((r) => (
                <div key={r.role} className="grid gap-1 py-3 md:grid-cols-[14rem_1fr] md:gap-6">
                  <dt className="text-sm font-medium">{r.role}</dt>
                  <dd className="text-sm text-fg-soft">{r.responsibilities}</dd>
                </div>
              ))}
            </dl>
          </Accordion>
        </div>
      </Section>

      <CtaBand showDirect />
    </>
  );
}
