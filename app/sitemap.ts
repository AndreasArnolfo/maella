import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://maella.fr", changeFrequency: "monthly", priority: 1 }];
}
