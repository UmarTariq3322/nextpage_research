// Source: Company Handbook v1.0, Chapter 3. Only facts stated in the
// handbook are used here; no credentials or achievements are added.

export type Leader = {
  slug: string;
  name: string;
  title: string;
  photo?: { src: string; width: number; height: number };
  summary: string;
  bio: string[];
  /** Scannable facts, each restating a sentence from the bio above. */
  facts: { label: string; value: string }[];
  focus: string[];
};

export const leaders: Leader[] = [
  {
    slug: "muhammad-shamikh-shahid",
    name: "Muhammad Shamikh Shahid",
    title: "Founder and Chief Executive Officer",
    photo: { src: "/team/muhammad-shamikh-shahid.png", width: 400, height: 400 },
    summary:
      "Founded Nexpage Research and leads it as CEO, connecting research, teaching and technology.",
    bio: [
      "Muhammad Shamikh Shahid founded Nexpage Research and leads it as CEO. His background combines medical education, research, statistical analysis, programming, SEO, digital technology and teaching. His previous work includes roles with Halogix and Mentr, and he is Co-Founder and CEO of Nexpage Technologies, where he brings agency experience in SEO, web development and digital services.",
      "He has substantial experience in statistical analysis and programming for research, works as an R instructor, and has delivered multiple successful R and research-focused workshops. This gives him direct experience in teaching students to use research and statistical tools in practical settings.",
      "His role connects three complementary areas (research, teaching and technology), and the Academy is designed to draw on that combination to create a practical learning environment supported by both research expertise and the digital infrastructure of Nexpage Technologies.",
    ],
    facts: [
      { label: "Background", value: "Medical education, research, statistical analysis, programming, SEO, digital technology and teaching" },
      { label: "Teaching", value: "R instructor; has delivered multiple R and research-focused workshops" },
      { label: "Previous work", value: "Roles with Halogix and Mentr" },
      { label: "Also", value: "Co-Founder and CEO, Nexpage Technologies" },
    ],
    focus: [
      "Strategy and academic direction",
      "Teaching in research, statistics and R",
      "Partnerships",
      "Academic and Research",
      "Statistics and Methods",
    ],
  },
  {
    slug: "muhammad-areeb-ul-haq",
    name: "Muhammad Areeb Ul Haq",
    title: "Lead Mentor",
    photo: { src: "/team/muhammad-areeb-ul-haq.jpg", width: 750, height: 750 },
    summary:
      "Co-leads the Academic and Research and the Statistics and Methods functions.",
    bio: [
      "As Lead Mentor, Muhammad Areeb Ul Haq co-leads two of the organization's core functions with the Founder: Academic and Research — curriculum design and delivery, disciplinary expertise, paper walkthroughs and research supervision — and Statistics and Methods — methodological guidance, statistical teaching, analysis support and the quality of analyses.",
    ],
    facts: [
      { label: "Co-leads", value: "Academic and Research: curriculum design and delivery, paper walkthroughs and research supervision" },
      { label: "Co-leads", value: "Statistics and Methods: methodological guidance, statistical teaching and analysis quality" },
    ],
    focus: ["Academic and Research", "Statistics and Methods", "Research supervision"],
  },
  {
    slug: "muhammad-umar-tariq",
    name: "Muhammad Umar Tariq",
    title: "Co-founder and Chief Technology Officer",
    photo: { src: "/team/muhammad-umar-tariq.jpg", width: 396, height: 399 },
    summary:
      "Leads Technology and Digital: the platforms, website and infrastructure behind learning and collaboration.",
    bio: [
      "As Co-founder and CTO, Muhammad Umar Tariq leads the Technology and Digital function: the learning and communication platforms, the website, SEO and digital operations, supported by Nexpage Technologies.",
    ],
    facts: [
      { label: "Leads", value: "Technology and Digital: learning and communication platforms, website, SEO and digital operations" },
      { label: "Supported by", value: "Nexpage Technologies" },
    ],
    focus: [
      "Learning and communication platforms",
      "Website",
      "SEO",
      "Digital operations",
      "Technology infrastructure",
    ],
  },
];
