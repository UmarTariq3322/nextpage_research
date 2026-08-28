"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  FlaskConical,
  Briefcase,
  Heart,
  Stethoscope,
  Sparkles,
} from "lucide-react";

const founderCredentials = [
  { icon: GraduationCap, label: "MBBS — King Edward Medical University" },
  { icon: Stethoscope, label: "USMLE Step 1 Cleared" },
  { icon: FlaskConical, label: "Researcher & R Expert" },
  { icon: Code2, label: "Full-Stack Developer & SEO Specialist" },
  { icon: Briefcase, label: "Founder & CEO — Nexpage Technologies" },
];

const mentorCredentials = [
  { icon: Heart, label: "Cardiology Enthusiast" },
  { icon: Stethoscope, label: "Medical Research" },
  { icon: FlaskConical, label: "Clinical Innovation" },
];

export function MeetMentorSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-ink-50/30 to-white dark:from-ink-950 dark:via-ink-900/30 dark:to-ink-950">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-900/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-100/30 blur-3xl dark:bg-violet-900/15"
      />

      <div className="container relative space-y-28">

        {/* ─── Founder Block ─── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-brand-700 shadow-sm dark:border-brand-800 dark:bg-brand-900/40 dark:text-brand-300">
              <Sparkles className="h-4 w-4" />
              Founder & Visionary
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
              Meet the Founder
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
              <p>
                As a final year MBBS student at{" "}
                <strong className="font-semibold text-ink-900 dark:text-ink-100">
                  King Edward Medical University
                </strong>{" "}
                (the highest merit university in the country) who has
                successfully cleared USMLE Step 1, I blend rigorous medical
                knowledge with a deep passion for technology.
              </p>
              <p>
                Beyond medicine, I am a seasoned researcher, R expert, and
                instructor with a profound love for coding, SEO, and web
                development. This unique intersection of healthcare and tech
                inspired me to establish{" "}
                <strong className="font-semibold text-brand-600 dark:text-brand-400">
                  Nexpage Technologies
                </strong>
                .
              </p>
              <p>
                As Founder and CEO, I lead an agency specializing in digital
                marketing, SEO, web development, Amazon &amp; Shopify, and AI
                automation—empowering students, professionals, and businesses to
                turn their innovative ideas into impactful, evidence-driven work.
              </p>
            </div>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {founderCredentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <motion.span
                    key={cred.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-3.5 py-1.5 text-xs font-medium text-ink-700 dark:text-ink-200 shadow-sm transition-colors hover:border-brand-300 hover:bg-brand-50/60 dark:hover:border-brand-700 dark:hover:bg-brand-900/30"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
                    {cred.label}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-200/60 via-transparent to-violet-200/60 blur-sm dark:from-brand-800/30 dark:to-violet-800/30" />
            <div className="relative aspect-[3/4] w-full max-w-[320px] lg:max-w-[380px] overflow-hidden rounded-[24px] shadow-2xl ring-1 ring-ink-200/50 dark:ring-ink-700/50">
              <Image
                src="/founder.png"
                alt="Founder & CEO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 380px"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              {/* Name label */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-sm font-semibold text-white/90">
                  Founder & CEO
                </p>
                <p className="text-xs text-white/60">Nexpage Technologies</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Divider ─── */}
        <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-ink-300 to-transparent dark:via-ink-700" />

        {/* ─── Lead Mentor Block ─── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start order-last lg:order-first"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-violet-200/60 via-transparent to-brand-200/60 blur-sm dark:from-violet-800/30 dark:to-brand-800/30" />
            <div className="relative aspect-[3/4] w-full max-w-[320px] lg:max-w-[380px] overflow-hidden rounded-[24px] shadow-2xl ring-1 ring-ink-200/50 dark:ring-ink-700/50">
              <Image
                src="/mentor_photo.png"
                alt="Lead Mentor"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 380px"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              {/* Name label */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-sm font-semibold text-white/90">
                  Lead Research Mentor
                </p>
                <p className="text-xs text-white/60">Nexpage Research</p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-violet-700 shadow-sm dark:border-violet-800 dark:bg-violet-900/40 dark:text-violet-300">
              <Heart className="h-4 w-4" />
              Lead Mentor
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
              Meet your Lead Mentor
            </h2>

            <p className="mt-6 text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
              A medical student with a passion for cardiology and integrating
              technological advancements into medical practice. With a strong
              enthusiasm for research, they are eager to collaborate with
              professionals to explore new frontiers in medicine. Their
              dedication to innovation and excellence, alongside valuable
              hands-on experience, positions them to make meaningful
              contributions to the medical field and public health.
            </p>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {mentorCredentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <motion.span
                    key={cred.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-3.5 py-1.5 text-xs font-medium text-ink-700 dark:text-ink-200 shadow-sm transition-colors hover:border-violet-300 hover:bg-violet-50/60 dark:hover:border-violet-700 dark:hover:bg-violet-900/30"
                  >
                    <Icon className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                    {cred.label}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
