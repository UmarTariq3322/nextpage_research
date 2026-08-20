"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  User,
  Search,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resourceArticles, resourceCategories } from "@/data/content";
import { cn } from "@/lib/utils";

const categoryStyles: Record<string, string> = {
  "Research Guides": "bg-navy-50 text-navy-800",
  "AI Research": "bg-brand-50 text-brand-700",
  "Data Science": "bg-brand-50 text-brand-700",
  "Statistics": "bg-sky-50 text-sky-700",
  "Systematic Reviews": "bg-amber-50 text-amber-700",
  "Academic Writing": "bg-rose-50 text-rose-700",
  "Publication": "bg-brand-50 text-brand-700",
};

export default function ResourcesPageClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return resourceArticles.filter((a) => {
      const q = query.trim().toLowerCase();
      const haystack = `${a.title} ${a.category} ${a.excerpt} ${a.author}`.toLowerCase();
      const matchesQuery = q.length === 0 || haystack.includes(q);
      const matchesCategory =
        activeCategory === "All" || a.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

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
              Resources & Guides
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Practical guides for doing{" "}
              <span className="bg-gradient-to-br from-brand-600 to-brand-500 bg-clip-text text-transparent">
                credible research.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Research guides, tutorials, and articles built for students,
              researchers, and practitioners. Designed to be clear, actionable,
              and methodologically honest.
            </p>
            <div className="mt-8 relative max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides and articles..."
                className="pl-11"
                aria-label="Search resources"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="flex flex-wrap gap-2">
          {resourceCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                activeCategory === cat
                  ? "border-brand-600 bg-brand-600 text-white shadow-sm"
                  : "border-ink-200 bg-white text-ink-700 hover:border-ink-300 hover:bg-ink-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="container pb-24 lg:pb-28">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-ink-300 bg-white p-14 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-ink-100 text-ink-500">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink-900">
              No articles match your search
            </h3>
            <p className="mt-2 text-sm text-ink-600">
              Try a different keyword or category.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-6"
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
            >
              Reset filters
            </Button>
          </div>
        ) : (
          <>
            <p className="mb-5 text-sm text-ink-500">
              Showing{" "}
              <span className="font-semibold text-ink-700">
                {filtered.length}
              </span>{" "}
              of {resourceArticles.length} articles
            </p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article) => {
                const catStyle =
                  categoryStyles[article.category] ||
                  categoryStyles["Research Guides"];
                return (
                  <Card
                    key={article.id}
                    className="group flex h-full flex-col overflow-hidden p-0 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 transition-all"
                  >
                    <div className="h-44 bg-gradient-to-br from-ink-100 via-brand-50/60 to-ink-100 relative">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-grid-brand opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className={cn(
                            "rounded-2xl px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur shadow-sm ring-1",
                            catStyle,
                            "ring-white/60"
                          )}
                        >
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-xs text-ink-500">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {article.readTime}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{article.publishedAt}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-ink-900 group-hover:text-brand-700 transition-colors">
                        <Link href={`/resources/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-5">
                        <div className="flex items-center gap-2 text-xs text-ink-500">
                          <User className="h-3.5 w-3.5" />
                          {article.author}
                        </div>
                        <Link
                          href={`/resources/${article.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-800"
                        >
                          Read article
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </>
        )}

        <div className="mt-16 rounded-3xl border border-ink-200 bg-ink-50/60 p-10 text-center sm:p-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <h3 className="text-xl font-bold text-ink-900 sm:text-2xl">
              Want more? This structure is ready for a CMS backend.
            </h3>
          </div>
          <p className="mx-auto max-w-2xl text-sm text-ink-600 sm:text-base">
            Articles currently use demo placeholders. The data model in{" "}
            <code className="rounded bg-white px-1.5 py-0.5 text-[12px] ring-1 ring-ink-200">
              data/content.ts
            </code>{" "}
            is designed to easily connect to MDX, a headless CMS, or a database later.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Suggest a topic
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
