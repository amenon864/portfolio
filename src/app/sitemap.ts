import type { MetadataRoute } from "next";
import { routes } from "@/data/navigation";
import { notesContent } from "@/data/notes";
import { siteContent } from "@/data/site";

export const dynamic = "force-static";

function absoluteUrl(path: string) {
  return new URL(path, siteContent.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.values(routes).map((route) => ({
    url: absoluteUrl(route === "/" ? route : `${route}/`),
    changeFrequency: "monthly" as const,
  }));
  const noteDocuments = notesContent.entries.map((note) => ({
    url: absoluteUrl(note.href),
    changeFrequency: "yearly" as const,
  }));

  return [...pages, ...noteDocuments];
}
