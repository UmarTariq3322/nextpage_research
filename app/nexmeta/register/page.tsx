import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck } from "lucide-react";

import { SectionLabel } from "@/components/ui/section-heading";
import { RegistrationForm } from "@/components/nexmeta/RegistrationForm";
import { course, registrationDeadline } from "@/content/nexmeta";

export const metadata: Metadata = {
  title: "Register for NexMeta — The Complete Science of Meta-Analysis",
  description:
    "Official registration portal for NexMeta by Nexpage Research. Secure your seat in the systematic review and meta-analysis cohort.",
  alternates: { canonical: "/nexmeta/register" },
};

export default function NexMetaRegisterPage() {
  return (
    <div id="register" className="min-h-screen bg-subtle py-12 lg:py-16">
      <div className="container max-w-5xl">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/nexmeta"
            className="group inline-flex items-center gap-2 text-sm font-medium text-fg-soft transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden />
            <span>Back to course overview &amp; curriculum</span>
          </Link>
        </div>

        {/* Portal Header */}
        <header className="mb-10 rounded-xl border border-line bg-surface p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <SectionLabel>{course.name} · Registration Portal</SectionLabel>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {registrationDeadline.cohort} · {registrationDeadline.seatNotice}
            </span>
          </div>

          <h1 className="t-h1 mt-4 text-3xl sm:text-4xl">
            {registrationDeadline.title}
          </h1>

          <p className="t-lead mt-3 max-w-3xl text-base sm:text-lg">
            Complete your registration in three quick steps. Choose your package (full course or single modules),
            provide your details, and submit your payment verification.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 border-t border-line pt-5 text-xs text-fg-mute">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" aria-hidden /> Deadline: {registrationDeadline.dateDisplay}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden /> Direct WhatsApp &amp; Email Confirmation
            </span>
            <span>· Instant Student ID for the final quiz</span>
          </div>
        </header>

        {/* The Registration Form */}
        <div className="rounded-xl border border-line bg-surface p-6 shadow-sm sm:p-10">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
