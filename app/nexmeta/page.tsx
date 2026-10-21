import type { Metadata } from "next";
import { Award, ClipboardCheck, Fingerprint, LogIn, Trophy } from "lucide-react";

import { Arrow, Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading, SectionLabel } from "@/components/ui/section-heading";
import { Section } from "@/components/site/primitives";
import { RegistrationForm } from "@/components/nexmeta/RegistrationForm";
import { assessment, course, courseModules, formatPKR, pricing, type PackageKey } from "@/content/nexmeta";

export const metadata: Metadata = {
  title: "NexMeta: The Complete Science of Meta-Analysis",
  description:
    "Register for NexMeta by Nexpage Research: a three-module course on systematic reviews and meta-analysis, from topic selection and search strategy to analysis in R, GRADE and manuscript writing.",
  alternates: { canonical: "/nexmeta" },
};

const lectureCount = 12;
const packages: PackageKey[] = ["full", "m1", "m2", "m3"];
const assessmentIcons = [ClipboardCheck, Fingerprint, LogIn, Trophy, Award];

export default function NexMetaPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_30%,black_10%,transparent_70%)]" />
        <div className="container relative grid items-end gap-12 pb-16 pt-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:pb-24 lg:pt-20">
          <div>
            <SectionLabel>Nexpage Research · Course</SectionLabel>
            <h1 className="t-display mt-6">
              {course.name}
              <span className="mt-2 block text-[0.55em] leading-tight text-fg-soft">{course.title}</span>
            </h1>
            <p className="t-lead mt-6 max-w-xl">{course.summary}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#register">
                  Register now <Arrow />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#curriculum">See the curriculum</a>
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {[
              { v: courseModules.length, l: "Modules" },
              { v: lectureCount, l: "Lectures" },
              { v: "Quiz", l: "With your own student ID" },
              { v: "Certificate", l: "On completion" },
            ].map((s) => (
              <div key={s.l} className="bg-surface p-5 sm:p-6">
                <dt className="sr-only">{s.l}</dt>
                <dd>
                  <span className="block font-display text-2xl font-semibold tracking-tight sm:text-3xl">{s.v}</span>
                  <span className="mt-1 block text-sm text-fg-soft">{s.l}</span>
                </dd>
              </div>
            ))}
            <div className="col-span-2 bg-surface p-5 sm:p-6">
              <dt className="sr-only">Price</dt>
              <dd className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm text-fg-soft">Full course from</span>
                <span className="font-display text-2xl font-semibold tracking-tight">
                  {formatPKR(pricing.full.ambassador)}{" "}
                  <span className="text-sm font-normal text-fg-mute">with ambassador code</span>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Curriculum */}
      <Section id="curriculum" labelledBy="curriculum-title" className="scroll-mt-20">
        <SectionHeading
          id="curriculum-title"
          layout="split"
          eyebrow="Curriculum"
          title="Three modules, twelve lectures."
          description="From your first search string to a submission-ready manuscript. Open a lecture to see what it covers."
          className="mb-12"
        />
        <ol className="grid gap-5 lg:grid-cols-3">
          {courseModules.map((m) => (
            <li key={m.id} className="flex flex-col rounded-lg border border-line bg-surface">
              <div className="border-b border-line p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">Module {m.number}</span>
                  <span className="text-sm text-fg-mute">
                    {formatPKR(pricing[m.id].price)} · <span className="text-fg-soft">{formatPKR(pricing[m.id].ambassador)} with code</span>
                  </span>
                </div>
                <h3 className="t-h3 mt-3 text-2xl">{m.title}</h3>
              </div>
              <ol className="divide-y divide-line px-6">
                {m.lectures.map((l) => {
                  const head = (
                    <span className="flex flex-1 items-baseline gap-3 text-left">
                      <span className="w-10 shrink-0 font-mono text-xs text-fg-mute">L{l.n}</span>
                      <span className="flex-1">
                        <span className="block text-sm font-medium text-fg">{l.title}</span>
                        <span className="block text-xs font-normal text-fg-mute">{l.instructor}</span>
                      </span>
                    </span>
                  );
                  return (
                    <li key={l.n} className="py-3.5">
                      {l.topics ? (
                        <Accordion summary={head} panelClassName="pl-[3.25rem] pt-3">
                          <ul className="space-y-1.5">
                            {l.topics.map((t) => (
                              <li key={t} className="flex gap-2.5 text-sm text-fg-soft">
                                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </Accordion>
                      ) : (
                        <div className="pr-11">{head}</div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>
          ))}
        </ol>
      </Section>

      {/* Assessment and certificate */}
      <Section tone="band" size="compact" labelledBy="assess-title">
        <div className="grid gap-10">
          <SectionHeading id="assess-title" eyebrow="Assessment" title="A final quiz, then your certificate." />
          <ol className="grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-5">
            {assessment.map((a, i) => {
              const Icon = assessmentIcons[i];
              return (
                <li key={a} className="bg-paper p-5">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                  <p className="mt-4 text-sm">{a}.</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* Pricing */}
      <Section labelledBy="pricing-title" size="compact">
        <SectionHeading
          id="pricing-title"
          layout="split"
          eyebrow="Pricing"
          title="Take the full course or a single module."
          description="Prices are in Pakistani rupees. An ambassador code lowers the price of any package."
          className="mb-10"
        />
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">NexMeta prices</caption>
            <thead className="bg-subtle text-xs uppercase tracking-wider text-fg-mute">
              <tr>
                <th scope="col" className="px-5 py-3 font-medium">
                  Package
                </th>
                <th scope="col" className="px-5 py-3 text-right font-medium">
                  Price
                </th>
                <th scope="col" className="px-5 py-3 text-right font-medium">
                  With code
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-surface">
              {packages.map((k) => (
                <tr key={k} className={k === "full" ? "bg-accent-soft/40" : undefined}>
                  <th scope="row" className="px-5 py-4 font-normal">
                    <span className="block font-medium text-fg">{pricing[k].label}</span>
                    <span className="block text-xs text-fg-mute">{pricing[k].detail}</span>
                  </th>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-medium">{formatPKR(pricing[k].price)}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-accent">{formatPKR(pricing[k].ambassador)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Registration */}
      <Section id="register" tone="subtle" labelledBy="register-title" className="scroll-mt-20">
        <SectionHeading
          id="register-title"
          eyebrow="Registration"
          title="Register for NexMeta."
          description="It takes about three minutes. Have your payment screenshot ready."
          className="mb-12"
        />
        <RegistrationForm />
      </Section>
    </>
  );
}
