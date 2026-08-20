"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { researchPipeline } from "@/data/research";

export function SolutionPipelineSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-ink-50/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-slate bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      <div className="container">
        <SectionHeading
          eyebrow="The full research journey"
          title="From Research Idea to Publication"
          description="A structured, repeatable pipeline that takes you from an initial spark of curiosity through rigorous methodology, analysis, and into peer-reviewed publication."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-brand-200 via-brand-300 to-brand-200 lg:block" />

          <div className="grid gap-4 lg:gap-0">
            {researchPipeline.map((step, i) => {
              const isLeft = i % 2 === 0;
              const isLast = i === researchPipeline.length - 1;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                  className="relative grid items-center gap-4 lg:grid-cols-12"
                >
                  <div
                    className={`lg:col-span-5 ${
                      isLeft ? "lg:pr-10 lg:text-right" : "lg:col-start-8 lg:pl-10"
                    }`}
                  >
                    <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        Step {i + 1}
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-ink-900">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                    <div className="relative">
                      <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand-300 bg-white text-brand-600 shadow-sm ring-4 ring-brand-50/60">
                        <CheckCircle2 className="h-5 w-5" />
                      </span>
                      {!isLast && (
                        <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 text-brand-400">
                          <ArrowDown className="h-4 w-4 animate-pulse-slow" />
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
