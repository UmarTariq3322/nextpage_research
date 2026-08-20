"use client";

import { useState } from "react";
import {
  ArrowRight,
  Send,
  Mail,
  Phone,
  MapPin,
  Users,
  BookOpenCheck,
  Beaker,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researchLevels, serviceOptions, researchAreas } from "@/data/navigation";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  researchLevel: string;
  researchArea: string;
  serviceRequired: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  researchLevel: "",
  researchArea: "",
  serviceRequired: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  else if (values.name.trim().length < 2) errors.name = "Name is too short";

  if (!values.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter a valid email address";

  if (values.phone && !/^[+]?[\d\s\-().]{7,20}$/.test(values.phone.trim()))
    errors.phone = "Enter a valid phone number";

  if (!values.researchLevel)
    errors.researchLevel = "Please select your research level";

  if (!values.researchArea)
    errors.researchArea = "Please select a research area";

  if (!values.serviceRequired)
    errors.serviceRequired = "Please select a service";

  if (!values.message.trim()) errors.message = "Please include a short message";
  else if (values.message.trim().length < 10)
    errors.message = "Message should be a bit more detailed";

  return errors;
}

export default function ContactPageClient() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) {
      setErrors((e) => {
        const n = { ...e };
        delete n[key];
        return n;
      });
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="container pt-16 pb-24 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-ink-200 bg-white p-10 text-center shadow-sm sm:p-14">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Thank you — message received.
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-600">
              We typically respond within one business day. In the meantime,
              feel free to browse our services, programs, and publications.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="/">
                  Back to home
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/services">Browse services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-brand bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <div className="container">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-5">
              Contact
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Start a research{" "}
              <span className="bg-gradient-to-br from-brand-600 to-brand-500 bg-clip-text text-transparent">
                conversation.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Tell us a little about where you are, what you're working on, and
              how you'd like us to help. We'll get back to you quickly with a
              clear next step.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-24 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-5">
            {[
              {
                Icon: Mail,
                label: "Email",
                value: "research@nexpagetechnologies.com",
                href: "mailto:research@nexpagetechnologies.com",
              },
              {
                Icon: Phone,
                label: "Phone",
                value: "+92 XXX XXXXXXX",
                href: "tel:+920000000000",
              },
              {
                Icon: MapPin,
                label: "Office",
                value: "Nexpage Technologies HQ",
                href: "#",
              },
            ].map(({ Icon, label, value, href }) => (
              <Card key={label} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      {label}
                    </p>
                    <a
                      href={href}
                      className="mt-1 block text-sm font-semibold text-ink-900 hover:text-brand-700 transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 border-brand-200 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/60">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
                  <Beaker className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-semibold text-ink-900">What to expect</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-ink-700">
                {[
                  { Icon: MessageSquare, t: "A short intro call or email reply" },
                  { Icon: Users, t: "Scope discussion and goals" },
                  { Icon: BookOpenCheck, t: "Proposal with recommended services" },
                  { Icon: Send, t: "Clear next steps to begin" },
                ].map(({ Icon, t }) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </aside>

          <div className="lg:col-span-8">
            <form
              noValidate
              onSubmit={onSubmit}
              className="rounded-3xl border border-ink-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
            >
              <h2 className="text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-ink-600">
                Fields marked with <span className="text-rose-600">*</span> are required.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-rose-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={cn(errors.name && "border-rose-400 focus-visible:ring-rose-500/20")}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-rose-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-rose-600">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(errors.email && "border-rose-400 focus-visible:ring-rose-500/20")}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-rose-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    placeholder="+92 XXX XXXXXXX"
                    className={cn(errors.phone && "border-rose-400 focus-visible:ring-rose-500/20")}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-rose-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization / University</Label>
                  <Input
                    id="organization"
                    autoComplete="organization"
                    value={values.organization}
                    onChange={(e) => update("organization", e.target.value)}
                    placeholder="Optional"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="researchLevel">
                    Research Level <span className="text-rose-600">*</span>
                  </Label>
                  <select
                    id="researchLevel"
                    value={values.researchLevel}
                    onChange={(e) => update("researchLevel", e.target.value)}
                    aria-invalid={!!errors.researchLevel}
                    aria-describedby={errors.researchLevel ? "researchLevel-error" : undefined}
                    className={cn(
                      "flex h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm text-ink-900 shadow-sm transition-colors focus-visible:border-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/20",
                      errors.researchLevel && "border-rose-400 focus-visible:ring-rose-500/20"
                    )}
                  >
                    <option value="">Select an option</option>
                    {researchLevels.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.researchLevel && (
                    <p id="researchLevel-error" className="text-xs text-rose-600">
                      {errors.researchLevel}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="researchArea">
                    Research Area <span className="text-rose-600">*</span>
                  </Label>
                  <select
                    id="researchArea"
                    value={values.researchArea}
                    onChange={(e) => update("researchArea", e.target.value)}
                    aria-invalid={!!errors.researchArea}
                    aria-describedby={errors.researchArea ? "researchArea-error" : undefined}
                    className={cn(
                      "flex h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm text-ink-900 shadow-sm transition-colors focus-visible:border-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/20",
                      errors.researchArea && "border-rose-400 focus-visible:ring-rose-500/20"
                    )}
                  >
                    <option value="">Select an option</option>
                    {researchAreas.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.researchArea && (
                    <p id="researchArea-error" className="text-xs text-rose-600">
                      {errors.researchArea}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="serviceRequired">
                    Service Required <span className="text-rose-600">*</span>
                  </Label>
                  <select
                    id="serviceRequired"
                    value={values.serviceRequired}
                    onChange={(e) => update("serviceRequired", e.target.value)}
                    aria-invalid={!!errors.serviceRequired}
                    aria-describedby={errors.serviceRequired ? "serviceRequired-error" : undefined}
                    className={cn(
                      "flex h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm text-ink-900 shadow-sm transition-colors focus-visible:border-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/20",
                      errors.serviceRequired && "border-rose-400 focus-visible:ring-rose-500/20"
                    )}
                  >
                    <option value="">Select an option</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.serviceRequired && (
                    <p id="serviceRequired-error" className="text-xs text-rose-600">
                      {errors.serviceRequired}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">
                    Message <span className="text-rose-600">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Briefly describe your research question, timeline, and how you'd like us to help."
                    className={cn(errors.message && "border-rose-400 focus-visible:ring-rose-500/20")}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-rose-600">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-ink-500">
                  Your information is used only to respond to this inquiry.
                </p>
                <Button type="submit" size="lg">
                  Send message
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
