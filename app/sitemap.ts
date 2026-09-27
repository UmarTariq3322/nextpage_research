import type { MetadataRoute } from "next";

import { allPages, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return allPages.map(({ href }) => ({
    url: `${site.url}${href === "/" ? "" : href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : href === "/contact" ? 0.6 : 0.8,
  }));
}
