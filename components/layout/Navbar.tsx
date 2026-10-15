"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Arrow, Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/layout/Logo";
import { communityCta, mainNav, site } from "@/content/site";
import { cn } from "@/lib/utils";

const ids = mainNav.map((n) => n.href.slice(1));

/** Highlights the nav item for the section currently in view (homepage only). */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (!enabled) return;
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    // Clear the highlight when scrolled back up to the hero.
    const onScroll = () => {
      const first = els[0];
      if (first && window.scrollY + window.innerHeight * 0.45 < first.offsetTop) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled]);
  return active;
}

export function Navbar() {
  const pathname = usePathname();
  const active = useActiveSection(pathname === "/");
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll, close on Escape and keep focus inside the open mobile menu.
  React.useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>("a, button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // "/#about" is a same-page jump on the homepage and still works from the 404 page.
  const href = (hash: string) => `/${hash}`;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled ? "border-line bg-paper/85 shadow-sm backdrop-blur-md" : "border-transparent bg-paper"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Logo />

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={href(item.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative inline-flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors",
                      isActive ? "text-fg" : "text-fg-soft hover:text-fg"
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 -bottom-[17px] h-px origin-left bg-fg transition-transform duration-300 ease-brand",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="ml-1 hidden sm:inline-flex">
            <Link href={communityCta.href}>
              Join the Community
              <Arrow className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-fg hover:bg-subtle lg:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      <span aria-hidden className="scroll-progress absolute inset-x-0 -bottom-px h-px bg-accent" />

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "fixed inset-0 z-[70] flex flex-col bg-paper duration-300 ease-brand lg:hidden",
          open
            ? "visible translate-y-0 opacity-100 transition-[opacity,transform]"
            : "invisible -translate-y-2 opacity-0 transition-[opacity,transform,visibility]"
        )}
      >
        <div className="container flex h-16 shrink-0 items-center justify-between">
          <Logo onClick={() => setOpen(false)} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-fg hover:bg-subtle"
            onClick={() => {
              setOpen(false);
              menuButtonRef.current?.focus();
            }}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <nav className="container flex-1 overflow-y-auto pb-6 pt-4" aria-label="Mobile">
          <ul className="divide-y divide-line border-y border-line">
            {mainNav.map((item, i) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={href(item.href)}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="font-mono text-xs text-fg-mute">{String(i + 1).padStart(2, "0")}</span>
                    <span className={cn("font-display text-2xl font-medium tracking-tight", isActive ? "text-accent" : "text-fg")}>
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <Button asChild size="lg" className="mt-8 w-full">
            <Link href={communityCta.href} onClick={() => setOpen(false)}>
              {communityCta.label}
              <Arrow />
            </Link>
          </Button>

          <div className="mt-8 space-y-1 text-sm text-fg-soft">
            <a href={`mailto:${site.email}`} className="block hover:text-fg">
              {site.email}
            </a>
            <a href={site.whatsapp.link} target="_blank" rel="noopener noreferrer" className="block hover:text-fg">
              WhatsApp {site.whatsapp.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
