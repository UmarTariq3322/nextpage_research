"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
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

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researchServices } from "@/data/services";

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

export function ServicesPageClient() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-navy-50 opacity-70" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="pointer-events-none absolute -top-1/2 -right-1/4 -z-10 h-[800px] w-[800px] rounded-full bg-brand-200/30 blur-[100px]"
        />
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="default" className="mb-5 bg-brand-100 text-brand-700 hover:bg-brand-200 border-none shadow-sm">
              Research Services
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              End-to-end research services,{" "}
              <span className="bg-gradient-to-br from-brand-600 to-brand-500 bg-clip-text text-transparent">
                from idea to publication.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Choose a single service or combine them into a full research
              collaboration. Every engagement is tailored to your field,
              question, and timeline.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                <Link href="/contact">
                  Request a consultation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl hover:-translate-y-0.5 transition-all">
                <Link href="/contact">Talk to a researcher</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="pb-20 lg:pb-28 flex flex-col gap-16 lg:gap-24">
        {researchServices.map((service, i) => {
          const Icon = IconMap[service.icon] || Lightbulb;
          return (
            <div
              key={service.id}
              id={service.slug}
              className={`scroll-mt-24 w-full ${
                i % 2 === 1 ? "bg-ink-50/40 py-12 lg:py-16" : ""
              }`}
            >
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
                  <div className="lg:col-span-5">
                    <div className="sticky top-28">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-200 shadow-sm">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <h2 className="mt-5 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-ink-600">
                        {service.description}
                      </p>

                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-8">
                    <Card className="p-7 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <h3 className="text-lg font-semibold text-ink-900">
                        Problems we solve
                      </h3>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.problemsSolved.map((p) => (
                          <li key={p} className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                            <span className="text-sm text-ink-700">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card className="p-7 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <h3 className="text-lg font-semibold text-ink-900">
                        Typical deliverables
                      </h3>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5">
                            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                            <span className="text-sm text-ink-700">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card className="p-7 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <h3 className="text-lg font-semibold text-ink-900">
                        Process
                      </h3>
                      <ol className="mt-5 grid gap-4">
                        {service.process.map((step, idx) => (
                          <li
                            key={step.step}
                            className="flex gap-4 rounded-2xl border border-ink-100/50 bg-white/80 p-4 shadow-sm"
                          >
                            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-sm font-bold text-brand-700 ring-1 ring-brand-100">
                              {idx + 1}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-ink-900">
                                {step.step}
                              </p>
                              <p className="mt-0.5 text-sm text-ink-600">
                                {step.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </Card>

                    <Card className="p-7 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4.5 w-4.5 text-brand-600" />
                        <h3 className="text-lg font-semibold text-ink-900">
                          Frequently asked questions
                        </h3>
                      </div>
                      <div className="mt-5 grid gap-4">
                        {service.faq.map((qa) => (
                          <details
                            key={qa.question}
                            className="group rounded-2xl border border-ink-200/50 bg-white/80 p-5 open:bg-brand-50/30 transition-colors shadow-sm"
                          >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink-900">
                              <span>{qa.question}</span>
                              <span className="grid h-7 w-7 place-items-center rounded-lg border border-ink-200 bg-white text-ink-500 transition-transform group-open:rotate-180">
                                <ArrowRight className="h-3.5 w-3.5 -rotate-90" />
                              </span>
                            </summary>
                            <p className="mt-3 text-sm leading-relaxed text-ink-600">
                              {qa.answer}
                            </p>
                          </details>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </motion.section>
            </div>
          );
        })}
      </div>

      <section className="pb-20 lg:pb-28">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-900 via-navy-900 to-ink-900 p-10 sm:p-14 lg:p-16 text-white shadow-2xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-700 bg-brand-800/50 px-4 py-1.5 text-xs font-semibold text-brand-100 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Pricing by consultation
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-white">
                No generic pricing. Every project is scoped to your research.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
                Reach out to tell us about your research question, timeline,
                and goals. We'll recommend the right services and propose a
                scope that makes sense.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl shadow-lg hover:-translate-y-0.5 transition-all">
                  <Link href="/contact">
                    Request a consultation
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl transition-all text-white bg-transparent border-white/20 hover:bg-white/10">
                  <Link href="/programs">Explore programs instead</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
