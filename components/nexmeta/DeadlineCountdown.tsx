"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { registrationDeadline } from "@/content/nexmeta";
import { cn } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

function calculateTimeLeft(targetIso: string): TimeLeft {
  const difference = new Date(targetIso).getTime() - new Date().getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false,
  };
}

export function DeadlineCountdownBanner() {
  const [mounted, setMounted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  React.useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(registrationDeadline.targetDate));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(registrationDeadline.targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="relative overflow-hidden rounded-xl border border-accent/25 bg-gradient-to-br from-accent-soft/80 via-surface to-surface p-6 shadow-md sm:p-8">
      {/* Decorative background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: Message & live badge */}
        <div className="max-w-xl space-y-2.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {registrationDeadline.cohort} · {registrationDeadline.seatNotice}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-fg-mute">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden /> Direct Verification
            </span>
          </div>

          <h2 className="t-h2 text-2xl tracking-tight sm:text-3xl text-fg">
            {registrationDeadline.title}
          </h2>

          <p className="text-sm text-fg-soft sm:text-base leading-relaxed">
            {registrationDeadline.subtitle}
          </p>
        </div>

        {/* Right: Live Countdown Units + Navigation Button */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:shrink-0">
          {/* Digit blocks */}
          <div className="flex items-center gap-2 sm:gap-3" aria-label="Time left until registration deadline">
            {[
              { val: mounted ? pad(timeLeft.days) : "--", label: "Days" },
              { val: mounted ? pad(timeLeft.hours) : "--", label: "Hours" },
              { val: mounted ? pad(timeLeft.minutes) : "--", label: "Mins" },
              { val: mounted ? pad(timeLeft.seconds) : "--", label: "Secs" },
            ].map((unit, i, arr) => (
              <React.Fragment key={unit.label}>
                <div className="flex min-w-[58px] flex-col items-center justify-center rounded-lg border border-line-strong bg-surface/90 px-2.5 py-2.5 shadow-sm sm:min-w-[66px] sm:py-3">
                  <span className="font-mono text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                    {unit.val}
                  </span>
                  <span className="mt-1 font-mono text-[0.68rem] font-medium uppercase tracking-wider text-fg-mute">
                    {unit.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <span className="font-mono text-lg font-bold text-fg-mute" aria-hidden>
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Action button: Navigates directly to registration page */}
          <Link
            href="/nexmeta/register"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-on shadow-md transition-all duration-200 hover:bg-accent-strong hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Secure Your Seat Now</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FloatingDeadlineBar() {
  const pathname = usePathname();
  const [visible, setVisible] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  React.useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(registrationDeadline.targetDate));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(registrationDeadline.targetDate));
    }, 1000);

    const onScroll = () => {
      // Don't show on registration page itself
      if (window.location.pathname.includes("/register")) {
        setVisible(false);
        return;
      }
      const isScrolled = window.scrollY > 350;
      setVisible(isScrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible || pathname?.includes("/register")) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <aside
      aria-label="Quick registration bar"
      className="fixed bottom-4 inset-x-4 z-40 mx-auto max-w-2xl transform transition-all duration-300 ease-brand animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line-strong bg-surface/95 p-3 shadow-xl backdrop-blur-md sm:px-5 sm:py-3.5">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <div>
            <p className="text-xs font-semibold text-fg sm:text-sm">
              Secure your seat now
            </p>
            <p className="font-mono text-xs text-fg-mute">
              {mounted
                ? `${pad(timeLeft.days)}d : ${pad(timeLeft.hours)}h : ${pad(timeLeft.minutes)}m : ${pad(timeLeft.seconds)}s left`
                : "Limited seats available"}
            </p>
          </div>
        </div>

        <Link
          href="/nexmeta/register"
          className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-accent px-4 text-xs font-semibold text-accent-on transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-sm"
        >
          <span>Register Now</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </aside>
  );
}

export function HeroSecureButton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/nexmeta/register"
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-[0.95rem] font-medium text-primary-on shadow-sm transition-all duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
    >
      <span>{children ?? "Secure your seat now"}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}
