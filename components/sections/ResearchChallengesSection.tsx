"use client";

import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Compass,
  BarChart3,
  Brain,
  FileText,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { researchChallenges } from "@/data/research";
import { cn } from "@/lib/utils";

const IconMap: Record<string, LucideIcon> = {
  Search,
  BookOpen,
  Compass,
  BarChart3,
  Brain,
  FileText,
};

export function ResearchChallengesSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="The challenges researchers face"
          title="Research Is Difficult. It Doesn't Have to Be."
          description="Across every field and career stage, researchers and students run into the same structural problems. We have structured services to solve each one."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {researchChallenges.map((challenge, i) => {
            const Icon = IconMap[challenge.icon] || Search;
            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Card
                  className={cn(
                    "group relative h-full overflow-hidden p-7 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 hover:border-ink-300"
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-ink-900">
                    {challenge.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                    {challenge.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
