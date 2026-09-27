"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Accessible disclosure with a smooth height transition
 * (grid-template-rows 0fr → 1fr). Content stays in the DOM for SEO.
 */
export function Accordion({
  summary,
  children,
  defaultOpen = false,
  id,
  className,
  triggerClassName,
  panelClassName,
  headingLevel,
}: {
  summary: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
  className?: string;
  triggerClassName?: string;
  panelClassName?: string;
  /** Wrap the trigger in a heading (WAI-ARIA accordion pattern). */
  headingLevel?: "h2" | "h3";
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const autoId = React.useId();
  const panelId = `${id ?? autoId}-panel`;
  const triggerId = `${id ?? autoId}-trigger`;

  // Open automatically when navigated to via a URL hash that targets this item.
  React.useEffect(() => {
    if (!id) return;
    const sync = () => window.location.hash === `#${id}` && setOpen(true);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [id]);

  const Heading = headingLevel ?? "div";
  const trigger = (
    <button
      type="button"
      id={triggerId}
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen((o) => !o)}
      className={cn(
        "group flex w-full items-center justify-between gap-4 text-left text-sm font-medium text-fg transition-colors",
        triggerClassName
      )}
    >
      {summary}
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-sm border border-line text-fg-mute transition-colors group-hover:border-line-strong group-hover:text-fg">
        <Plus className={cn("h-3.5 w-3.5 transition-transform duration-200 ease-brand", open && "rotate-45")} aria-hidden />
      </span>
    </button>
  );

  return (
    <div id={id} className={className}>
      {headingLevel ? <Heading className="m-0 font-sans text-base font-normal">{trigger}</Heading> : trigger}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn("grid transition-[grid-template-rows] duration-300 ease-brand", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
      >
        <div className="overflow-hidden" inert={!open ? ("" as unknown as boolean) : undefined}>
          <div className={panelClassName}>{children}</div>
        </div>
      </div>
    </div>
  );
}
