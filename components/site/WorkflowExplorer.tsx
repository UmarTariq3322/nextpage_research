"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { workflow } from "@/content/community";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The ten-phase project lifecycle.
 * Desktop: a tabbed progress track with a detail panel.
 * Mobile: a compact vertical timeline.
 */
export function WorkflowExplorer() {
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const last = workflow.length - 1;

  const select = (i: number, focus = false) => {
    const next = Math.max(0, Math.min(last, i));
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: last };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  // Deep links such as /workflow#phase-4 select (and scroll to) that phase.
  React.useEffect(() => {
    const sync = () => {
      const match = window.location.hash.match(/^#phase-(\d+)$/);
      if (!match) return;
      const n = Number(match[1]);
      if (n < 1 || n > workflow.length) return;
      setActive(n - 1);
      const target = Array.from(document.querySelectorAll<HTMLElement>(`[data-phase="${n}"]`)).find((el) => el.offsetParent !== null);
      target?.scrollIntoView({ block: "center" });
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const p = workflow[active];

  return (
    <>
      {/* Desktop: tabs */}
      <div className="hidden lg:block">
        <div className="relative">
          <span aria-hidden className="absolute left-5 right-5 top-5 h-px bg-line" />
          <span
            aria-hidden
            className="absolute left-5 top-5 h-px origin-left bg-accent transition-transform duration-500 ease-brand"
            style={{ width: "calc(100% - 2.5rem)", transform: `scaleX(${active / last})` }}
          />
          <div role="tablist" aria-label="Project phases" className="relative grid grid-cols-10" onKeyDown={onKeyDown}>
            {workflow.map((s, i) => {
              const selected = i === active;
              const reached = i <= active;
              return (
                <button
                  key={s.n}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  data-phase={s.n}
                  id={`phase-tab-${s.n}`}
                  aria-selected={selected}
                  aria-controls={`phase-panel-${s.n}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(i)}
                  onMouseEnter={() => select(i)}
                  className="group flex flex-col items-center rounded-md pb-2 text-center focus-visible:ring-offset-paper"
                >
                  <span
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-full border font-mono text-xs transition-[background-color,border-color,color,transform] duration-200 ease-brand",
                      selected
                        ? "scale-110 border-accent bg-accent text-accent-on"
                        : reached
                          ? "border-accent bg-paper text-accent"
                          : "border-line-strong bg-paper text-fg-mute group-hover:border-fg-mute group-hover:text-fg"
                    )}
                  >
                    {pad(s.n)}
                  </span>
                  <span className={cn("mt-3 px-1 text-sm font-medium transition-colors", selected ? "text-fg" : "text-fg-soft")}>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {workflow.map((s, i) => (
          <div
            key={s.n}
            role="tabpanel"
            id={`phase-panel-${s.n}`}
            aria-labelledby={`phase-tab-${s.n}`}
            hidden={i !== active}
            className="mt-10"
          >
            <div className="grid overflow-hidden rounded-lg border border-line bg-surface lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
              <div className="p-8">
                <p className="font-mono text-xs text-accent">Phase {pad(s.n)} of {workflow.length}</p>
                <h3 className="t-h2 mt-3 text-3xl">{s.title}</h3>
                <p className="mt-3 text-fg-soft">{s.activities}</p>
              </div>
              <Detail label="Output">{s.output}</Detail>
              <Detail label="Responsible">{s.responsible}</Detail>
              <Detail label="Quality check" accent>
                {s.check}
              </Detail>
            </div>
          </div>
        ))}

        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => select(active - 1)}
            disabled={active === 0}
            className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-fg-soft transition-colors hover:text-fg disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Previous
          </button>
          <p className="font-mono text-xs text-fg-mute" aria-live="polite">
            {pad(p.n)} / {workflow.length}
          </p>
          <button
            type="button"
            onClick={() => select(active + 1)}
            disabled={active === last}
            className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-fg-soft transition-colors hover:text-fg disabled:opacity-30"
          >
            Next <ArrowRight className="arrow-nudge h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <ol className="relative lg:hidden">
        <span aria-hidden className="draw-y absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-line-strong via-accent/60 to-accent" />
        {workflow.map((s) => (
          <li key={s.n} data-phase={s.n} className="relative scroll-mt-24 pb-8 pl-14 last:pb-0">
            <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-paper font-mono text-xs text-fg">
              {pad(s.n)}
            </span>
            <h3 className="t-h3 pt-2 text-lg">{s.title}</h3>
            <p className="mt-1 text-sm text-fg-soft">{s.activities}</p>
            <dl className="mt-3 space-y-1 text-sm">
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-fg-mute">Output</dt>
                <dd className="text-fg">{s.output}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-fg-mute">Responsible</dt>
                <dd className="text-fg">{s.responsible}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 text-fg-mute">Check</dt>
                <dd className="text-fg">{s.check}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </>
  );
}

function Detail({ label, children, accent = false }: { label: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <div className={cn("border-l border-line p-8", accent && "bg-accent-soft/50")}>
      <p className={cn("t-label flex items-center gap-1.5", accent && "text-accent")}>
        {accent && <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />}
        {label}
      </p>
      <p className="mt-4 font-display text-lg font-medium leading-snug tracking-tight text-fg">{children}</p>
    </div>
  );
}
