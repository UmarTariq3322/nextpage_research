import {
  CalendarCheck,
  ClipboardCheck,
  Compass,
  DoorOpen,
  FlaskConical,
  Lightbulb,
  Megaphone,
  PenLine,
  Sigma,
  UserCog,
  Users,
  type LucideIcon,
} from "lucide-react";

import { communityPrograms, projectRoles } from "@/content/community";
import { cn } from "@/lib/utils";

const programIcons: Record<string, LucideIcon> = {
  "Research idea board": Lightbulb,
  "Project matchmaking": Users,
  "Statistics help desk": Sigma,
  "Research opportunities": Megaphone,
  "Monthly research challenge": CalendarCheck,
  "Project rooms": DoorOpen,
};

const roleIcons: Record<string, LucideIcon> = {
  "Project Lead": Compass,
  Researcher: FlaskConical,
  "Statistics Lead": Sigma,
  "Writing Lead": PenLine,
  "Quality Reviewer": ClipboardCheck,
  "Community Mentor": UserCog,
};

/**
 * Illustration of the idea board: posted questions looking for collaborators.
 * Skeleton lines stand in for text, so it shows the concept, not real posts.
 */
export function IdeaBoardVisual({ className }: { className?: string }) {
  const posts = [
    { w: ["w-4/5", "w-3/5"], seeking: "Statistics Lead" },
    { w: ["w-3/4", "w-1/2"], seeking: "Writing Lead" },
    { w: ["w-2/3", "w-2/5"], seeking: "Researcher" },
  ];
  return (
    <div aria-hidden className={cn("space-y-2.5", className)}>
      {posts.map((p, i) => (
        <div
          key={i}
          className={cn(
            "rounded-md border border-line bg-surface p-3.5 shadow-sm",
            i === 0 && "mr-6 sm:mr-10",
            i === 1 && "ml-6 sm:ml-10",
            i === 2 && "ml-2 mr-4 sm:ml-4 sm:mr-6"
          )}
        >
          <div className="flex items-center gap-2">
            <Lightbulb className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-fg-mute">Research question</span>
          </div>
          <div className={cn("mt-2.5 h-2 rounded-sm bg-line-strong", p.w[0])} />
          <div className={cn("mt-1.5 h-2 rounded-sm bg-line", p.w[1])} />
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-sm bg-accent-soft px-2 py-0.5 text-[0.7rem] font-medium text-accent">
            Seeking · {p.seeking}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Illustration of a project room: roles around one project and its
 * milestone track. Generic labels only; not a real project.
 */
export function ProjectRoomVisual({ className }: { className?: string }) {
  const roles = ["Project Lead", "Researcher", "Statistics Lead", "Writing Lead", "Quality Reviewer"];
  const milestones = ["Protocol", "Data", "Analysis", "Manuscript", "Submission"];
  const done = 2;
  return (
    <div aria-hidden className={cn("rounded-lg border border-line bg-surface p-6 shadow-lg", className)}>
      <div className="flex items-center justify-between">
        <span className="t-label">Project room</span>
        <DoorOpen className="h-4 w-4 text-fg-mute" />
      </div>
      <div className="mt-5 h-2.5 w-3/4 rounded-sm bg-line-strong" />
      <div className="mt-2 h-2.5 w-1/2 rounded-sm bg-line" />

      <div className="mt-6 flex -space-x-2">
        {roles.map((r) => (
          <span
            key={r}
            className="grid h-9 w-9 place-items-center rounded-full border-2 border-surface bg-subtle font-mono text-[0.6rem] font-medium text-fg-soft"
          >
            {r
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
        ))}
      </div>

      <ol className="mt-7 grid grid-cols-5 gap-1.5">
        {milestones.map((m, i) => (
          <li key={m}>
            <span className={cn("block h-1 rounded-full", i < done ? "bg-accent" : i === done ? "bg-accent/40" : "bg-line")} />
            <span className={cn("mt-2 block truncate text-[0.65rem]", i <= done ? "text-fg" : "text-fg-mute")}>{m}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Six programs in an asymmetric layout: the idea board is featured,
 * the rest support it at smaller scale.
 */
export function CommunityPrograms() {
  const [featured, ...rest] = communityPrograms;
  return (
    <div className="grid gap-4 lg:grid-cols-[1.25fr_1fr]">
      <article className="band relative overflow-hidden rounded-lg p-8 sm:p-10">
        <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />
        <div className="relative grid gap-10 sm:grid-cols-[1fr_1fr] sm:items-center lg:grid-cols-1 xl:grid-cols-[1fr_1fr]">
          <div>
            <p className="t-label">Featured</p>
            <h3 className="t-h2 mt-4 text-3xl capitalize sm:text-[2rem]">{featured.title}</h3>
            <p className="mt-3 max-w-xs text-fg-soft">{featured.description}</p>
          </div>
          <IdeaBoardVisual />
        </div>
      </article>

      <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {rest.map((p) => {
          const Icon = programIcons[p.title];
          return (
            <li key={p.title} className="group bg-surface p-6 transition-colors duration-200 hover:bg-subtle">
              <Icon className="h-5 w-5 text-fg-mute transition-colors group-hover:text-accent" aria-hidden />
              <h3 className="t-h3 mt-4 capitalize">{p.title}</h3>
              <p className="mt-1.5 text-sm text-fg-soft">{p.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Handbook 7.3 — project roles arranged as a project room. */
export function ProjectRoles() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {projectRoles.map((r) => {
        const Icon = roleIcons[r.role];
        return (
          <li key={r.role} className="group flex items-start gap-4 bg-surface p-6 transition-colors hover:bg-subtle">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-line text-fg-soft transition-colors group-hover:border-accent/40 group-hover:text-accent">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <h3 className="t-h3 text-base">{r.role}</h3>
              <p className="mt-0.5 text-sm text-fg-soft">{r.responsibility}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
