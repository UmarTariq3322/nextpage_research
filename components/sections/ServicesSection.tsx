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

const gradients = [
  "from-brand-500 to-teal-500",
  "from-violet-500 to-purple-500",
  "from-blue-500 to-indigo-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-brand-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-indigo-500 to-violet-500",
];

export function ServicesSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at 10% 90%, rgba(45,212,191,0.12) 0%, transparent 40%), radial-gradient(ellipse at 90% 10%, rgba(139,92,246,0.08) 0%, transparent 40%)",
        }}
      />

      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Research Services"
            description="End-to-end services that cover the entire research lifecycle. Choose the support you need, or combine multiple services for a complete collaboration."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0 backdrop-blur-sm bg-white/70 dark:bg-ink-900/70">
            <Link href="/services">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {researchServices.map((service, i) => {
            const Icon = IconMap[service.icon] || Lightbulb;
            const gradient = gradients[i % gradients.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="group relative h-full">
                  {/* Gradient top border */}
                  <div
                    className={cn(
                      "absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      gradient
                    )}
                  />

                  <div className="relative flex h-full flex-col rounded-2xl border border-ink-200/80 dark:border-ink-700/80 bg-white dark:bg-ink-900 p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-ink-900/5 dark:group-hover:shadow-brand-900/10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 ring-1 ring-brand-100 dark:ring-brand-800/50 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white dark:group-hover:text-ink-950 group-hover:ring-brand-600 dark:group-hover:bg-brand-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/20">
                      <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-ink-900 dark:text-ink-50">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                      {service.shortDescription}
                    </p>

                    {/* Animated learn more link */}
                    <Link
                      href={`/services#${service.slug}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-400 transition-all hover:text-brand-800 dark:hover:text-brand-300 group-hover:gap-2.5"
                    >
                      <span className="relative">
                        Learn More
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-600 dark:bg-brand-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
