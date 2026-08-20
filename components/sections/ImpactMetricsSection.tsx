"use client";

import { motion } from "framer-motion";
import { Beaker, FileText, Users, GraduationCap, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { metrics } from "@/data/content";

const IconMap: LucideIcon[] = [Beaker, FileText, Users, GraduationCap, Handshake];

export function ImpactMetricsSection() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="container">
        <div className="rounded-3xl border border-ink-200 bg-gradient-to-br from-white via-brand-50/40 to-white p-8 shadow-sm sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                Research impact
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                By the Numbers
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-base">
                Placeholder metrics — replace each value with verified counts
                before production launch. The data structure clearly marks all
                metrics as editable placeholders.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {metrics.map((m, i) => {
                  const Icon = IconMap[i % IconMap.length];
                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                        </div>
                        <div>
                          <p className="font-display text-3xl font-bold text-ink-900">
                            {m.value}
                            <span className="text-brand-600">+</span>
                          </p>
                          <p className="mt-1 text-sm text-ink-600">{m.label}</p>
                        </div>
                      </div>
                      <p className="sr-only">{m.note}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
