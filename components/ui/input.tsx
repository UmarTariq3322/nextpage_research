import * as React from "react";

import { cn } from "@/lib/utils";

export const fieldClasses =
  "w-full rounded-md border border-line-strong bg-surface px-4 text-sm text-fg placeholder:text-fg-mute transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25 focus-visible:ring-offset-0 aria-[invalid=true]:border-red-500 disabled:cursor-not-allowed disabled:opacity-50";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input type={type} className={cn(fieldClasses, "h-11", className)} ref={ref} {...props} />
));
Input.displayName = "Input";

export { Input };
