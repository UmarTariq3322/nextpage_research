import Link from "next/link";

import { Arrow, Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-heading";
import { allPages } from "@/content/site";

export default function NotFound() {
  return (
    <section className="container py-24 lg:py-32">
      <SectionLabel index="404">Page not found</SectionLabel>
      <h1 className="t-h1 mt-6 max-w-2xl">This page could not be found.</h1>
      <p className="t-lead mt-5 max-w-xl">It may have moved as part of our new website.</p>
      <ul className="mt-10 grid max-w-2xl gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {allPages
          .filter((n) => n.href !== "/")
          .map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="group flex items-center justify-between bg-surface px-5 py-4 text-sm font-medium hover:bg-subtle">
                {n.label}
                <Arrow className="text-fg-mute" />
              </Link>
            </li>
          ))}
      </ul>
      <Button asChild className="mt-10">
        <Link href="/">Back to home</Link>
      </Button>
    </section>
  );
}
