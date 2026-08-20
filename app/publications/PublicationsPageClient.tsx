"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Calendar,
  Search,
  ExternalLink,
  Users,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { publications, publicationFilters } from "@/data/publications";
import { cn } from "@/lib/utils";

export default function PublicationsPageClient() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      const haystack = `${p.title} ${p.authors.join(" ")} ${p.venue} ${p.abstract} ${p.researchArea} ${p.tags.join(" ")}`.toLowerCase();
      const q = query.trim().toLowerCase();
      const matchesQuery = q.length === 0 || haystack.includes(q);
      const matchesFilter =
        activeFilter === "All" || p.researchArea === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-brand bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <div className="container">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-5">
              Publications
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Our{" "}
              <span className="bg-gradient-to-br from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Publications
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Peer-reviewed papers, conference contributions, and working
              papers produced by Nexpage Research and our collaborators.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search publications, authors, venues, tags..."
                className="pl-11"
                aria-label="Search publications"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {publicationFilters.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                    activeFilter === cat
                      ? "border-brand-600 bg-brand-600 text-white shadow-sm"
                      : "border-ink-200 bg-white text-ink-700 hover:border-ink-300 hover:bg-ink-50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-24 lg:pb-28">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-ink-300 bg-white p-14 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-ink-100 text-ink-500">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink-900">
              No publications match your search
            </h3>
            <p className="mt-2 text-sm text-ink-600">
              Try a different keyword or filter.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-5 text-sm text-ink-500">
              Showing{" "}
              <span className="font-semibold text-ink-700">
                {filtered.length}
              </span>{" "}
              of {publications.length} publications
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {filtered.map((pub) => (
                <Card key={pub.id} className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="default">{pub.researchArea}</Badge>
                    <Badge variant="outline">
                      <Calendar className="mr-1 h-3 w-3" /> {pub.year}
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-900">
                    <Link
                      href={`/publications/${pub.slug}`}
                      className="hover:text-brand-700 transition-colors"
                    >
                      {pub.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm text-ink-600 flex items-start gap-1.5">
                    <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-500" />
                    {pub.authors.join(", ")}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    <span className="font-medium">Venue:</span> {pub.venue}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600 line-clamp-3">
                    {pub.abstract}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[11px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ink-100 pt-5">
                    <Link
                      href={`/publications/${pub.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      <FileText className="h-4 w-4" />
                      View Research
                    </Link>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 hover:text-ink-900"
                      >
                        Read Paper
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
