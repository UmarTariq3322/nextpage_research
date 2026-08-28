"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { researchPipeline } from "@/data/research";

export function SolutionPipelineSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-ink-50/60 dark:bg-ink-900/30 overflow-hidden">
      {/* Gradient mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(45,212,191,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(139,92,246,0.06) 0%, transparent 50%)",
        }}
      />
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
          {/* Animated gradient center line */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-1/2 lg:block overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-b from-brand-300 via-brand-500 to-violet-400 origin-top"
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="grid gap-6 lg:gap-0">
            {researchPipeline.map((step, i) => {
              const isLeft = i % 2 === 0;
              const isLast = i === researchPipeline.length - 1;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className="relative grid items-center gap-4 lg:grid-cols-12"
                >
                  <div
                    className={`lg:col-span-5 ${
                      isLeft ? "lg:pr-10 lg:text-right" : "lg:col-start-8 lg:pl-10"
                    }`}
                  >
                    {/* Glassmorphic card */}
                    <div className="group rounded-2xl border border-ink-200/60 dark:border-ink-700/60 bg-white/70 dark:bg-ink-800/50 backdrop-blur-md p-6 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-0.5 transition-all duration-300">
                      {/* Step number with ring */}
                      <div className="flex items-center gap-3">
                        <div className="relative shrink-0">
                          <svg className="h-10 w-10" viewBox="0 0 40 40">
                            <circle
                              cx="20"
                              cy="20"
                              r="17"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-ink-200 dark:text-ink-700"
                            />
                            <motion.circle
                              cx="20"
                              cy="20"
                              r="17"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              className="text-brand-500"
                              strokeDasharray={`${((i + 1) / researchPipeline.length) * 107} 107`}
                              initial={{ strokeDashoffset: 107 }}
                              whileInView={{ strokeDashoffset: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.1 }}
                              transform="rotate(-90 20 20)"
                            />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-brand-700 dark:text-brand-300">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                            Step {i + 1}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-ink-100">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                        {step.description}
                      </p>

                      {/* Hover gradient accent */}
                      <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                    <div className="relative">
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08, type: "spring" }}
                        className="grid h-12 w-12 place-items-center rounded-full border-2 border-brand-300 dark:border-brand-600 bg-white dark:bg-ink-900 text-brand-600 dark:text-brand-400 shadow-lg shadow-brand-500/10 ring-4 ring-brand-50/60 dark:ring-brand-900/40"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                      </motion.span>
                      {!isLast && (
                        <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 text-brand-400 dark:text-brand-500">
                          <ArrowDown className="h-4 w-4 animate-bounce" />
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
