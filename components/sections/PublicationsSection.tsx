"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Calendar, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publications } from "@/data/publications";

const areaColors: Record<string, string> = {
  "Artificial Intelligence": "border-l-violet-500 bg-violet-50/30 dark:bg-violet-900/10",
  "Machine Learning": "border-l-blue-500 bg-blue-50/30 dark:bg-blue-900/10",
  "Systematic Review": "border-l-brand-500 bg-brand-50/30 dark:bg-brand-900/10",
  "Data Science": "border-l-amber-500 bg-amber-50/30 dark:bg-amber-900/10",
  "Natural Language Processing": "border-l-rose-500 bg-rose-50/30 dark:bg-rose-900/10",
  "Cybersecurity": "border-l-red-500 bg-red-50/30 dark:bg-red-900/10",
};

export function PublicationsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(45,212,191,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Disseminating knowledge"
            title="Our Publications"
            description="Peer-reviewed papers, conference contributions, and working papers produced by Nexpage Research and our collaborators."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0 backdrop-blur-sm">
            <Link href="/publications">
              Browse all publications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {publications.slice(0, 4).map((pub, i) => {
            const colorClasses = areaColors[pub.researchArea] || "border-l-brand-500 bg-brand-50/30 dark:bg-brand-900/10";
            return (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="group relative h-full">
                  {/* Hover glow */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-400/0 via-violet-400/0 to-brand-400/0 group-hover:from-brand-400/20 group-hover:via-violet-400/10 group-hover:to-brand-400/20 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-sm" />

                  <Card className={`relative h-full border-l-4 ${colorClasses} p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-brand-500/5 sm:p-7`}>
                    {/* Gradient header overlay */}
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="default" className="bg-gradient-to-r from-brand-600 to-brand-500 text-white border-0 shadow-sm">
                        {pub.researchArea}
                      </Badge>
                      <Badge variant="outline" className="backdrop-blur-sm">
                        <Calendar className="mr-1 h-3 w-3" /> {pub.year}
                      </Badge>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-900 dark:text-ink-100 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                      <Link href={`/publications/${pub.slug}`}>{pub.title}</Link>
                    </h3>

                    <p className="mt-2.5 text-sm text-ink-600 dark:text-ink-400">
                      <span className="font-medium text-ink-700 dark:text-ink-300">Authors:</span>{" "}
                      {pub.authors.join(", ")}
                    </p>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                      <span className="font-medium">Venue:</span> {pub.venue}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-400 line-clamp-3">
                      {pub.abstract}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-ink-100 dark:border-ink-800 pt-5">
                      <Link
                        href={`/publications/${pub.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 transition-colors"
                      >
                        <FileText className="h-4 w-4" />
                        View Research
                      </Link>
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-100 transition-colors"
                        >
                          Read Paper
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </Card>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
