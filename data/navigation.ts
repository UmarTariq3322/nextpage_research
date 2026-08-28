import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research Services", href: "/services" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },

  { label: "Resources", href: "/resources" },
];

export const footerLinks = {
  research: [
    { label: "Research Services", href: "/services" },
    { label: "Systematic Reviews", href: "/services" },
    { label: "Meta-Analysis", href: "/services" },
    { label: "Data Science", href: "/services" },
    { label: "Publication Support", href: "/services" },
  ],
  company: [
    { label: "About", href: "/about" },

    { label: "Publications", href: "/publications" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  connect: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export const researchLevels = [
  "BS",
  "MS",
  "PhD",
  "Researcher",
  "Faculty",
  "Organization",
  "Other",
];

export const serviceOptions = [
  "Research Consulting",
  "AI/ML Research",
  "Systematic Review",
  "Meta-Analysis",
  "Statistical Analysis",
  "Thesis/FYP Support",
  "Publication Support",
  "Research Training",
  "Other",
];

export const researchAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Cybersecurity",
  "Natural Language Processing",
  "Generative AI",
  "Systematic Review",
  "Statistical Analysis",
  "Other",
];
