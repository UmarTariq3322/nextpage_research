"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input, fieldClasses } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { disciplines } from "@/content/organization";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const interests = [
  { value: "academy", label: "The Academy" },
  { value: "community", label: "Joining the Research Community" },
  { value: "collaboration", label: "Research collaboration" },
  { value: "other", label: "Something else" },
] as const;

type Values = {
  name: string;
  email: string;
  discipline: string;
  interest: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Please write a short message (at least 10 characters).";
  return e;
}

function compose(v: Values) {
  const interest = interests.find((i) => i.value === v.interest)?.label ?? v.interest;
  const subject = `Nexpage Research enquiry: ${interest}`;
  const details = [`Name: ${v.name}`, `Email: ${v.email}`];
  if (v.discipline) details.push(`Discipline: ${v.discipline}`);
  details.push(`Interested in: ${interest}`);
  return { subject, body: `${details.join("\n")}\n\n${v.message.trim()}` };
}

export function ContactForm() {
  const params = useSearchParams();
  const initialInterest = interests.some((i) => i.value === params.get("interest")) ? params.get("interest")! : "academy";
  const module = params.get("module");

  const [values, setValues] = React.useState<Values>({
    name: "",
    email: "",
    discipline: "",
    interest: initialInterest,
    message: module && /^[A-I]$/.test(module) ? `I would like to know more about Module ${module}.\n\n` : "",
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [sentVia, setSentVia] = React.useState<"email" | "whatsapp" | null>(null);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function send(channel: "email" | "whatsapp") {
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    const { subject, body } = compose(values);
    const url =
      channel === "email"
        ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        : `${site.whatsapp.link}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`;
    if (channel === "email") window.location.href = url;
    else window.open(url, "_blank", "noopener,noreferrer");
    setSentVia(channel);
  }

  const fieldError = (key: keyof Values) =>
    errors[key] ? (
      <p id={`contact-${key}-error`} className="text-sm text-red-600 dark:text-red-400">
        {errors[key]}
      </p>
    ) : null;

  const errorProps = (key: keyof Values) => ({
    id: `contact-${key}`,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
  });

  return (
    <form
      noValidate
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        send("email");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full name</Label>
          <Input autoComplete="name" value={values.name} onChange={(e) => update("name", e.target.value)} {...errorProps("name")} />
          {fieldError("name")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            {...errorProps("email")}
          />
          {fieldError("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-discipline">
            Discipline <span className="font-normal text-fg-mute">(optional)</span>
          </Label>
          <select
            id="contact-discipline"
            value={values.discipline}
            onChange={(e) => update("discipline", e.target.value)}
            className={cn(fieldClasses, "h-11")}
          >
            <option value="">Select your field</option>
            {disciplines.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-interest">I am interested in</Label>
          <select
            id="contact-interest"
            value={values.interest}
            onChange={(e) => update("interest", e.target.value)}
            className={cn(fieldClasses, "h-11")}
          >
            {interests.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          placeholder="Tell us about your background, your research idea or your question."
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          {...errorProps("message")}
        />
        {fieldError("message")}
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button type="submit" size="lg">
          <Mail className="h-4 w-4" aria-hidden />
          Send by email
        </Button>
        <Button type="button" size="lg" variant="outline" onClick={() => send("whatsapp")}>
          <MessageCircle className="h-4 w-4" aria-hidden />
          Send on WhatsApp
        </Button>
      </div>

      <p role="status" aria-live="polite" className="text-sm text-fg-soft">
        {sentVia === "email" &&
          `Your email app should now be open with the message ready to send. If nothing happened, email us directly at ${site.email}.`}
        {sentVia === "whatsapp" && "WhatsApp opened in a new tab with your message ready to send."}
      </p>
    </form>
  );
}
