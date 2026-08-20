import type { MetadataRoute } from "next";
import { researchProjects } from "@/data/projects";
import { publications } from "@/data/publications";

import { resourceArticles } from "@/data/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexpage-research.example.com";

type SitemapEntry = {
  url: string;
  lastModified?: Date | string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: SitemapEntry[] = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/programs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/research`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/publications`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/portal`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const projectPages: SitemapEntry[] = researchProjects.map((p) => ({
    url: `${baseUrl}/research/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const publicationPages: SitemapEntry[] = publications.map((pub) => ({
    url: `${baseUrl}/publications/${pub.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));



  const resourcePages: SitemapEntry[] = resourceArticles.map((a) => ({
    url: `${baseUrl}/resources/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...projectPages,
    ...publicationPages,

    ...resourcePages,
  ];
}
