import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Lightbulb,
  Brain,
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Nexpage Research is a research and innovation division of Nexpage Technologies. We combine rigorous research methodology with modern AI to help researchers move from ideas to published work.",
  alternates: {
    canonical: "/about",
  },
};

const researchAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI & LLMs",
  "Data Science",
  "Cybersecurity",
  "Natural Language Processing",
  "Systematic Reviews",
  "Meta-Analysis",
  "Applied Statistics",
  "Research Automation",
  "Research Methodology",
  "Publication Support",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-brand bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <div className="container">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-5">
              About Nexpage Research
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              A research and innovation division of{" "}
              <span className="bg-gradient-to-br from-brand-600 via-brand-600 to-brand-500 bg-clip-text text-transparent">
                Nexpage Technologies
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              We exist to make high-quality research accessible to everyone who
              has a serious question to answer. Our philosophy combines
              methodological rigor, modern AI and data tooling, and hands-on
              mentorship so ideas become impactful, published work.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Work with us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore our services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A research-led team, not a course factory."
              description="Nexpage Research is a research and innovation division of Nexpage Technologies. We are methodologists, AI researchers, statisticians, and writers who work on real research every day. We bring that hands-on experience to every collaboration and program we run."
            />
          </div>
          <div className="grid gap-4">
            {[
              {
                Icon: Target,
                title: "Why we exist",
                text: "Good research is too often blocked by access to methodology, training, and tooling. We build structures to remove those blockers for students, researchers, and organizations with serious questions to pursue.",
              },
              {
                Icon: Lightbulb,
                title: "Our research philosophy",
                text: "Rigour first. Research questions deserve honest methods, transparent reporting, and careful interpretation. AI amplifies our methods without replacing the responsibility of the researcher.",
              },
              {
                Icon: Brain,
                title: "Research + AI",
                text: "We use AI and data tooling to accelerate the repetitive parts of research—search, extraction, initial analysis—while protecting the parts where human judgment and expertise are irreplaceable.",
              },
              {
                Icon: Compass,
                title: "Our approach",
                text: "Clear scope, structured plans, transparent timelines, and direct communication. Every engagement, whether consulting or a cohort program, is designed around your actual research goals.",
              },
            ].map(({ Icon, title, text }) => (
              <Card key={title} className="p-6">
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink-900">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                      {text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-ink-50/60">
        <div className="container">
          <SectionHeading
            eyebrow="Where we work"
            title="Research Areas"
            description="A cross-disciplinary scope that allows us to collaborate across computing, engineering, sciences, social sciences, and business."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {researchAreas.map((area) => (
              <Badge key={area} variant="outline" className="px-3 py-1.5 text-sm bg-white">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-10 sm:p-14 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700">
                <Sparkles className="h-3.5 w-3.5" />
                Let's build something credible together.
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
                Have a research question?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
                Whether you're at the very beginning of an idea or preparing for
                submission, we can design a collaboration that meets you where
                you are.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start Your Research
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">View all services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
