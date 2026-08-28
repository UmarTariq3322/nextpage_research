"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-brand bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Animated gradient border */}
          <div
            className="absolute -inset-px rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(45,212,191,0.5), rgba(139,92,246,0.3), rgba(45,212,191,0.1), rgba(139,92,246,0.5))",
              backgroundSize: "300% 300%",
              animation: "ctaGradient 4s ease infinite",
            }}
          />

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-50 dark:from-ink-900 dark:via-ink-900 dark:to-ink-800 p-10 shadow-xl shadow-brand-500/5 sm:p-14 lg:p-16">
            {/* Floating gradient blobs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
              style={{ animation: "float 8s ease-in-out infinite" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl"
              style={{ animation: "float 10s ease-in-out infinite reverse" }}
            />

            {/* Floating sparkle particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                aria-hidden="true"
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: `${3 + Math.random() * 5}px`,
                  height: `${3 + Math.random() * 5}px`,
                  background: `rgba(45, 212, 191, ${0.2 + Math.random() * 0.3})`,
                  top: `${10 + Math.random() * 80}%`,
                  left: `${5 + Math.random() * 90}%`,
                  animation: `floatStar ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite`,
                }}
              />
            ))}

            <div className="relative mx-auto max-w-3xl text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 dark:border-brand-700/60 bg-white/70 dark:bg-ink-800/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-brand-700 dark:text-brand-300 shadow-lg shadow-brand-500/10"
              >
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                Have an idea? Let&apos;s structure it.
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-950 dark:text-ink-50 sm:text-4xl lg:text-5xl"
              >
                Have a Research Idea?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg"
              >
                Let&apos;s turn your research question into a structured, evidence-driven project.
                Whether you&apos;re at the earliest stage or preparing a manuscript, we can meet you where you are.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                {/* Button with shine effect */}
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
                  <Button asChild size="lg" className="relative overflow-hidden shadow-lg shadow-brand-500/20 hover:shadow-xl hover:shadow-brand-500/30 transition-all">
                    <Link href="/contact">
                      Start Your Research
                      <ArrowRight className="h-4 w-4" />
                      {/* Shine sweep */}
                      <span
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{ animation: "shine 3s ease-in-out infinite" }}
                      />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes ctaGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatStar {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-12px) scale(1.3); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
