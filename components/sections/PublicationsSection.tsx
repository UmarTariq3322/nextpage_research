"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Calendar, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publications } from "@/data/publications";

export function PublicationsSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Disseminating knowledge"
            title="Our Publications"
            description="Peer-reviewed papers, conference contributions, and working papers produced by Nexpage Research and our collaborators."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/publications">
              Browse all publications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {publications.slice(0, 4).map((pub, i) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Card className="group h-full p-6 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 transition-all sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default">{pub.researchArea}</Badge>
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" /> {pub.year}
                  </Badge>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-900 group-hover:text-brand-700 transition-colors">
                  <Link href={`/publications/${pub.slug}`}>{pub.title}</Link>
                </h3>

                <p className="mt-2.5 text-sm text-ink-600">
                  <span className="font-medium text-ink-700">Authors:</span>{" "}
                  {pub.authors.join(", ")}
                </p>
                <p className="mt-1 text-sm text-ink-500">
                  <span className="font-medium">Venue:</span> {pub.venue}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-ink-600 line-clamp-3">
                  {pub.abstract}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-5">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
