"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Arrow } from "@/components/ui/button";
import { Tag } from "@/components/site/primitives";
import { modules } from "@/content/curriculum";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");
const href = (code: string) => `/curriculum#module-${code.toLowerCase()}`;

/**
 * Homepage curriculum overview.
 * Desktop: module list (tabs) with a detail panel for the selected module.
 * Mobile: a compact linked list.
 */
export function CurriculumExplorer() {
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const m = modules[active];
  const last = modules.length - 1;

  const onKeyDown = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = { ArrowDown: active + 1, ArrowUp: active - 1, Home: 0, End: last };
    if (!(e.key in map)) return;
    e.preventDefault();
    const next = Math.max(0, Math.min(last, map[e.key]));
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-hidden rounded-lg border border-line bg-surface shadow-md lg:grid lg:grid-cols-[22rem_1fr]">
        <div role="tablist" aria-label="Curriculum modules" aria-orientation="vertical" onKeyDown={onKeyDown} className="border-r border-line p-2">
          {modules.map((mod, i) => {
            const selected = i === active;
            return (
              <button
                key={mod.code}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`cx-tab-${mod.code}`}
                aria-selected={selected}
                aria-controls={`cx-panel-${mod.code}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "relative flex w-full items-center gap-4 rounded-md px-4 py-2.5 text-left transition-colors duration-200",
                  selected ? "bg-subtle" : "hover:bg-subtle/60"
                )}
              >
                <span
                  aria-hidden
                  className={cn("absolute inset-y-2 left-0 w-0.5 rounded-full transition-colors", selected ? "bg-accent" : "bg-transparent")}
                />
                <span className={cn("font-mono text-xs transition-colors", selected ? "text-accent" : "text-fg-mute")}>{pad(i + 1)}</span>
                <span className={cn("text-sm font-medium transition-colors", selected ? "text-fg" : "text-fg-soft")}>{mod.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {modules.map((mod, i) => (
          <div
            key={mod.code}
            role="tabpanel"
            id={`cx-panel-${mod.code}`}
            aria-labelledby={`cx-tab-${mod.code}`}
            hidden={i !== active}
            className="relative flex-col p-10 [&:not([hidden])]:flex"
          >
            <div className="relative flex items-center justify-between">
              <span className="font-mono text-xs text-fg-mute">
                Module {pad(i + 1)} of {modules.length}
              </span>
              <span className="flex gap-2">
                {mod.stage === "Throughout" && <Tag tone="accent">Runs throughout</Tag>}
                <Tag>{mod.level}</Tag>
              </span>
            </div>

            {/* position along the path */}
            <div className="relative mt-5 flex gap-1" aria-hidden>
              {modules.map((x, j) => (
                <span key={x.code} className={cn("h-1 flex-1 rounded-full transition-colors duration-300", j <= active ? "bg-accent" : "bg-line")} />
              ))}
            </div>

            <h3 className="t-h2 relative mt-10 text-[2rem]">{mod.title}</h3>
            <p className="t-lead relative mb-10 mt-3 max-w-lg text-lg">{mod.oneLiner}</p>

            <dl className="relative mt-auto grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <dt className="t-label">Core outcome</dt>
                <dd className="mt-2 text-sm text-fg">{mod.outcome}</dd>
              </div>
              <div>
                <dt className="t-label">You produce</dt>
                <dd className="mt-2 text-sm font-medium text-fg">{mod.deliverable}</dd>
              </div>
            </dl>
            <div className="relative mt-6 flex items-center justify-between">
              <span className="text-sm text-fg-mute">{mod.topics.length} topics</span>
              <Link href={href(mod.code)} className="group inline-flex items-center gap-1.5 py-1.5 text-sm font-medium text-accent hover:text-accent-strong">
                View module details <Arrow />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / tablet */}
      <ol className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface lg:hidden">
        {modules.map((mod, i) => (
          <li key={mod.code}>
            <Link href={href(mod.code)} className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-subtle">
              <span className="font-mono text-xs text-accent">{pad(i + 1)}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-display font-semibold tracking-tight text-fg">{mod.title}</span>
                <span className="mt-0.5 block text-xs text-fg-mute">{mod.level}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-fg-mute transition-colors group-hover:text-accent" aria-hidden />
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
