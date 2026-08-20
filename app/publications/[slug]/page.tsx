import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Calendar,
  Users,
  ExternalLink,
  BookOpen,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/data/publications";
import { researchProjects } from "@/data/projects";

type Params = {
  params: { slug: string };
};

export function generateStaticParams() {
  return publications.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}:  Params): Promise<Metadata> {
  const pub = publications.find((p) => p.slug === params.slug);
  if (!pub) {
    return {
      title: "Publication Not Found",
    };
  }
  return {
    title: pub.title,
    description: pub.abstract,
    alternates: {
      canonical: `/publications/${pub.slug}`,
    },
  };
}

export default function PublicationDetailPage({ params }:  Params) {
  const pub = publications.find((p) => p.slug === params.slug);

  if (!pub) {
    notFound();
  }

  const relatedProjects = researchProjects.filter((p) =>
    p.tags.some((t) => pub.tags.includes(t))
  );

  const relatedPublications = publications.filter(
    (p) => p.slug !== pub.slug && p.researchArea === pub.researchArea
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
            <Link href="/publications">
              <ArrowLeft className="h-4 w-4" />
              Back to all publications
            </Link>
          </Button>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="default">{pub.researchArea}</Badge>
              <Badge variant="outline">
                <Calendar className="mr-1 h-3 w-3" />
                {pub.year}
              </Badge>
            </div>
            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
              {pub.title}
            </h1>
            <div className="mt-6 flex items-start gap-2">
              <Users className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
              <p className="text-base text-ink-700">{pub.authors.join(", ")}</p>
            </div>
            <div className="mt-3 flex items-start gap-2">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
              <p className="text-base text-ink-700">
                <span className="font-semibold">Venue:</span> {pub.venue}
              </p>
            </div>
            {pub.doi && (
              <div className="mt-3 flex items-start gap-2">
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                <p className="text-base text-ink-700">
                  <span className="font-semibold">DOI:</span>{" "}
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-700 hover:text-brand-800 underline underline-offset-2"
                  >
                    {pub.doi}
                  </a>
                </p>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              {pub.doi && (
                <Button asChild size="lg">
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Read Paper
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button asChild size="lg" variant="outline">
                <Link href="/research">
                  View Related Research
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Cite or Collaborate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
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
                <h2 className="text-lg font-semibold text-ink-900">Abstract</h2>
              </div>
              <p className="text-sm leading-relaxed text-ink-700 sm:text-base">
                {pub.abstract}
              </p>
            </Card>

            <Card className="p-7 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Sparkles className="h-4.5 w-4.5" />
                </div>
                <h2 className="text-lg font-semibold text-ink-900">
                  Keywords & Topics
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="px-3 py-1.5 text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {relatedProjects.length > 0 && (
              <Card className="p-7 sm:p-8">
                <h2 className="text-lg font-semibold text-ink-900 mb-5">
                  Related Research Projects
                </h2>
                <ul className="divide-y divide-ink-100">
                  {relatedProjects.slice(0, 4).map((project) => (
                    <li key={project.id} className="py-4 first:pt-0 last:pb-0">
                      <Link
                        href={`/research/${project.slug}`}
                        className="group flex items-start justify-between gap-4"
                      >
                        <div>
                          <p className="text-sm font-semibold text-ink-900 group-hover:text-brand-700 transition-colors">
                            {project.title}
                          </p>
                          <p className="mt-1 text-xs text-ink-500">
                            {project.category} · {project.status}
                          </p>
                        </div>
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-ink-400 group-hover:text-brand-600 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            <Card className="p-7 sm:p-8 border-dashed border-ink-300">
              <h2 className="text-base font-semibold text-ink-900 mb-3">
                Demo Publication Placeholder
              </h2>
              <p className="text-sm text-ink-600">
                This publication entry is a structural placeholder. Replace the
                title, authors, venue, year, abstract, DOI, and tags with real
                publication data before launch. The detail page supports
                download links, supplementary materials, and citation metadata
                via the data file in{" "}
                <code className="rounded bg-ink-50 px-1.5 py-0.5 text-[12px] ring-1 ring-ink-200">
                  data/publications.ts
                </code>
                .
              </p>
            </Card>
          </article>

          <aside className="space-y-6 lg:col-span-4">
            <Card className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500 mb-4">
                Publication Details
              </h3>
              <dl className="space-y-4">
                {[
                  { label: "Research Area", val: pub.researchArea },
                  { label: "Year", val: String(pub.year) },
                  { label: "Venue", val: pub.venue },
                  {
                    label: "Authors",
                    val: String(pub.authors.length + " author(s)"),
                  },
                  { label: "Type", val: "Demo / Placeholder" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-4 border-b border-ink-100 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      {item.label}
                    </dt>
                    <dd className="text-right text-sm font-semibold text-ink-900">
                      {item.val}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>

            <Card className="p-6 border-brand-200 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/60">
              <h3 className="text-base font-semibold text-ink-900">
                Want to publish with us?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                If you're working on related research or interested in
                collaboration on a publication, reach out to discuss.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">
                    Talk about research
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/publications">
                    Browse all publications
                  </Link>
                </Button>
              </div>
            </Card>

            {relatedPublications.length > 0 && (
              <Card className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500 mb-4">
                  More in {pub.researchArea}
                </h3>
                <ul className="space-y-2">
                  {relatedPublications.slice(0, 4).map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/publications/${p.slug}`}
                        className="flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 hover:bg-ink-50 transition-colors"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-ink-900 line-clamp-2">
                            {p.title}
                          </p>
                          <p className="text-xs text-ink-500">{p.year}</p>
                        </div>
                        <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
