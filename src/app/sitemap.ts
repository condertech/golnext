import type { MetadataRoute } from "next";

const siteUrl = process.env.URL || "https://golnext.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/politica-de-privacidade`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
