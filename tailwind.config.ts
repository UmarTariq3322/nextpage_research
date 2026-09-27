import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        surface: token("surface"),
        subtle: token("subtle"),
        fg: {
          DEFAULT: token("fg"),
          soft: token("fg-soft"),
          mute: token("fg-mute"),
        },
        line: {
          DEFAULT: token("line"),
          strong: token("line-strong"),
        },
        primary: {
          DEFAULT: token("primary"),
          on: token("on-primary"),
        },
        accent: {
          DEFAULT: token("accent"),
          strong: token("accent-strong"),
          soft: token("accent-soft"),
          on: token("on-accent"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      transitionTimingFunction: {
        brand: "var(--ease-out)",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
        screens: { "2xl": "1240px" },
      },
    },
  },
  plugins: [],
};
export default config;
