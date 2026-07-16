import type { MetadataRoute } from "next";
import { esportes } from "@/data/esportes";

const siteUrl = process.env.URL || "https://golnext.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/baixar-app`,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/aluguel-de-quadras`,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/como-funciona`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/para-donos-de-quadra`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/faq`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/politica-de-privacidade`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/termos-de-uso`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const modalidades: MetadataRoute.Sitemap = esportes.map((esporte) => ({
    url: `${siteUrl}/aluguel-de-quadras/${esporte.slug}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...paginas, ...modalidades];
}
