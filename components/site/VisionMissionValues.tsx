"use client";

import {
  Compass,
  Target,
  FlaskConical,
  CheckCircle2,
  ShieldCheck,
  Repeat,
  Lightbulb,
  PenLine,
  Network,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/site/primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { coreValues } from "@/content/organization";
import { cn } from "@/lib/utils";

// Value-specific visual configuration
const valueIcons = [
  FlaskConical,
  CheckCircle2,
  ShieldCheck,
  Repeat,
  Lightbulb,
  PenLine,
  Network,
];

const visionPillars = [
  { label: "Multidisciplinary", desc: "Cross-field collaboration" },
  { label: "Talent Matchmaking", desc: "Statisticians, writers, coders" },
  { label: "Published Evidence", desc: "From idea to journal paper" },
];

const missionPillars = [
  { label: "Methodological Rigor", desc: "Evidence-based inquiry" },
  { label: "Ethical Standards", desc: "Honest authorship & citation" },
  { label: "Real-World Projects", desc: "Hands-on execution" },
];

export function VisionMissionValues() {
  const [primaryValue, ...otherValues] = coreValues;

  return (
    <Section tone="band" id="principles" labelledBy="principles-heading">
      {/* Section Header */}
      <SectionHeading
        id="principles-heading"
        eyebrow="Purpose & Principles"
        title="Guided by vision. Grounded in rigor."
        description="Our mission is to turn student inquiry into publishable evidence through disciplined methodology, ethical authorship, and multidisciplinary teamwork."
        layout="split"
        className="mb-14 lg:mb-18"
      />

      {/* Vision & Mission Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Vision Card */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/50 p-7 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-surface/80 sm:p-9">
          {/* Subtle ambient corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          />

          <div>
            {/* Header / Badge */}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/30 transition-transform duration-300 group-hover:scale-105">
                <Compass className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  Our Vision
                </span>
                <p className="text-xs text-fg-mute">Where we are headed</p>
              </div>
            </div>

            {/* Core Statement */}
            <div className="mt-6">
              <h3 className="font-display text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                A Multidisciplinary Research Community
              </h3>
              <p className="mt-3.5 text-base leading-relaxed text-fg-soft">
                To grow beyond an academy into a vibrant collaborative community where a student with an idea can connect with the{" "}
                <span className="font-medium text-fg">statistician, programmer, writer, or fellow researcher</span>{" "}
                needed to turn that idea into published evidence.
              </p>
            </div>
          </div>

          {/* Scannable Takeaways / Pillars */}
          <div className="mt-8 border-t border-line/70 pt-6">
            <span className="t-label block text-[0.68rem] text-fg-mute">Key Pillars</span>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
              {visionPillars.map((p) => (
                <div
                  key={p.label}
                  className="rounded-lg border border-line/60 bg-paper/40 p-3 transition-colors group-hover:border-line"
                >
                  <p className="text-xs font-semibold text-fg">{p.label}</p>
                  <p className="mt-0.5 text-[0.7rem] text-fg-mute leading-tight">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/50 p-7 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-surface/80 sm:p-9">
          {/* Subtle ambient corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          />

          <div>
            {/* Header / Badge */}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/30 transition-transform duration-300 group-hover:scale-105">
                <Target className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  Our Mission
                </span>
                <p className="text-xs text-fg-mute">What we do every day</p>
              </div>
            </div>

            {/* Core Statement */}
            <div className="mt-6">
              <h3 className="font-display text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                Rigor & Practical Execution in Every Field
              </h3>
              <p className="mt-3.5 text-base leading-relaxed text-fg-soft">
                To teach students from every academic discipline how to conduct{" "}
                <span className="font-medium text-fg">meaningful, ethical, and scientifically sound research</span>,
                and to provide a structured community in which to apply those skills to real, tangible projects.
              </p>
            </div>
          </div>

          {/* Scannable Takeaways / Pillars */}
          <div className="mt-8 border-t border-line/70 pt-6">
            <span className="t-label block text-[0.68rem] text-fg-mute">Core Commitments</span>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
              {missionPillars.map((p) => (
                <div
                  key={p.label}
                  className="rounded-lg border border-line/60 bg-paper/40 p-3 transition-colors group-hover:border-line"
                >
                  <p className="text-xs font-semibold text-fg">{p.label}</p>
                  <p className="mt-0.5 text-[0.7rem] text-fg-mute leading-tight">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Sub-section */}
      <div className="mt-16 sm:mt-20">
        <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <p className="t-label text-accent">Core Values</p>
            </div>
            <h3 className="t-h2 mt-2 text-2xl sm:text-3xl">
              Seven principles that guide our work
            </h3>
          </div>
          <p className="max-w-md text-sm text-fg-soft sm:text-right">
            Non-negotiable ethical and methodological standards applied to every course, project, and manuscript.
          </p>
        </div>

        {/* 8-Slot Balanced Bento Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* 01 · Research First (Featured Card spanning 2 columns) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-accent/40 bg-gradient-to-br from-accent-soft/30 via-surface to-surface p-6 transition-all duration-300 hover:border-accent hover:shadow-md sm:col-span-2 lg:col-span-2">
            <div aria-hidden className="grid-lines absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-on shadow-sm">
                    <FlaskConical className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                    01 · The Foundational Principle
                  </span>
                </div>
                <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[0.7rem] font-semibold text-accent">
                  Core Anchor
                </span>
              </div>

              <h4 className="font-display mt-4 text-xl font-bold tracking-tight text-fg sm:text-2xl">
                {primaryValue.title}
              </h4>
              <p className="mt-1.5 text-sm font-semibold text-accent">
                {primaryValue.short}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-fg-soft">
                {primaryValue.description}
              </p>
            </div>

            <div className="relative mt-5 flex flex-wrap items-center gap-2 border-t border-line/60 pt-4">
              <span className="text-[0.72rem] text-fg-mute font-medium">Standards:</span>
              <span className="rounded bg-paper/80 px-2 py-0.5 text-[0.7rem] font-medium text-fg border border-line/50">Question-driven</span>
              <span className="rounded bg-paper/80 px-2 py-0.5 text-[0.7rem] font-medium text-fg border border-line/50">Tools serve inquiry</span>
              <span className="rounded bg-paper/80 px-2 py-0.5 text-[0.7rem] font-medium text-fg border border-line/50">Rigorous quality</span>
            </div>
          </div>

          {/* 02 - 07 · Other 6 Values (1 column each, filling perfectly 2x4 = 8 slots) */}
          {otherValues.map((v, i) => {
            const Icon = valueIcons[i + 1] || CheckCircle2;
            const indexNumber = String(i + 2).padStart(2, "0");

            return (
              <div
                key={v.title}
                className="group relative flex flex-col justify-between rounded-xl border border-line bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {indexNumber}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-subtle text-fg-soft transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                  </div>

                  <h4 className="font-display mt-3 text-base font-bold tracking-tight text-fg group-hover:text-accent transition-colors">
                    {v.title}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-accent/90 leading-snug">
                    {v.short}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-fg-soft">
                    {v.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-line/40 flex items-center justify-between text-[0.7rem] text-fg-mute">
                  <span>Principle {indexNumber}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
