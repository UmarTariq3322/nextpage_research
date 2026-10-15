import Image from "next/image";

import { Accordion } from "@/components/ui/accordion";
import { Tag } from "@/components/site/primitives";
import { acrossDisciplines, advantages, coreValues, disciplines } from "@/content/organization";
import type { Leader } from "@/content/team";
import { cn } from "@/lib/utils";

/** Handbook 1.4 — strengths as an editorial numbered list. */
export function AdvantageList() {
  return (
    <ol className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
      {advantages.map((a, i) => (
        <li key={a.title} className="reveal border-t border-line py-5 sm:py-7">
          <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="t-h3 mt-3 text-xl">{a.title}</h3>
          <p className="mt-2 text-sm text-fg-soft">{a.description}</p>
        </li>
      ))}
    </ol>
  );
}

/** Handbook 1.2 — disciplines as a typographic index. */
export function Disciplines() {
  return (
    <ul className="grid grid-cols-2 border-t border-line sm:grid-cols-3">
      {disciplines.map((d, i) => (
        <li
          key={d}
          className="group flex items-baseline gap-3 border-b border-line py-3.5 pr-4 transition-colors"
        >
          <span className="font-mono text-[0.7rem] text-fg-mute transition-colors group-hover:text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-[0.98rem] font-medium tracking-tight text-fg">{d}</span>
        </li>
      ))}
    </ul>
  );
}

/** Handbook 2.3 — seven core values; the first is given the most weight. */
export function CoreValues() {
  const [first, ...rest] = coreValues;
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
      <div className="band relative flex flex-col justify-between overflow-hidden rounded-lg p-7 sm:p-8">
        <div aria-hidden className="grid-lines absolute inset-0 opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <span className="relative font-mono text-xs text-accent">01 · The core value</span>
        <div className="relative mt-10 lg:mt-16">
          <h3 className="t-h2 text-3xl">{first.title}</h3>
          <p className="mt-3 text-fg-soft">{first.description}</p>
        </div>
      </div>
      <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-3">
        {rest.map((v, i) => (
          <li key={v.title} className="bg-surface p-5 transition-colors hover:bg-subtle sm:p-6">
            <span className="font-mono text-xs text-fg-mute">{String(i + 2).padStart(2, "0")}</span>
            <h3 className="t-h3 mt-4 text-base sm:mt-6 sm:text-lg">{v.title}</h3>
            <p className="mt-1.5 text-sm text-fg-soft">{v.short}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Initials({ name, className, tone = "subtle" }: { name: string; className?: string; tone?: "subtle" | "band" }) {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 2)
    .map((w) => w[0])
    .slice(-2)
    .join("");
  if (tone === "band") {
    return (
      <div className={cn("band grid place-items-center overflow-hidden", className)} aria-hidden>
        <div className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(circle,black,transparent_75%)]" />
        <span className="relative font-display text-[clamp(1.25rem,6vw,4.5rem)] font-semibold tracking-tight text-fg">{initials}</span>
      </div>
    );
  }
  return (
    <div className={cn("grid-lines grid place-items-center bg-subtle", className)} aria-hidden>
      <span className="grid h-[42%] max-h-24 w-auto aspect-square place-items-center rounded-full border border-line-strong bg-surface font-display text-lg font-semibold tracking-tight text-fg-soft sm:text-3xl">
        {initials}
      </span>
    </div>
  );
}

/**
 * Leader card for the one-page site: portrait (thumbnail row on phones),
 * role and summary, with key facts and the full biography opening in place.
 */
export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article id={leader.slug} aria-labelledby={`${leader.slug}-name`} className="group flex h-full scroll-mt-24 flex-col">
      <div className="grid grid-cols-[5.5rem_1fr] items-start gap-4 sm:block">
        <div className="relative aspect-square overflow-hidden rounded-md bg-subtle sm:aspect-[4/5]">
          {leader.photo ? (
            <Image
              src={leader.photo.src}
              alt={`Portrait of ${leader.name}`}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 88px"
              className="object-cover object-[50%_25%] transition-transform duration-500 ease-brand group-hover:scale-[1.03]"
            />
          ) : (
            <Initials name={leader.name} tone="band" className="absolute inset-0" />
          )}
        </div>
        <div className="sm:pt-5">
          <p className="t-label text-[0.66rem] sm:text-[0.72rem]">{leader.title}</p>
          <h3 id={`${leader.slug}-name`} className="t-h3 mt-1.5 text-lg sm:mt-2 sm:text-xl">
            {leader.name}
          </h3>
          <p className="mt-2 text-sm text-fg-soft">{leader.summary}</p>
        </div>
      </div>
      <Accordion
        summary={<span>Profile details</span>}
        className="mt-5 border-t border-line pt-3 sm:mt-auto"
        panelClassName="pt-4"
      >
        <dl className="divide-y divide-line border-y border-line">
          {leader.facts.map((f, i) => (
            <div key={i} className="py-2.5">
              <dt className="t-label">{f.label}</dt>
              <dd className="mt-1 text-sm text-fg">{f.value}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Areas of responsibility">
          {leader.focus.map((f) => (
            <li key={f}>
              <Tag>{f}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-3 text-sm text-fg-soft">
          {leader.bio.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </Accordion>
    </article>
  );
}

/** Handbook 4.3 — what the shared research process keeps constant and what varies. */
export function DisciplineContrast() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
      <div className="bg-surface p-6 sm:p-8">
        <p className="t-label text-accent">Same in every field</p>
        <p className="mt-4 font-display text-lg font-medium leading-snug tracking-tight">{acrossDisciplines.consistent}</p>
      </div>
      <div className="bg-surface p-6 sm:p-8">
        <p className="t-label">Adapted to each field</p>
        <p className="mt-4 font-display text-lg font-medium leading-snug tracking-tight">{acrossDisciplines.varies}</p>
      </div>
      <div className="bg-subtle p-6 sm:p-8 md:col-span-2">
        <p className="t-label">One framework, different questions</p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {acrossDisciplines.examples.map((e) => (
            <li key={e.field}>
              <span className="text-sm font-semibold text-fg">{e.field}</span>
              <span className="mt-0.5 block text-sm text-fg-soft">{e.example[0].toUpperCase() + e.example.slice(1)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
