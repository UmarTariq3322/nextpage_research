"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={cn(
            "mb-3 inline-block text-sm font-semibold tracking-wider uppercase text-navy-700 dark:text-brand-400",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={cn(
          "font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl lg:text-5xl",
          align === "center" ? "mx-auto" : ""
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "mt-5 text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : ""
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
