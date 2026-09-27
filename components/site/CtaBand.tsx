import Link from "next/link";

import { Arrow, Button } from "@/components/ui/button";
import { primaryCta, site } from "@/content/site";

type Cta = { label: string; href: string };

export function CtaBand({
  title = "Have a research idea?",
  body = "Start learning, build your research skills and become part of a community working on meaningful research.",
  primary = primaryCta,
  secondary = { label: "Contact Nexpage", href: "/contact" },
  showDirect = false,
}: {
  title?: string;
  body?: string;
  primary?: Cta;
  secondary?: Cta;
  /** Show email and WhatsApp for visitors who prefer to reach out directly. */
  showDirect?: boolean;
}) {
  return (
    <section className="band relative overflow-hidden" aria-labelledby="cta-title">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_bottom_right,black,transparent_70%)]" />
      <div className="container relative py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <h2 id="cta-title" className="t-display max-w-3xl text-[2.5rem] sm:text-6xl">
              {title}
            </h2>
            <p className="t-lead mt-6 max-w-xl">{body}</p>
            {showDirect && (
              <p className="mt-8 text-sm text-fg-mute">
                Prefer to talk first?{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg">
                  Email us
                </a>{" "}
                or{" "}
                <a
                  href={site.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg"
                >
                  message us on WhatsApp
                </a>
                .
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild size="lg">
              <Link href={primary.href}>
                {primary.label}
                <Arrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
