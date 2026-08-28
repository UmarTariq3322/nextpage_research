import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexpage-research.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "Nexpage Research — Research. Innovate. Publish.",
    template: "%s | Nexpage Research",
  },
  description:
    "Nexpage Research is a research and innovation division of Nexpage Technologies. Research methodology, statistical analysis, mentorship, and publication support for students, researchers, academics, and organizations.",
  keywords: [
    "Nexpage Research",
    "research consulting",
    "AI research",
    "machine learning research",
    "research methodology",
    "systematic review",
    "meta-analysis",
    "research mentorship",
    "publication support",
    "AI research services",
    "data analysis research",
    "research automation",
  ],
  authors: [{ name: "Nexpage Technologies" }],
  creator: "Nexpage Technologies",
  publisher: "Nexpage Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Nexpage Research",
    title: "Nexpage Research — Research. Innovate. Publish.",
    description:
      "Research methodology, statistical analysis, mentorship, and publication support for students, researchers, academics, and organizations.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nexpage Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexpage Research — Research. Innovate. Publish.",
    description:
      "Research methodology, statistical analysis, mentorship, and publication support for students, researchers, academics, and organizations.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-white dark:bg-ink-950 text-ink-900 dark:text-ink-50">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
