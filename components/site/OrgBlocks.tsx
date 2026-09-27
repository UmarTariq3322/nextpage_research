import Image from "next/image";
import Link from "next/link";

import { Arrow } from "@/components/ui/button";
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

/** Profile card: portrait (or a neutral monogram), name, role, one line. */
export function LeaderCard({ leader, compact = false }: { leader: Leader; compact?: boolean }) {
  // Compact cards are a thumbnail row on phones and a portrait card from `sm` up.
  const body = (
    <>
      <div className={cn("relative overflow-hidden rounded-md bg-subtle", compact ? "aspect-square sm:aspect-[4/5]" : "aspect-[4/5]")}>
        {leader.photo ? (
          <Image
            src={leader.photo.src}
            alt={`Portrait of ${leader.name}`}
            fill
            sizes={compact ? "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 88px" : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"}
            className="object-cover object-[50%_25%] transition-transform duration-500 ease-brand group-hover:scale-[1.03]"
          />
        ) : (
          <Initials name={leader.name} className="absolute inset-0" />
        )}
      </div>
      <div className={compact ? "sm:pt-5" : "pt-5"}>
        <p className="t-label text-[0.66rem] sm:text-[0.72rem]">{leader.title}</p>
        <h3 className="t-h3 mt-1.5 text-lg sm:mt-2 sm:text-xl">{leader.name}</h3>
        <p className="mt-2 text-sm text-fg-soft">{leader.summary}</p>
        {compact && (
          <span className="mt-3 hidden items-center gap-1.5 text-sm font-medium text-accent sm:inline-flex">
            Profile <Arrow />
          </span>
        )}
      </div>
    </>
  );
  return compact ? (
    <Link href={`/team#${leader.slug}`} className="group grid grid-cols-[5.5rem_1fr] items-start gap-4 rounded-md sm:block">
      {body}
    </Link>
  ) : (
    <article className="group">{body}</article>
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

/** Leadership as profile rows: photo, role, summary and areas of responsibility. */
export function LeaderRows({ leaders }: { leaders: Leader[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {leaders.map((l) => (
        <li key={l.slug}>
          <Link
            href={`/team#${l.slug}`}
            className="group grid grid-cols-[4rem_1fr] gap-x-4 gap-y-4 py-6 transition-colors sm:grid-cols-[6rem_1fr] sm:gap-x-8 sm:py-7 lg:grid-cols-[6rem_1.1fr_1fr_auto] lg:items-center"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-md bg-subtle sm:h-24 sm:w-24">
              {l.photo ? (
                <Image
                  src={l.photo.src}
                  alt={`Portrait of ${l.name}`}
                  fill
                  sizes="96px"
                  className="object-cover object-[50%_20%] transition-transform duration-500 ease-brand group-hover:scale-105"
                />
              ) : (
                <Initials name={l.name} className="absolute inset-0" />
              )}
            </div>
            <div>
              <p className="t-label">{l.title}</p>
              <h3 className="t-h3 mt-1.5 text-lg transition-colors group-hover:text-accent sm:mt-2 sm:text-xl">{l.name}</h3>
              <p className="mt-1.5 text-sm text-fg-soft">{l.summary}</p>
            </div>
            <ul className="hidden flex-wrap gap-1.5 sm:col-start-2 sm:flex lg:col-start-auto" aria-label="Areas of responsibility">
              {l.focus.slice(0, 4).map((f) => (
                <li key={f}>
                  <Tag>{f}</Tag>
                </li>
              ))}
            </ul>
            <Arrow className="hidden text-fg-mute transition-colors group-hover:text-accent lg:block" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
