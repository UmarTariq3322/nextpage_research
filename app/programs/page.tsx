import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Users,
  GraduationCap,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Award,
  BookOpen,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Research Programs",
  description:
    "Structured, mentored research programs at Nexpage Research: Research Foundations, AI Research Program, and Systematic Review & Meta-Analysis programs.",
  alternates: {
    canonical: "/programs",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-brand bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <div className="container">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-5">
              Research Programs
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Structured, mentored programs that turn you into a{" "}
              <span className="bg-gradient-to-br from-brand-600 to-brand-500 bg-clip-text text-transparent">
                published researcher.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Choose the program that matches your goals and experience level.
              All programs are mentored, project-based, and designed around
              real, credible research outputs.
            </p>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                { Icon: GraduationCap, label: "Expert Mentors" },
                { Icon: Target, label: "Project-based" },
                { Icon: Award, label: "Certificate of Completion" },
              ].map(({ Icon, label }) => (
                <Card key={label} className="p-4 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-ink-900">{label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20 pb-20 lg:pb-24">
        {programs.map((program, i) => (
          <section
            key={program.id}
            id={program.slug}
            className="container scroll-mt-24"
          >
            <div className="overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-sm">
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-8 text-white sm:p-10 lg:col-span-5 lg:p-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="bg-white/15 text-white border-0">
                      {program.level}
                    </Badge>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                      <Clock className="h-3.5 w-3.5" />
                      {program.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                      <Users className="h-3.5 w-3.5" />
                      {program.format}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                    {program.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-50/90">
                    {program.description}
                  </p>
                  <div className="mt-8 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      Learning Outcomes
                    </p>
                    <ul className="mt-3 space-y-2">
                      {program.learningOutcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 text-sm text-white/95"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-200" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-brand-700 hover:bg-brand-50"
                    >
                      <Link href="/contact">
                        Apply to this program
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white/30 bg-white/10 text-white hover:bg-white/15"
                    >
                      <Link href="/contact">Ask a question</Link>
                    </Button>
                  </div>
                </div>

                <div className="p-8 sm:p-10 lg:col-span-7 lg:p-10 space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900 flex items-center gap-2">
                      <BookOpen className="h-4.5 w-4.5 text-brand-600" />
                      Curriculum · Topics
                    </h3>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {program.topics.map((topic, idx) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2.5 rounded-xl border border-ink-100 bg-ink-50/40 p-3.5"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand-50 text-[10px] font-bold text-brand-700">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-ink-800">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <HelpCircle className="h-4.5 w-4.5 text-brand-600" />
                      <h3 className="text-lg font-semibold text-ink-900">
                        Frequently asked questions
                      </h3>
                    </div>
                    <div className="mt-4 grid gap-3">
                      {program.faq.map((qa) => (
                        <details
                          key={qa.question}
                          className="group rounded-2xl border border-ink-200 bg-white p-5 open:bg-ink-50/40 transition-colors"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink-900">
                            <span>{qa.question}</span>
                            <span className="grid h-7 w-7 place-items-center rounded-lg border border-ink-200 bg-white text-ink-500 transition-transform group-open:rotate-180">
                              <ArrowRight className="h-3.5 w-3.5 -rotate-90" />
                            </span>
                          </summary>
                          <p className="mt-3 text-sm leading-relaxed text-ink-600">
                            {qa.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="pb-20 lg:pb-28">
        <div className="container">
          <div className="overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-10 sm:p-14 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700">
                <Sparkles className="h-3.5 w-3.5" />
                Ready to start?
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
                Choose the right program and build real research.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
                Applications are reviewed on a rolling basis. Reach out and
                we'll help you pick the right program for your background and
                goals.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Apply now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Talk to program advisor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
