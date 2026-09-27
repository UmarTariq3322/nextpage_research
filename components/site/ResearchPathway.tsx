"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const stages = [
  { label: "Research question", meta: "PICO · PECO", note: "Turn a problem into a focused, answerable question." },
  { label: "Evidence", meta: "PubMed · PRISMA", note: "Search, screen and appraise what is already known." },
  { label: "Analysis", meta: "R · RStudio", note: "Reproducible analysis, from clean data to interpretation.", chart: true },
  { label: "Manuscript", meta: "IMRaD · guidelines", note: "Write to the reporting guideline for the design." },
  { label: "Publication", meta: "journal selection", note: "Choose a legitimate journal, submit and revise." },
  { label: "Research community", meta: "peer review", note: "Keep collaborating on the next project.", network: true },
] as const;

/** Tiny illustrative forest plot, a motif and not real data. */
function ForestMini() {
  const rows = [
    [30, 22],
    [22, 34],
    [38, 14],
  ];
  return (
    <svg viewBox="0 0 64 28" className="h-7 w-16 shrink-0" aria-hidden>
      <line x1="32" y1="0" x2="32" y2="28" className="stroke-line-strong" strokeDasharray="2 2" />
      {rows.map(([x, w], i) => (
        <g key={i}>
          <line x1={x - w / 2} x2={x + w / 2} y1={5 + i * 8} y2={5 + i * 8} className="stroke-fg-mute" strokeWidth="1" />
          <rect x={x - 1.75} y={3.25 + i * 8} width="3.5" height="3.5" className="fill-fg-soft" />
        </g>
      ))}
    </svg>
  );
}

function NetworkMini() {
  const pts = [
    [8, 14],
    [24, 5],
    [26, 22],
    [42, 12],
    [56, 20],
    [54, 4],
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
  ];
  return (
    <svg viewBox="0 0 64 28" className="h-7 w-16 shrink-0" aria-hidden>
      {edges.map(([a, b], i) => (
        <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} className="stroke-accent/50" strokeWidth="1" />
      ))}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 3 : 2.2} className={i === 3 ? "fill-accent" : "fill-fg-mute"} />
      ))}
    </svg>
  );
}

/**
 * Hero composition: the research pathway. Gently steps through each stage
 * (paused on hover/focus, off for reduced motion) so the progression reads
 * at a glance; hovering a stage selects it.
 */
export function ResearchPathway({ className }: { className?: string }) {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % stages.length), 2600);
    return () => clearInterval(t);
  }, [paused]);

  const progress = active / (stages.length - 1);

  return (
    <figure
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-lg border border-line bg-surface shadow-lg">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5 sm:px-6">
          <span className="t-label">Research pathway</span>
          <span className="font-mono text-[0.7rem] text-fg-mute">
            {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
          </span>
        </div>

        <ol className="relative px-4 py-3 sm:px-6 sm:py-4">
          {/* track + progress */}
          <span aria-hidden className="absolute bottom-8 left-[27px] top-8 w-px bg-line sm:left-[35px]" />
          <span
            aria-hidden
            className="absolute left-[27px] top-8 w-px origin-top bg-accent transition-transform duration-700 ease-brand sm:left-[35px]"
            style={{ height: "calc(100% - 4rem)", transform: `scaleY(${progress})` }}
          />
          {stages.map((s, i) => {
            const isActive = i === active;
            const reached = i <= active;
            return (
              <li
                key={s.label}
                className="relative flex items-center gap-3 py-1 sm:gap-4 sm:py-1.5"
                onMouseEnter={() => setActive(i)}
              >
                <span
                  className={cn(
                    "relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full border font-mono text-[0.62rem] transition-[background-color,border-color,color,transform] duration-300",
                    isActive
                      ? "scale-110 border-accent bg-accent text-accent-on"
                      : reached
                        ? "border-accent bg-surface text-accent"
                        : "border-line-strong bg-surface text-fg-mute"
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "flex min-w-0 flex-1 items-center justify-between gap-3 rounded-md border px-3 py-2 transition-colors duration-300",
                    isActive ? "border-line bg-subtle" : "border-transparent"
                  )}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-display text-[0.95rem] font-semibold text-fg">{s.label}</span>
                    <span className={cn("block truncate font-mono text-[0.68rem] transition-colors", isActive ? "text-accent" : "text-fg-mute")}>
                      {s.meta}
                    </span>
                  </span>
                  {"chart" in s && <ForestMini />}
                  {"network" in s && <NetworkMini />}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="border-t border-line bg-subtle/60 px-5 py-3.5 sm:px-6">
          <p key={active} className="animate-[reveal_400ms_ease-out] text-sm text-fg-soft">
            {stages[active].note}
          </p>
        </div>
      </div>
      <figcaption className="sr-only">
        The research pathway: research question, evidence, analysis, manuscript, publication and research community.
      </figcaption>
    </figure>
  );
}
