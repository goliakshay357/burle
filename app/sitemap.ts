import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#about", "#spaces", "#events", "#amenities", "#inquiry", "#location", "#faq"];
  return sections.map((s) => ({
    url: `${site.url}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s === "" ? 1.0 : 0.7,
  }));
}
