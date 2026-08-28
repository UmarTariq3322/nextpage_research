"use client";

import { motion } from "framer-motion";
import {
  Compass,
  BarChart3,
  BookOpenCheck,
  Users2,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Methodology & Study Design",
    description:
      "We help frame hypotheses, define rigorous study protocols, and develop reliable frameworks designed to withstand peer review.",
    gradient: "from-blue-500 to-indigo-500",
    iconBg: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    glowColor: "hover:shadow-blue-500/20",
  },
  {
    icon: BarChart3,
    title: "Statistical & Data Analysis",
    description:
      "From power analysis and hypothesis testing to advanced biostatistics and data modeling, ensuring analytical validity.",
    gradient: "from-brand-500 to-teal-500",
    iconBg: "bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400",
    glowColor: "hover:shadow-brand-500/20",
  },
  {
    icon: BookOpenCheck,
    title: "Publication & Manuscript Support",
    description:
      "Guidance through academic writing, PRISMA/CONSORT reporting guidelines, journal selection, and reviewer response strategies.",
    gradient: "from-violet-500 to-purple-500",
    iconBg: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    glowColor: "hover:shadow-purple-500/20",
  },
  {
    icon: Users2,
    title: "Dedicated Mentorship & Advisory",
    description:
      "Hands-on, 1-on-1 guidance tailored to students, medical scholars, academic faculty, and industry researchers at every step.",
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    glowColor: "hover:shadow-amber-500/20",
  },
];

export function WhatIsNexpageSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-white dark:bg-ink-950 border-b border-ink-100 dark:border-ink-800">
      {/* Animated mesh gradient BG */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(45,212,191,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 0%, rgba(45,212,191,0.1) 0%, transparent 40%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 dark:opacity-5"
      />

      <div className="container">
        {/* Top Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 dark:border-brand-700/60 bg-white/60 dark:bg-ink-900/60 backdrop-blur-md px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300 shadow-lg shadow-brand-500/10"
          >
            <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-400" />
            What is Nexpage Research
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl lg:text-5xl"
          >
            A dedicated ecosystem turning research questions into published impact.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg"
          >
            As the dedicated research and innovation division of{" "}
            <span className="text-brand-600 dark:text-brand-400 font-semibold">Nexpage Technologies</span>,
            we provide a robust ecosystem for academic and clinical discovery. Our mission is to empower students, researchers, and institutions with rigorous methodological frameworks, advanced statistical intelligence, and expert publication strategy—transforming complex ideas into high-impact, peer-reviewed literature.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Gradient border wrapper */}
                <div className="group relative h-full">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-brand-400/40 group-hover:via-violet-400/20 group-hover:to-brand-400/40 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                  <div className={`relative flex h-full flex-col rounded-2xl border border-ink-200/80 dark:border-ink-700/80 bg-white dark:bg-ink-900 p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl ${pillar.glowColor}`}>
                    {/* Number indicator */}
                    <span className="absolute top-5 right-5 text-4xl font-bold text-ink-100 dark:text-ink-800/50 select-none font-display">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div
                      className={`grid h-14 w-14 place-items-center rounded-2xl ${pillar.iconBg} ring-1 ring-ink-200/50 dark:ring-ink-700/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>

                    <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 dark:text-ink-100">
                      {pillar.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                      {pillar.description}
                    </p>

                    {/* Bottom gradient accent */}
                    <div className={`mt-auto pt-5`}>
                      <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500`} />
                    </div>
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
