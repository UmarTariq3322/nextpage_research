import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Beaker,
  Calendar,
  Users,
  FileText,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researchProjects } from "@/data/projects";
import { researchers } from "@/data/researchers";
import { publications } from "@/data/publications";
import { cn } from "@/lib/utils";

type Params = {
  params: { slug: string };
};

const statusStyles: Record<string, string> = {
  "In Progress": "bg-amber-50 text-amber-700 border-transparent",
  "Completed": "bg-brand-50 text-brand-700 border-transparent",
  "Under Review": "bg-sky-50 text-sky-700 border-transparent",
};

export function generateStaticParams() {
  return researchProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const project = researchProjects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/research/${project.slug}`,
    },
  };
}

export default function ProjectDetailPage({ params }: Params) {
  const project = researchProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectResearchers = researchers.filter((r) =>
    project.researchers.includes(r.slug)
  );

  const relatedPublications = publications.filter(
    (pub) =>
      pub.researchArea === project.category &&
      pub.tags.some((t) => project.tags.includes(t))
  );

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-brand bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <div className="container">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link href="/research">
              <ArrowLeft className="h-4 w-4" />
              Back to all projects
            </Link>
          </Button>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge className={cn(statusStyles[project.status])}>
                {project.status}
              </Badge>
            </div>
            <h1 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              {project.shortDescription}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-ink-200 pt-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Year
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                  <Calendar className="h-4 w-4" /> {project.year}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Researchers
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                  <Users className="h-4 w-4" /> {projectResearchers.length}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Research Area
                </p>
                <p className="mt-1.5 text-sm font-semibold text-ink-900">
                  {project.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8 space-y-10">
            <Card className="p-7 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <h2 className="text-lg font-semibold text-ink-900">
                  Project Overview
                </h2>
              </div>
              <div className="prose prose-ink max-w-none text-sm leading-relaxed text-ink-700 sm:text-base">
                <p>{project.fullDescription}</p>
              </div>
            </Card>

            <Card className="p-7 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Beaker className="h-4.5 w-4.5" />
                </div>
                <h2 className="text-lg font-semibold text-ink-900">
                  Research Methodology
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-ink-700 sm:text-base">
                {project.methodology}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Study Design", val: project.category + " research" },
                  { title: "Status", val: project.status },
                  { title: "Year", val: String(project.year) },
                  { title: "Team Size", val: String(projectResearchers.length) + " researcher(s)" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-ink-100 bg-ink-50/40 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink-900">
                      {item.val}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-7 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <Sparkles className="h-4.5 w-4.5" />
                </div>
                <h2 className="text-lg font-semibold text-ink-900">Tags & Topics</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="px-3 py-1.5 text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {relatedPublications.length > 0 && (
              <Card className="p-7 sm:p-8">
                <h2 className="text-lg font-semibold text-ink-900 mb-5">
                  Related Publications
                </h2>
                <ul className="divide-y divide-ink-100">
                  {relatedPublications.slice(0, 3).map((pub) => (
                    <li key={pub.id} className="py-4 first:pt-0 last:pb-0">
                      <Link
                        href={`/publications/${pub.slug}`}
                        className="group flex items-start justify-between gap-4"
                      >
                        <div>
                          <p className="text-sm font-semibold text-ink-900 group-hover:text-brand-700 transition-colors">
                            {pub.title}
                          </p>
                          <p className="mt-1 text-xs text-ink-500">
                            {pub.venue} · {pub.year}
                          </p>
                        </div>
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-ink-400 group-hover:text-brand-600 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </article>

          <aside className="space-y-6 lg:col-span-4">
            <Card className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500 mb-4">
                Research Team
              </h3>
              <ul className="space-y-4">
                {projectResearchers.length > 0 ? (
                  projectResearchers.map((r) => (
                    <li key={r.id}>
                      <div
                        className="flex items-center gap-3 rounded-2xl border border-ink-100 p-3 bg-brand-50/10"
                      >
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-sm font-bold text-white">
                          {r.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-ink-900 truncate">
                            {r.name}
                          </p>
                          <p className="text-xs text-ink-500 truncate">
                            {r.role}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="text-sm text-ink-500">
                    Team details coming soon.
                  </p>
                )}
              </ul>
            </Card>

            <Card className="p-6 border-brand-200 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/60">
              <h3 className="text-base font-semibold text-ink-900">
                Join this Research
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                If you'd like to collaborate and contribute to this project, register your interest with our research team.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Button asChild size="lg" className="w-full bg-brand-600 hover:bg-brand-700">
                  <Link href={`/research/${project.slug}/register`}>
                    Register Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/research">Back to all projects</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500 mb-4">
                Other Projects
              </h3>
              <ul className="space-y-2">
                {researchProjects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 4)
                  .map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/research/${p.slug}`}
                        className="flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 hover:bg-ink-50 transition-colors"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-ink-900 truncate">
                            {p.title}
                          </p>
                          <p className="text-xs text-ink-500">{p.category}</p>
                        </div>
                        <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-400" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
