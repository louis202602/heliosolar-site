import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HelioSolar — L’énergie de votre avenir",
    short_name: "HelioSolar",
    description: "Solutions photovoltaïques pour particuliers, professionnels et industriels.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    scope: "/",
    background_color: "#061725",
    theme_color: "#0B4DB8",
    lang: "fr",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
