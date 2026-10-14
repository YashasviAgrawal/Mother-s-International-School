import type { MetadataRoute } from "next";
import { news } from "@/data/site";

const base = "https://themis.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/academics", "/admissions", "/fees", "/campus", "/student-life", "/news", "/gallery", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...news.map((n) => ({ url: `${base}/news/${n.slug}`, lastModified: n.date, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
