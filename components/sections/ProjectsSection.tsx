"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Beaker, Users } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { researchProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  "In Progress": "bg-amber-50 text-amber-700 border-transparent",
  "Completed": "bg-brand-50 text-brand-700 border-transparent",
  "Under Review": "bg-sky-50 text-sky-700 border-transparent",
};

export function ProjectsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-ink-50/60">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we work on"
            title="Research Projects"
            description="Active and completed research projects spanning artificial intelligence, machine learning, data science, cybersecurity, and research methodology."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/research">
              Browse all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {researchProjects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Card className="group flex h-full flex-col overflow-hidden p-0 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 transition-all">
                <div className="relative h-36 overflow-hidden rounded-t-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-grid-brand opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-md ring-1 ring-white/20">
                      <Beaker className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-white/90 text-ink-800">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute right-4 top-4">
                    <Badge
                      className={cn(statusStyles[project.status])}
                    >
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

                  <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-ink-500">
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
                      <p className="mt-1">{project.year}</p>
                    </div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
