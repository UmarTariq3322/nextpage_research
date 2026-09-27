import { journey } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Seven-step research journey. Horizontal track on large screens,
 * vertical timeline on small screens.
 */
export function Journey() {
  return (
    <ol className="relative grid gap-0 lg:grid-cols-7 lg:gap-4">
      {/* connectors */}
      <span aria-hidden className="draw-x absolute left-[14px] right-[calc(100%/7-14px)] top-[14px] hidden h-px bg-gradient-to-r from-line-strong via-accent/60 to-accent lg:block" />
      <span aria-hidden className="draw-y absolute bottom-10 left-[14px] top-4 w-px bg-gradient-to-b from-line-strong via-accent/60 to-accent lg:hidden" />

      {journey.map((s, i) => {
        const last = i === journey.length - 1;
        return (
          <li key={s.n} className="group relative flex gap-5 pb-9 last:pb-0 lg:block lg:pb-0">
            <span
              className={cn(
                "relative z-10 mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,transform] duration-200 ease-brand group-hover:scale-110 lg:mt-0",
                last ? "border-accent bg-accent" : "border-line-strong bg-paper group-hover:border-accent"
              )}
            >
              <span className={cn("h-1.5 w-1.5 rounded-full", last ? "bg-accent-on" : "bg-fg-mute group-hover:bg-accent")} />
            </span>
            <div className="lg:mt-6">
              <p className="font-mono text-xs text-accent">{s.n}</p>
              <h3 className="t-h3 mt-1.5 text-[1.05rem]">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-soft">{s.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
