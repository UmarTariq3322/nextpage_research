"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  FileSearch2,
  Brain,
  BarChart3,
  Database,
  GraduationCap,
  PenLine,
  Send,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { researchServices } from "@/data/services";
import { cn } from "@/lib/utils";

const IconMap: Record<string, LucideIcon> = {
  Lightbulb,
  FileSearch2,
  Brain,
  BarChart3,
  Database,
  GraduationCap,
  PenLine,
  Send,
};

export function ServicesSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Research Services"
            description="End-to-end services that cover the entire research lifecycle. Choose the support you need, or combine multiple services for a complete collaboration."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/services">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {researchServices.map((service, i) => {
            const Icon = IconMap[service.icon] || Lightbulb;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                <Card
                  className={cn(
                    "group relative flex h-full flex-col p-6 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 hover:border-brand-300 dark:hover:border-brand-500/50"
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 ring-1 ring-brand-100 dark:ring-brand-800/50 transition-all group-hover:bg-brand-600 group-hover:text-white dark:group-hover:text-ink-950 group-hover:ring-brand-600 dark:group-hover:bg-brand-400">
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-ink-900 dark:text-ink-50">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 group-hover:gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
