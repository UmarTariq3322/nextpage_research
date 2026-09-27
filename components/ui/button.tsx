import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Button system.
 * - default   Primary: filled, near-black (inverts in dark mode).
 * - accent    Filled academic blue, for the single most important action.
 * - outline   Secondary.
 * - ghost     Low-emphasis icon/text actions.
 * - link      Tertiary text link (use ArrowLink for the arrowed variant).
 */
const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,border-color,color,box-shadow] duration-200 ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-on shadow-sm hover:bg-primary/90",
        accent: "bg-accent text-accent-on shadow-sm hover:bg-accent-strong",
        outline: "border border-line-strong bg-surface/60 text-fg hover:border-fg/30 hover:bg-surface",
        ghost: "text-fg-soft hover:bg-subtle hover:text-fg",
        link: "h-auto px-0 text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3.5",
        lg: "h-12 px-6 text-[0.95rem]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

/** Arrow glyph that nudges right when its parent `.group` is hovered. */
function Arrow({ className }: { className?: string }) {
  return <ArrowRight className={cn("arrow-nudge h-4 w-4", className)} aria-hidden />;
}

/** Tertiary action: text link with an arrow. */
function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group -my-1.5 inline-flex items-center gap-1.5 rounded-sm py-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong",
        className
      )}
    >
      {children}
      <Arrow />
    </Link>
  );
}

export { Arrow, ArrowLink, Button, buttonVariants };
