import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Tag } from "@/components/site/primitives";
import { modules } from "@/content/curriculum";

/** Nine curriculum modules as editorial cards, each linking to its details. */
export function CurriculumLadder() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((m, i) => (
        <li key={m.code} className="bg-surface">
          <Link
            href={`/curriculum#module-${m.code.toLowerCase()}`}
            className="group relative flex h-full flex-col p-6 transition-colors duration-200 hover:bg-subtle sm:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-fg-mute transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Tag>{m.level}</Tag>
            </div>
            <h3 className="t-h3 mt-8 pr-6">{m.title}</h3>
            <p className="mt-2 text-sm text-fg-soft">{m.oneLiner}</p>
            <ArrowUpRight
              className="absolute bottom-6 right-6 h-4 w-4 text-fg-mute opacity-0 transition-[opacity,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ol>
  );
}
