// Organization facts. Source: Nexpage Research Company Handbook v1.0
// (September 2026), Chapter 10 "Contact Information".

export const site = {
  name: "Nexpage Research",
  tagline: "From Research Ideas → Publishable Evidence → Research Community",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nexpageresearch.com",
  domain: "nexpageresearch.com",
  description:
    "Nexpage Research is a research-focused education and collaboration organization that teaches students from every discipline to conduct meaningful, ethical and scientifically sound research, then gives them a community in which to keep doing it together.",
  email: "nexpageresearch@gmail.com",
  whatsapp: {
    display: "+92 323 5695502",
    // wa.me expects the number in international format without "+" or spaces.
    link: "https://wa.me/923235695502",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/nexpageresearch" },
    { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61593145695298" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/nexpage-research/" },
  ],
  parent: "Nexpage Technologies",
} as const;

export type NavLink = { label: string; href: string };

/** One-page site: every nav item is a section anchor on the homepage. */
export const mainNav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Academy", href: "#academy" },
  { label: "Community", href: "#community" },
  { label: "Workflow", href: "#workflow" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const primaryCta = { label: "Explore the Academy", href: "#academy" };
export const communityCta = {
  label: "Join the Research Community",
  // The contact form reads ?interest= to preselect the topic.
  href: "/?interest=community#contact",
};
