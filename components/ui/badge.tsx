import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-navy-50 text-navy-800",
        secondary:
          "border-transparent bg-ink-100 text-ink-800",
        destructive:
          "border-transparent bg-rose-50 text-rose-700",
        outline: "text-ink-950",
        success:
          "border-transparent bg-brand-50 text-brand-700",
        warning:
          "border-transparent bg-amber-50 text-amber-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
