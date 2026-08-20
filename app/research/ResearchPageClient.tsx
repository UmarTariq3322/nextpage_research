"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  Search,
  Users,
  Filter,
  Calendar,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { researchProjects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  "In Progress": "bg-amber-50 text-amber-700 border-transparent",
  "Completed": "bg-brand-50 text-brand-700 border-transparent",
  "Under Review": "bg-sky-50 text-sky-700 border-transparent",
};

export default function ResearchPageClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return researchProjects.filter((p) => {
      const matchesQuery =
        query.trim().length === 0 ||
        `${p.title} ${p.shortDescription} ${p.category} ${p.tags.join(" ")}`
          .toLowerCase()
          .includes(query.trim().toLowerCase());
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
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
              Research Portfolio
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Research{" "}
              <span className="bg-gradient-to-br from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Projects & Initiatives
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Active and completed research spanning artificial intelligence,
              machine learning, cybersecurity, data science, and evidence
              synthesis methodology. Filter by area or search for specific
              topics.
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
                placeholder="Search projects, topics, tags..."
                className="pl-11"
                aria-label="Search research projects"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-ink-500">
              <Filter className="h-4 w-4 shrink-0" />
              <span className="font-medium uppercase tracking-wider">
                Categories
              </span>
            </div>
            <div className="flex flex-wrap gap-2 lg:ml-2">
              {projectCategories.map((cat) => (
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
          </div>
        </div>
      </section>

      <section className="container pb-24 lg:pb-28">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-ink-300 bg-white p-14 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-ink-100 text-ink-500">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink-900">
              No projects match your search
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
              Showing <span className="font-semibold text-ink-700">{filtered.length}</span> of{" "}
              {researchProjects.length} projects
            </p>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((project) => (
                <Card
                  key={project.id}
                  className="group flex h-full flex-col overflow-hidden p-0 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 transition-all"
                >
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-grid-brand opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-md ring-1 ring-white/20">
                        <Beaker className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-ink-800">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute right-4 top-4">
                      <Badge className={cn(statusStyles[project.status])}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-semibold leading-snug text-ink-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-ink-500">
                      <div>
                        <p className="font-semibold uppercase tracking-wider text-ink-400">
                          Methodology
                        </p>
                        <p className="mt-1 line-clamp-2">{project.methodology}</p>
                      </div>
                      <div>
                        <p className="font-semibold uppercase tracking-wider text-ink-400">
                          Year
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {project.year}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[11px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-5">
                      <div className="flex items-center gap-1.5 text-xs text-ink-500">
                        <Users className="h-3.5 w-3.5" />
                        {project.researchers.length} researcher
                        {project.researchers.length > 1 ? "s" : ""}
                      </div>
                      <Link
                        href={`/research/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-800"
                      >
                        View Project
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
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
