// NexMeta course: outline, pricing and payment details.
// Edit this file to change what the /nexmeta page shows. Prices are in PKR.

export const course = {
  name: "NexMeta",
  title: "The Complete Science of Meta-Analysis",
  summary:
    "A three-module course that takes you from choosing a topic to analysing data in R and writing the manuscript of a systematic review and meta-analysis.",
};

export type Lecture = { n: string; title: string; instructor: string; topics?: string[] };
export type CourseModule = {
  id: "m1" | "m2" | "m3";
  number: number;
  title: string;
  lectures: Lecture[];
};

export const courseModules: CourseModule[] = [
  {
    id: "m1",
    number: 1,
    title: "The Foundation",
    lectures: [
      {
        n: "1",
        title: "Introduction & topic selection",
        instructor: "Areeb",
        topics: [
          "What is a systematic review?",
          "What is a meta-analysis?",
          "Why they are important",
          "How to find a viable topic",
          "Different types of meta-analyses",
        ],
      },
      {
        n: "2",
        title: "Search strategy and search string",
        instructor: "Saad",
        topics: ["Different databases", "Formulating a search string"],
      },
      {
        n: "3",
        title: "Screening and data extraction",
        instructor: "Areeb & Shamikh",
        topics: ["Primary and secondary screening (Areeb)", "Data extraction (Shamikh)"],
      },
      { n: "4", title: "Risk of bias", instructor: "Saad" },
    ],
  },
  {
    id: "m2",
    number: 2,
    title: "Mastering the Analysis",
    lectures: [
      {
        n: "5",
        title: "Analysis basics",
        instructor: "Shamikh",
        topics: ["Variable types", "Effect size and effect measure", "Sub-group and leave-one-out analysis"],
      },
      {
        n: "6",
        title: "Analysis using R",
        instructor: "Shamikh",
        topics: ["Downloading R", "Packages", "Reading an Excel file", "Running a meta-analysis"],
      },
      { n: "7", title: "Meta-regression", instructor: "Shamikh" },
      { n: "8", title: "Trial Sequential Analysis", instructor: "Shamikh" },
    ],
  },
  {
    id: "m3",
    number: 3,
    title: "From Certainty to Manuscript",
    lectures: [
      { n: "9–10", title: "GRADE assessment", instructor: "Saad" },
      { n: "11–12", title: "Manuscript writing", instructor: "Saad" },
    ],
  },
];

export const assessment = [
  "A quiz at the end of the course",
  "Each student gets a unique ID",
  "Log in to the website with your ID to take the quiz",
  "Your score is displayed when you finish",
  "Certificates are provided",
];

/** Prices in PKR. `ambassador` is the price with a valid ambassador code. */
export const pricing = {
  full: { label: "Full course", detail: "All three modules", price: 4200, ambassador: 3500 },
  m1: { label: "Module 1", detail: "The Foundation", price: 1500, ambassador: 1200 },
  m2: { label: "Module 2", detail: "Mastering the Analysis", price: 2500, ambassador: 2000 },
  m3: { label: "Module 3", detail: "From Certainty to Manuscript", price: 2000, ambassador: 1500 },
} as const;

export type PackageKey = keyof typeof pricing;
export type ModuleKey = Exclude<PackageKey, "full">;

/**
 * Price for a selection. The full course is chosen explicitly; individual
 * modules are summed. Shared by the form (preview) and the server (source of truth).
 */
export function quote(selection: { full: boolean; modules: ModuleKey[] }, withCode: boolean) {
  const keys: PackageKey[] = selection.full ? ["full"] : selection.modules;
  const items = keys.map((k) => ({
    key: k,
    label: pricing[k].label,
    price: pricing[k].price,
    final: withCode ? pricing[k].ambassador : pricing[k].price,
  }));
  const subtotal = items.reduce((s, i) => s + i.price, 0);
  const total = items.reduce((s, i) => s + i.final, 0);
  return { items, subtotal, total, discount: subtotal - total };
}

export const formatPKR = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;

/**
 * Accounts students pay into before uploading proof. Add more entries
 * (e.g. JazzCash, Easypaisa) and they appear in the form automatically.
 */
export const paymentAccounts: { method: string; accountTitle: string; accountNumber: string; note?: string }[] = [
  { method: "Bank transfer", accountTitle: "Muhammad Umar Tariq", accountNumber: "02060108264147", note: "Meezan Bank" },
];

export const studyLevels = [
  "MBBS / BDS student",
  "BS / undergraduate student",
  "House officer / recent graduate",
  "MS / MPhil",
  "PhD",
  "Faculty / researcher",
  "Other",
] as const;

export const referralSources = ["Instagram", "Facebook", "LinkedIn", "WhatsApp", "A friend", "Ambassador", "Other"] as const;

/** Upload limits for the payment screenshot. */
export const proofLimits = {
  maxBytes: 5 * 1024 * 1024,
  types: ["image/jpeg", "image/png", "image/webp", "application/pdf"],
};
