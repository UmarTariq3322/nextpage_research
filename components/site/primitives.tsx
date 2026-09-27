import { CircleDashed } from "lucide-react";

import { SectionLabel } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/** Page section with consistent vertical rhythm and background tone. */
export function Section({
  id,
  tone = "paper",
  size = "default",
  className,
  children,
  labelledBy,
}: {
  id?: string;
  tone?: "paper" | "subtle" | "band";
  size?: "default" | "compact";
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        size === "compact" ? "py-16 lg:py-20" : "py-24 lg:py-32",
        tone === "subtle" && "border-y border-line bg-subtle",
        tone === "band" && "band",
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}

/** Inner-page hero: label, large title, one-line lead, optional actions and aside. */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  aside,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div
        className={cn(
          "container relative grid gap-12 pb-20 pt-16 lg:pb-28 lg:pt-24",
          aside && "lg:grid-cols-[1.2fr_1fr] lg:items-end"
        )}
      >
        <div>
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="t-h1 mt-6 max-w-3xl">{title}</h1>
          <p className="t-lead mt-6 max-w-xl">{lead}</p>
          {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
        </div>
        {aside}
      </div>
    </header>
  );
}

/** Small label chip for levels, categories and metadata. */
export function Tag({ children, tone = "neutral", className }: { children: React.ReactNode; tone?: "neutral" | "accent"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium",
        tone === "accent" ? "bg-accent-soft text-accent" : "bg-subtle text-fg-soft ring-1 ring-inset ring-line",
        className
      )}
    >
      {children}
    </span>
  );
}

/**
 * Marks information the handbook lists as undecided. Used instead of
 * inventing values for duration, fees, certification and similar.
 */
export function PendingNote({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <aside className={cn("flex gap-3 rounded-md border border-dashed border-line-strong p-4", className)}>
      <CircleDashed className="mt-0.5 h-4 w-4 shrink-0 text-fg-mute" aria-hidden />
      <div className="text-sm text-fg-soft">
        <p className="font-medium text-fg">{title}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </aside>
  );
}
