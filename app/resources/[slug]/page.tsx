import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  Calendar,
  ChevronRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resourceArticles } from "@/data/content";

type Params = {
  params: { slug: string };
};

const categoryStyles: Record<string, string> = {
  "Research Guides": "bg-navy-50 text-navy-800",
  "AI Research": "bg-brand-50 text-brand-700",
  "Data Science": "bg-brand-50 text-brand-700",
  "Statistics": "bg-sky-50 text-sky-700",
  "Systematic Reviews": "bg-amber-50 text-amber-700",
  "Academic Writing": "bg-rose-50 text-rose-700",
  "Publication": "bg-brand-50 text-brand-700",
};

export function generateStaticParams() {
  return resourceArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}:  Params): Promise<Metadata> {
  const article = resourceArticles.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/resources/${article.slug}`,
    },
  };
}

export default function ResourceArticlePage({ params }:  Params) {
  const article = resourceArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = resourceArticles.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );

  if (relatedArticles.length === 0) {
    relatedArticles.push(
      ...resourceArticles.filter((a) => a.slug !== article.slug).slice(0, 3)
    );
  }

  const catStyle = categoryStyles[article.category] || categoryStyles["Research Guides"];

  return (
    <>
      <article>
        <section className="relative overflow-hidden pt-16 pb-12 lg:pt-20 lg:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-grid-brand bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
          />
          <div className="container max-w-3xl">
            <Button asChild variant="ghost" size="sm" className="mb-6">
              <Link href="/resources">
                <ArrowLeft className="h-4 w-4" />
                Back to all resources
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className={catStyle + " border-transparent"}>
                {article.category}
              </Badge>
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
                <Calendar className="h-3.5 w-3.5" />
                {article.publishedAt}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
                <User className="h-3.5 w-3.5" />
                {article.author}
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              {article.excerpt}
            </p>
          </div>
        </section>

        <section className="container max-w-3xl pb-20 lg:pb-28">
          <div className="rounded-3xl border border-ink-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-2 rounded-2xl border border-dashed border-ink-200 bg-ink-50/60 p-4 mb-8">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">
                  Demo / Placeholder Article
                </p>
                <p className="mt-0.5 text-xs text-ink-600">
                  The body below shows the article layout structure. Replace
                  with real content or connect to MDX / a CMS later. The data
                  model in{" "}
                  <code className="rounded bg-white px-1.5 py-0.5 text-[11px] ring-1 ring-ink-200">
                    data/content.ts
                  </code>{" "}
                  supports this.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-ink-700 sm:text-base">
              <h2 className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
                Introduction
              </h2>
              <p>
                This is a sample article structure demonstrating how content
                will appear on the resources detail page. The structure is
                designed around long-form educational content — introductions,
                step-by-step guidance, practical examples, and clear
                takeaways.
              </p>

              <p>
                The resource system is intentionally built to be CMS-ready.
                Each article exposes a stable slug, category, author, and
                publication date so you can swap the data layer for MDX, a
                headless CMS, or a database without touching the UI components.
              </p>

              <h2 className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl pt-4">
                What You Will Learn
              </h2>
              <ul className="space-y-3 ml-1">
                {[
                  "How to structure a clear, reproducible workflow",
                  "Common pitfalls and how to avoid them",
                  "Practical checklists you can apply immediately",
                  "How to position the work for publication or review",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl pt-4">
                Step-by-Step Guidance
              </h2>
              <ol className="space-y-4 list-decimal list-inside">
                {[
                  "Begin with a clear objective and success criteria.",
                  "Survey existing work systematically, not casually.",
                  "Choose methods aligned with your question, not trends.",
                  "Document every decision for reproducibility.",
                  "Analyze results honestly and report limitations clearly.",
                ].map((step, i) => (
                  <li key={i} className="pl-1">
                    <span className="font-semibold text-ink-900">
                      Step {i + 1}.
                    </span>{" "}
                    {step}
                  </li>
                ))}
              </ol>

              <h2 className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl pt-4">
                Practical Tips
              </h2>
              <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
                <p className="text-sm text-ink-700 sm:text-base">
                  <span className="font-semibold text-brand-800">Tip: </span>
                  Start small. Choose a single concrete output — a protocol, a
                  figure, a paragraph — and complete it before expanding scope.
                  Research is a marathon, not a sprint; momentum comes from
                  small, consistent wins.
                </p>
              </div>

              <h2 className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl pt-4">
                Conclusion
              </h2>
              <p>
                This placeholder demonstrates the layout, typography, and
                reading experience we want for real articles. When replacing
                with actual content, keep the same structure: clear headings,
                short paragraphs, bulleted checklists, and occasional
                highlighted callouts for practical tips.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink-100 pt-6">
              <Badge className={catStyle + " border-transparent px-3 py-1.5"}>
                {article.category}
              </Badge>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild variant="outline" size="lg">
                  <Link href="/resources">
                    Back to resources
                    <ChevronRight className="h-4 w-4 -rotate-180" />
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Need help with this topic?
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>

      <section className="container pb-24 lg:pb-28">
        <div className="flex flex-col items-start justify-between gap-4 mb-8 sm:flex-row sm:items-end">
          <div>
            <Badge variant="outline" className="mb-3">
              Related Reading
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              More in {article.category}
            </h2>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link href="/resources">
              Browse all resources
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.slice(0, 3).map((a) => (
            <Card
              key={a.id}
              className="flex h-full flex-col overflow-hidden p-0 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 transition-all"
            >
              <div className="h-36 bg-gradient-to-br from-ink-100 via-brand-50/60 to-ink-100 relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-grid-brand opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-2xl bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-700 backdrop-blur shadow-sm ring-1 ring-brand-100">
                    {a.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-ink-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {a.readTime}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{a.publishedAt}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug text-ink-900 line-clamp-2">
                  <Link
                    href={`/resources/${a.slug}`}
                    className="hover:text-brand-700 transition-colors"
                  >
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 line-clamp-3">
                  {a.excerpt}
                </p>
                <Link
                  href={`/resources/${a.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  Read article
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
