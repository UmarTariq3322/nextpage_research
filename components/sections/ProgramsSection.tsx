"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, GraduationCap, Users, CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";

export function ProgramsSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Structured programs"
            title="Research Programs"
            description="Mentored, cohort-based learning programs designed to move you from research fundamentals to a deliverable, publication-ready output."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/programs">
              Explore all programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="group relative h-full overflow-hidden p-7 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 transition-all">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default">{program.level}</Badge>
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
                    <Clock className="h-3.5 w-3.5" />
                    {program.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
                    <Users className="h-3.5 w-3.5" />
                    {program.format}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-ink-900">
                  {program.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {program.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Topics
                  </p>
                  <ul className="mt-3 space-y-2">
                    {program.topics.slice(0, 5).map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-ink-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <span>{topic}</span>
                      </li>
                    ))}
                    {program.topics.length > 5 && (
                      <li className="text-xs text-ink-500 pl-6">
                        +{program.topics.length - 5} more topics
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mt-7 pt-6 border-t border-ink-100">
                  <Button asChild variant="ghost" className="w-full justify-between px-0 hover:bg-transparent hover:text-brand-700">
                    <Link href={`/programs#${program.slug}`}>
                      Explore Program
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
