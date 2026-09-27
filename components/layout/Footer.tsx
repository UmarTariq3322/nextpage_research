import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/components/layout/Logo";
import { site } from "@/content/site";

const nav = [
  { label: "Academy", href: "/academy" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Research Community", href: "/community" },
  { label: "Research", href: "/workflow" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-fg-soft">
              Research education and collaboration, from research ideas to publishable evidence.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-[repeat(3,max-content)] sm:gap-x-10">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-fg-soft transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-2.5 text-sm">
            <a href={`mailto:${site.email}`} className="block break-all text-fg-soft transition-colors hover:text-fg">
              {site.email}
            </a>
            <a
              href={site.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-fg-soft transition-colors hover:text-fg"
            >
              WhatsApp {site.whatsapp.display}
            </a>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-0.5 font-medium text-fg transition-colors hover:text-accent"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-fg-mute transition-colors group-hover:text-accent" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-1 border-t border-line pt-6 text-xs text-fg-mute sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Nexpage Research. Supported by {site.parent}.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
