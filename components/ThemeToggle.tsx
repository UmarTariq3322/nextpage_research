"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a disabled placeholder to avoid layout shift during hydration
    return (
      <button
        disabled
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent bg-transparent text-ink-400 opacity-50"
      >
        <div className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const currentTheme = resolvedTheme === "dark" ? "dark" : "light";

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200/50 bg-white/50 text-ink-600 shadow-sm transition-all hover:bg-ink-50 hover:text-brand-600 dark:border-ink-800/50 dark:bg-ink-900/50 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-brand-400 backdrop-blur-sm"
      aria-label="Toggle theme"
      title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {currentTheme === "light" ? (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute"
          >
            <Sun className="h-4.5 w-4.5" strokeWidth={2} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute"
          >
            <Moon className="h-4.5 w-4.5" strokeWidth={2} />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
      
      {/* Subtle hover glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/0 transition-colors group-hover:bg-brand-500/10" />
    </button>
  );
}
