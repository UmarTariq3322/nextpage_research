import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";

import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 dark:border-ink-800 bg-navy-950 dark:bg-ink-950 text-ink-200">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
            >
              <Image
                src="/logo.png"
                alt="Nexpage Research"
                width={664}
                height={681}
                className="h-20 w-auto object-contain"
                sizes="80px"
              />
            </Link>

            <p className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Turn the next page of your Research Journey
            </p>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-400">
              A research and innovation division of Nexpage Technologies. We
              combine rigorous research methodology, modern AI, and dedicated
              mentorship to help turn ideas into evidence-driven, published
              work.
            </p>

            <div className="mt-8 flex items-center gap-2">
              {[
                { Icon: Linkedin, href: footerLinks.connect[0].href, label: "LinkedIn" },
                { Icon: Github, href: footerLinks.connect[1].href, label: "GitHub" },
                { Icon: Youtube, href: footerLinks.connect[2].href, label: "YouTube" },
                { Icon: Instagram, href: footerLinks.connect[3].href, label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-ink-800 bg-navy-900/50 text-ink-300 transition hover:border-brand-600/50 hover:bg-navy-800 hover:text-brand-400"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Research
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {footerLinks.research.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-ink-400 transition hover:text-brand-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Programs
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {footerLinks.programs.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-ink-400 transition hover:text-brand-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {footerLinks.company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-ink-400 transition hover:text-brand-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Connect
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {footerLinks.connect.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-ink-400 transition hover:text-brand-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Nexpage Technologies. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-500">
            <Link href="/about" className="hover:text-brand-400">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-brand-400">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-brand-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
