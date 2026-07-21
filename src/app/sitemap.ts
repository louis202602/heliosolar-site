import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://heliosolarpro.fr";
const routes = [
  "",
  "/solutions",
  "/professionnels-industriels",
  "/residentiel",
  "/realisations",
    "/simulateur",
  "/a-propos",
  "/demande-etude",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
  "/cgv",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("demande-etude") ? 0.9 : 0.7,
  }));
}
