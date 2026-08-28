"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Beaker, FileText, Users, GraduationCap, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { metrics } from "@/data/content";

const IconMap: LucideIcon[] = [Beaker, FileText, Users, GraduationCap, Handshake];

function CountUp({ target, duration = 2 }: { target: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(target.replace(/[^0-9]/g, ""), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, numericValue, duration]);

  return <span ref={ref}>{count}</span>;
}

export function ImpactMetricsSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(45,212,191,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="container">
        {/* Glassmorphic container with animated gradient border */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Animated gradient border */}
          <div
            className="absolute inset-0 rounded-3xl p-px"
            style={{
              background: "linear-gradient(135deg, rgba(45,212,191,0.4), rgba(139,92,246,0.2), rgba(45,212,191,0.1), rgba(139,92,246,0.4))",
              backgroundSize: "300% 300%",
              animation: "gradientShift 6s ease infinite",
            }}
          />

          <div className="relative rounded-3xl bg-gradient-to-br from-white via-brand-50/40 to-white dark:from-ink-900 dark:via-ink-800/40 dark:to-ink-900 p-8 shadow-xl shadow-brand-500/5 sm:p-12 lg:p-14 backdrop-blur-sm m-px">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400">
                    Research impact
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
                    By the Numbers
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-400 sm:text-base">
                    Measurable outcomes that reflect our commitment to research
                    excellence, mentorship quality, and publication impact.
                  </p>
                </motion.div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {metrics.map((m, i) => {
                    const Icon = IconMap[i % IconMap.length];
                    return (
                      <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.08 }}
                        className="group relative overflow-hidden rounded-2xl border border-ink-200/60 dark:border-ink-700/60 bg-white/80 dark:bg-ink-800/50 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        {/* Subtle gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-violet-50/0 group-hover:from-brand-50/50 group-hover:to-violet-50/30 dark:group-hover:from-brand-900/20 dark:group-hover:to-violet-900/10 transition-all duration-300" />

                        <div className="relative flex items-center gap-3">
                          <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 ring-1 ring-brand-100 dark:ring-brand-800/50 group-hover:bg-brand-600 group-hover:text-white dark:group-hover:bg-brand-500 dark:group-hover:text-ink-950 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/20">
                            <Icon className="h-5 w-5" strokeWidth={2} />
                          </div>
                          <div>
                            <p className="font-display text-3xl font-bold text-ink-900 dark:text-ink-50">
                              <CountUp target={m.value} />
                              <span className="text-brand-600 dark:text-brand-400">+</span>
                            </p>
                            <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">{m.label}</p>
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
      </div>

      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
