"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  FlaskConical,
  BarChart3,
  BookOpenCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/canvas/HeroCanvas";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-50/50 dark:bg-ink-950">
      <HeroCanvas />

      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-brand bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dark:bg-grid-slate"
      />

      {/* Animated gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl animate-pulse-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-600/10"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -right-32 -z-10 h-[350px] w-[350px] rounded-full bg-brand-300/10 blur-3xl dark:bg-brand-700/10"
        style={{ animation: "float 10s ease-in-out infinite reverse" }}
      />

      <div className="container pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center w-full">
            {/* Glassmorphic badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/60 dark:bg-ink-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-brand-700 dark:text-brand-300 shadow-lg shadow-brand-500/10"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Turn Research Ideas Into Impactful Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 dark:text-ink-50 sm:text-5xl lg:text-6xl xl:text-[64px]"
            >
              Turn the next page of your{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-br from-navy-800 via-navy-700 to-brand-600 dark:from-brand-300 dark:via-brand-400 dark:to-brand-500 bg-clip-text text-transparent">
                  Research Journey
                </span>
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 320 16"
                  className="absolute -bottom-3 left-0 h-3 w-[330px] max-w-full text-brand-500/50"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                >
                  <motion.path
                    d="M2 11 C 90 2, 230 2, 318 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
              className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-ink-600 dark:text-ink-300 sm:text-xl"
            >
              Research methodology, statistical analysis, mentorship, and
              publication support for students, researchers, academics, and healthcare professionals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Button asChild size="lg" className="shadow-lg shadow-brand-500/20 hover:shadow-xl hover:shadow-brand-500/30 transition-shadow">
                <Link href="/contact">
                  Start Your Research
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="backdrop-blur-sm bg-white/70 dark:bg-ink-900/70">
                <Link href="/services">Explore Research Services</Link>
              </Button>
            </motion.div>

            {/* Stats bar with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-12 grid max-w-xl grid-cols-3 gap-6 rounded-2xl border border-ink-200/50 dark:border-ink-700/50 bg-white/50 dark:bg-ink-900/50 backdrop-blur-md p-6 mx-auto w-full text-center shadow-sm"
            >
              {[
                { icon: FlaskConical, label: "Rigorous Methodology", desc: "Research-grade design" },
                { icon: BarChart3, label: "Statistical Analysis", desc: "Data-driven insights" },
                { icon: BookOpenCheck, label: "Publication Support", desc: "From draft to venue" },
              ].map((i, idx) => {
                const Icon = i.icon;
                return (
                  <div key={i.label} className="flex flex-col items-center gap-2">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 ring-1 ring-brand-100 dark:ring-brand-800/50">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <p className="text-sm font-semibold text-ink-900 dark:text-ink-100">
                      {i.label}
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">{i.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Float keyframe via inline style */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
