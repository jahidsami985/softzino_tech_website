import type { MetadataRoute } from "next";
import { absoluteUrl, indexablePaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-09-09"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.8 : 0.7,
  }));
}
