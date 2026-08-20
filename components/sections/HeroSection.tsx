"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  FileText,
  BrainCircuit,
  Network,
  Database,
  LineChart,
  Microscope,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/canvas/HeroCanvas";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-50/50 dark:bg-ink-950">
      <HeroCanvas />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-brand bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dark:bg-grid-slate"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div className="container pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/70 px-3.5 py-1.5 text-xs font-medium text-brand-700 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Turn the next page of your Research Journey
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 dark:text-ink-50 sm:text-5xl lg:text-6xl xl:text-[64px]"
            >
              Turn Research Ideas Into{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-br from-navy-800 via-navy-700 to-brand-600 dark:from-brand-300 dark:via-brand-400 dark:to-brand-500 bg-clip-text text-transparent">
                  Impactful Work
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 16"
                  className="absolute -bottom-3 left-0 h-3 w-[330px] max-w-full text-brand-500/50"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 11 C 90 2, 230 2, 318 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl"
            >
              Research methodology, AI-powered analysis, mentorship, and
              publication support for students, researchers, academics, and
              organizations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Research
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Research Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-ink-200 pt-8"
            >
              {[
                { label: "Rigorous Methodology", desc: "Research-grade design" },
                { label: "AI-Assisted Workflows", desc: "Faster, reproducible" },
                { label: "Publication Support", desc: "From draft to venue" },
              ].map((i) => (
                <div key={i.label}>
                  <p className="text-sm font-semibold text-ink-900">
                    {i.label}
                  </p>
                  <p className="mt-1 text-xs text-ink-500">{i.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-ink-200 bg-white/80 p-5 shadow-xl shadow-ink-900/5 backdrop-blur-sm sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                    <Microscope className="h-3 w-3" />
                    Research Workspace
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-5 gap-4">
                  <div className="col-span-3 space-y-4">
                    <div className="rounded-2xl border border-ink-200 bg-ink-50/60 p-4">
                      <div className="flex items-center gap-2 text-xs font-medium text-ink-700">
                        <FileText className="h-3.5 w-3.5 text-brand-600" />
                        Manuscript
                      </div>
                      <div className="mt-3 space-y-1.5">
                        <div className="h-2 w-11/12 rounded bg-ink-200/80" />
                        <div className="h-2 w-10/12 rounded bg-ink-200/60" />
                        <div className="h-2 w-8/12 rounded bg-ink-200/50" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between text-xs font-medium text-ink-700">
                        <span className="flex items-center gap-2">
                          <BarChart3 className="h-3.5 w-3.5 text-brand-600" />
                          Results
                        </span>
                        <span className="text-[10px] text-ink-500">
                          Statistically significant
                        </span>
                      </div>
                      <div className="mt-3 flex items-end gap-1.5 h-20">
                        {[55, 72, 48, 88, 64, 92, 70].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.06 }}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-brand-500 to-brand-400"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between text-xs font-medium text-ink-700">
                        <span className="flex items-center gap-2">
                          <Database className="h-3.5 w-3.5 text-amber-600" />
                          Dataset
                        </span>
                        <span className="text-[10px] text-ink-500">
                          Clean · Validated
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-4 gap-1.5 text-[10px] text-ink-600">
                        {["ID", "Feature A", "Feature B", "Label"].map((c) => (
                          <div
                            key={c}
                            className="rounded-md bg-ink-100 px-2 py-1 font-semibold text-ink-700"
                          >
                            {c}
                          </div>
                        ))}
                        {Array.from({ length: 8 }).map((_, i) =>
                          ["ID", "A", "B", "L"].map((_, j) => (
                            <div
                              key={`${i}-${j}`}
                              className="rounded-md bg-ink-50 px-2 py-1 text-ink-500"
                            >
                              {j === 0 ? i + 1 : "—"}
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 space-y-4">
                    <div className="rounded-2xl border border-ink-200 bg-gradient-to-br from-brand-600 to-brand-700 p-4 text-white shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-medium opacity-90">
                        <BrainCircuit className="h-3.5 w-3.5" />
                        AI Analysis
                      </div>
                      <p className="mt-3 text-xs leading-relaxed opacity-90">
                        Identified 3 key research gaps · 24% faster with LLM-assisted extraction
                      </p>
                      <div className="mt-4 rounded-xl bg-white/15 p-2.5 backdrop-blur">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "74%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full rounded-full bg-white"
                          />
                        </div>
                        <div className="mt-1.5 flex justify-between text-[10px] opacity-80">
                          <span>Progress</span>
                          <span>74%</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-medium text-ink-700">
                        <Network className="h-3.5 w-3.5 text-brand-600" />
                        Knowledge Graph
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-1.5">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <span
                            key={i}
                            className="grid aspect-square place-items-center rounded-md border border-ink-200 bg-ink-50 text-[9px] font-semibold text-ink-600"
                          >
                            {["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"][i]}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between text-xs font-medium text-ink-700">
                        <span className="flex items-center gap-2">
                          <LineChart className="h-3.5 w-3.5 text-sky-600" />
                          Experiment
                        </span>
                        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
                          Passed
                        </span>
                      </div>
                      <svg viewBox="0 0 120 60" className="mt-3 h-16 w-full">
                        <defs>
                          <linearGradient id="lg1" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" className="text-brand-500" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-brand-500" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 48 L16 40 L32 44 L48 28 L64 32 L80 18 L96 22 L112 10 L120 14 L120 60 L0 60 Z"
                          fill="url(#lg1)"
                          className="text-brand-500"
                        />
                        <path
                          d="M0 48 L16 40 L32 44 L48 28 L64 32 L80 18 L96 22 L112 10 L120 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-brand-600"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: ["0px", "-10px", "0px"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 -top-6 rounded-2xl border border-ink-200 bg-white px-4 py-3 shadow-lg shadow-ink-900/5"
              >
                <div className="flex items-center gap-2">
                  <div className="grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-brand-600">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-ink-900">
                      New insight
                    </p>
                    <p className="text-[10px] text-ink-500">Gap identified</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: ["0px", "10px", "0px"] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute -bottom-6 -right-4 rounded-2xl border border-ink-200 bg-white px-4 py-3 shadow-lg shadow-ink-900/5"
              >
                <div className="flex items-center gap-2">
                  <div className="grid h-7 w-7 place-items-center rounded-lg bg-brand-50 text-brand-600">
                    <FileText className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-ink-900">
                      Manuscript
                    </p>
                    <p className="text-[10px] text-ink-500">Draft ready</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
