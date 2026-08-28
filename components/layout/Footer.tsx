import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Youtube, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0077B5] hover:bg-[#0077B5]/10" },
  { Icon: Github, href: "#", label: "GitHub", color: "hover:text-white hover:bg-white/10" },
  { Icon: Youtube, href: "#", label: "YouTube", color: "hover:text-[#FF0000] hover:bg-[#FF0000]/10" },
  { Icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#E1306C] hover:bg-[#E1306C]/10" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-800/40 bg-[#040914] text-ink-400 overflow-hidden">
      {/* Very subtle glow effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/5 blur-[120px] rounded-full"
      />

      <div className="container relative py-20 lg:py-24 flex flex-col items-center text-center">
        <Link
          href="/"
          className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg transition-transform hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="Nexpage Research"
            width={664}
            height={681}
            className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            sizes="64px"
          />
        </Link>

        <p className="mt-8 max-w-md text-base leading-relaxed text-ink-300 font-medium">
          Turn Research Ideas Into Impactful Work.
        </p>
        
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-500">
          The research and innovation division of Nexpage Technologies. Empowering students, researchers, and institutions with rigorous methodology and expert publication support.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="mailto:research@nexpage.io"
            className="inline-flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900/50 px-5 py-2 text-sm font-medium text-ink-300 transition-all hover:border-brand-500/50 hover:text-brand-400 hover:bg-brand-950/30"
          >
            <Mail className="h-4 w-4" />
            research@nexpage.io
          </a>
        </div>

        <div className="mt-12 flex items-center gap-3">
          {socialLinks.map(({ Icon, href, label, color }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className={`grid h-11 w-11 place-items-center rounded-full bg-ink-900/40 text-ink-400 transition-all duration-300 ${color}`}
            >
              <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
            </Link>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between w-full border-t border-ink-800/40 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} <span className="text-ink-300 font-medium">Nexpage Technologies</span>. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 text-sm font-medium text-ink-500 sm:mt-0">
            <Link href="/about" className="hover:text-brand-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-brand-400 transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-brand-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
