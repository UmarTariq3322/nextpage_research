"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionNavItem = { id: string; label: string };

/**
 * Sticky in-page navigation with scroll-spy. Sits under the main navbar,
 * scrolls horizontally on small screens.
 */
export function SectionNav({ items, label = "On this page" }: { items: SectionNavItem[]; label?: string }) {
  const [active, setActive] = React.useState(items[0]?.id);
  const listRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  // Keep the active item visible in the horizontally scrolling list.
  React.useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !link || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label={label}
      className="sticky top-16 z-40 border-b border-line bg-paper/90 backdrop-blur-md lg:top-[72px]"
    >
      <div className="container flex items-center gap-6">
        <span className="t-label hidden shrink-0 md:block">{label}</span>
        <ul
          ref={listRef}
          className="-mx-5 flex flex-1 gap-1 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  data-id={item.id}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative inline-flex h-12 items-center px-3 text-sm transition-colors",
                    isActive ? "font-medium text-fg" : "text-fg-soft hover:text-fg"
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent transition-transform duration-300 ease-brand",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
