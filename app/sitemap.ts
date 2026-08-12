import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { SCENARIOS } from "@/lib/scenarios";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/scenarios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/sustainability`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/api-docs`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/track`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const scenarioRoutes: MetadataRoute.Sitemap = SCENARIOS.map((s) => ({
    url: `${SITE.url}/scenarios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...scenarioRoutes];
}
