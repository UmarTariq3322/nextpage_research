import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { PageHero, Section } from "@/components/site/primitives";
import { ContactForm } from "@/app/contact/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nexpage Research about the Academy or the Research Community by email, WhatsApp, Instagram, Facebook or LinkedIn.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: "WhatsApp", value: site.whatsapp.display, href: site.whatsapp.link, icon: MessageCircle, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Nexpage Research."
        lead="Ask about the Academy, join the Research Community or tell us about a research idea."
      />

      <Section size="compact">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <aside aria-labelledby="direct-title">
            <h2 id="direct-title" className="t-label">
              Direct
            </h2>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line text-fg-soft transition-colors group-hover:border-accent/40 group-hover:text-accent">
                      <c.icon className="h-[18px] w-[18px]" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-fg-mute">{c.label}</span>
                      <span className="block break-all font-medium text-fg transition-colors group-hover:text-accent">
                        {c.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-fg-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="t-label mt-12">Follow</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-accent"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-fg-mute transition-colors group-hover:text-accent" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-sm text-fg-mute">
              {site.name} · {site.domain}
            </p>
          </aside>

          <div className="rounded-lg border border-line bg-surface p-6 shadow-md sm:p-10">
            <h2 className="t-h3 text-2xl">Send a message</h2>
            <p className="mt-2 text-sm text-fg-soft">
              Your message opens in your email app or WhatsApp, ready to send. Nothing is stored on this website.
            </p>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Section>
    </>
  );
}
