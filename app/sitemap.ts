import type { MetadataRoute } from "next";

import { site } from "@/content/site";

// One-page site: the homepage is the only URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
