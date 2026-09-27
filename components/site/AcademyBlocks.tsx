import { capstone, designPrinciples, progressionLevels, teachingCycle } from "@/content/academy";
import { cn } from "@/lib/utils";

/** Handbook 4.4 — the eight-step teaching cycle as a connected track. */
export function TeachingCycle() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {teachingCycle.map((s) => {
        const pending = "status" in s;
        return (
          <li key={s.step} className={cn("group relative bg-surface p-6 transition-colors hover:bg-subtle", pending && "bg-subtle/60")}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">{String(s.step).padStart(2, "0")}</span>
              <span aria-hidden className="h-px flex-1 bg-line transition-colors group-hover:bg-accent/40" />
            </div>
            <h3 className="t-h3 mt-5 text-base">{s.title}</h3>
            <p className="mt-1 text-sm text-fg-soft">{s.description}</p>
            {pending && (
              <span className="mt-3 inline-block rounded-sm border border-dashed border-line-strong px-2 py-0.5 text-[0.7rem] font-medium text-fg-mute">
                {s.status}
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/** Handbook 4.2 — principles as compact typographic statements. */
export function DesignPrinciples() {
  return (
    <ol className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-5">
      {designPrinciples.map((p, i) => (
        <li key={p.title} className="reveal border-t border-line py-6">
          <span className="font-mono text-xs text-fg-mute">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="t-h3 mt-3 text-base">{p.title}</h3>
          <p className="mt-1 text-sm text-fg-soft">{p.short}</p>
        </li>
      ))}
    </ol>
  );
}

/** Handbook 6.2 — the capstone portfolio as a document-building sequence. */
export function CapstonePath() {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {capstone.map((c, i) => (
        <li key={c.title} className="reveal surface-interactive relative flex min-h-[9.5rem] flex-col p-5">
          <span aria-hidden className="absolute right-0 top-0 h-4 w-4 rounded-bl-sm border-b border-l border-line bg-subtle" />
          <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="t-h3 mt-4 text-[0.95rem]">{c.title}</h3>
          <p className="mt-auto pt-3 font-mono text-[0.68rem] text-fg-mute">{c.modules}</p>
        </li>
      ))}
    </ol>
  );
}

/** Handbook 6.1 — five levels drawn as a rising scale. */
export function ProgressionLevels() {
  return (
    <ol className="grid gap-3 lg:grid-cols-5 lg:items-end">
      {progressionLevels.map((l) => (
        <li
          key={l.level}
          className="reveal flex flex-col rounded-lg border border-line bg-surface p-5 lg:[min-height:var(--h)]"
          style={{ ["--h" as string]: `${9 + l.level * 1.5}rem` }}
        >
          <div className="flex items-center gap-1" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={cn("h-1 flex-1 rounded-full", i < l.level ? "bg-accent" : "bg-line")} />
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-fg-mute">Level {l.level}</p>
          <h3 className="t-h3 mt-1">{l.title}</h3>
          <p className="mt-auto pt-3 text-sm text-fg-soft">{l.capability}</p>
        </li>
      ))}
    </ol>
  );
}
