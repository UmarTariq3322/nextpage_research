"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessagesSquare,
  BookOpen,
  Wrench,
  UserCheck,
  Users,
  FileCheck2,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    Icon: MessagesSquare,
    title: "Research discussions",
    desc: "Discuss problems, methods, and drafts with peers and mentors.",
  },
  {
    Icon: BookOpen,
    title: "Paper reading groups",
    desc: "Read recent papers together and share structured summaries.",
  },
  {
    Icon: Wrench,
    title: "Workshops",
    desc: "Hands-on workshops on methodology, stats, AI, and writing.",
  },
  {
    Icon: UserCheck,
    title: "Mentorship",
    desc: "Access to experienced researchers for guidance and feedback.",
  },
  {
    Icon: Users,
    title: "Research collaborations",
    desc: "Find collaborators with complementary skills and interests.",
  },
  {
    Icon: FileCheck2,
    title: "Publication guidance",
    desc: "Targeting venues, formatting, and responding to reviewers.",
  },
  {
    Icon: Briefcase,
    title: "Research opportunities",
    desc: "Early access to projects, roles, and collaborations.",
  },
];

export function CommunitySection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container">
        <div className="overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-950 text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-brand opacity-[0.06]"
          />
          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-12 lg:p-14">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                  Community
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Join the Nexpage Research Community
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-ink-300 sm:text-base">
                  A space for students, researchers, and practitioners who take
                  research seriously. Learn, share, collaborate, and publish—
                  with a community that values methodology and rigor.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-ink-900 hover:bg-ink-100 shadow-lg shadow-ink-900/10"
                  >
                    <Link href="/contact">
                      Join Research Community
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((b, i) => {
                  const { Icon } = b;
                  return (
                    <motion.div
                      key={b.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm hover:border-brand-500/30 hover:bg-white/[0.06] transition-colors">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-brand-300 ring-1 ring-brand-400/20">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white">
                            {b.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-ink-400">
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
