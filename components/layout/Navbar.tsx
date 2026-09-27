"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { Arrow, Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/layout/Logo";
import { communityCta, mainNav, site, type NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

function matches(pathname: string | null, href: string) {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function isActive(pathname: string | null, item: NavItem) {
  return matches(pathname, item.href) || !!item.children?.some((c) => matches(pathname, c.href));
}

const navItemClass =
  "relative inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium transition-colors";

function Dropdown({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLLIElement>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout>>();
  const pathname = usePathname();

  React.useEffect(() => setOpen(false), [pathname]);

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const panelId = `nav-${item.label.toLowerCase()}`;

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        clearTimeout(closeTimer.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        closeTimer.current = setTimeout(() => setOpen(false), 120);
      }}
      onBlur={(e) => !ref.current?.contains(e.relatedTarget as Node) && setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={cn(navItemClass, active ? "text-fg" : "text-fg-soft hover:text-fg")}
      >
        {item.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")} aria-hidden />
        {active && <span aria-hidden className="absolute inset-x-3 -bottom-[17px] h-px bg-fg" />}
      </button>
      <div
        id={panelId}
        className={cn(
          "absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 duration-200 ease-brand",
          // Visibility flips instantly on open (so focus works) and waits for the fade on close.
          open
            ? "visible translate-y-0 opacity-100 transition-[opacity,transform]"
            : "invisible -translate-y-1 opacity-0 transition-[opacity,transform,visibility]"
        )}
      >
        <ul className="rounded-lg border border-line bg-surface p-1.5 shadow-lg">
          {item.children!.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                aria-current={matches(pathname, c.href) ? "page" : undefined}
                className="block rounded-md px-3 py-2.5 transition-colors hover:bg-subtle"
              >
                <span className="block text-sm font-medium text-fg">{c.label}</span>
                {c.description && <span className="mt-0.5 block text-xs text-fg-mute">{c.description}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function Navbar() {
  const pathname = usePathname();
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

  React.useEffect(() => setOpen(false), [pathname]);

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
              const active = isActive(pathname, item);
              if (item.children) return <Dropdown key={item.label} item={item} active={active} />;
              return (
                <li key={item.href} className={cn(item.href === "/" && "hidden xl:block")}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(navItemClass, active ? "text-fg" : "text-fg-soft hover:text-fg")}
                  >
                    {item.label}
                    {active && <span aria-hidden className="absolute inset-x-3 -bottom-[17px] h-px bg-fg" />}
                  </Link>
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

      {/* Mobile menu: full-screen sheet with its own composition */}
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
            {mainNav.map((item) => {
              const active = isActive(pathname, item);
              const links = item.children ?? [item];
              return (
                <li key={item.label} className="py-4">
                  {item.children ? (
                    <>
                      <p className="t-label">{item.label}</p>
                      <ul className="mt-2 space-y-1">
                        {links.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              aria-current={matches(pathname, c.href) ? "page" : undefined}
                              className={cn(
                                "block py-1.5 font-display text-2xl font-medium tracking-tight",
                                matches(pathname, c.href) ? "text-accent" : "text-fg"
                              )}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block py-1 font-display text-2xl font-medium tracking-tight",
                        active ? "text-accent" : "text-fg"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 grid gap-2">
            <Button asChild size="lg">
              <Link href={communityCta.href}>
                {communityCta.label}
                <Arrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/academy">Explore the Academy</Link>
            </Button>
          </div>

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
