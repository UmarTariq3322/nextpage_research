import type { MetadataRoute } from "next";

import { site } from "@/content/site";

// The homepage plus the NexMeta course page.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/nexmeta`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ];
}
