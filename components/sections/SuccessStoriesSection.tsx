"use client";

import { motion } from "framer-motion";
import { Target, Compass, Trophy, ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { successStories } from "@/data/content";

export function SuccessStoriesSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-ink-50/60">
      <div className="container">
        <SectionHeading
          eyebrow="Case studies"
          title="From Research Idea to Publication"
          description="A selection of clearly-labeled demo case studies that illustrate how research journeys typically progress when methodology, mentorship, and AI-assisted workflows come together."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {successStories.map((story, i) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full overflow-hidden p-0 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5 transition-all">
                <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-6 text-white">
                  <Badge
                    variant="secondary"
                    className="bg-white/15 text-white border-0"
                  >
                    Demo / Placeholder
                  </Badge>
                  <h3 className="mt-4 text-xl font-semibold leading-snug">
                    {story.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-brand-100">
                    {story.category}
                  </p>
                </div>

                <div className="divide-y divide-ink-100">
                  {[
                    {
                      label: "Challenge",
                      text: story.challenge,
                      Icon: Target,
                      accent: "text-rose-600",
                      bg: "bg-rose-50",
                    },
                    {
                      label: "Approach",
                      text: story.approach,
                      Icon: Compass,
                      accent: "text-brand-600",
                      bg: "bg-brand-50",
                    },
                    {
                      label: "Outcome",
                      text: story.outcome,
                      Icon: Trophy,
                      accent: "text-brand-600",
                      bg: "bg-brand-50",
                    },
                  ].map(({ label, text, Icon, accent, bg }) => (
                    <div key={label} className="flex gap-4 p-6">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white ring-1 ring-ink-200">
                        <span className={`grid h-7 w-7 place-items-center rounded-lg ${bg} ${accent}`}>
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                          {label}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
