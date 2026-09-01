import type { Metadata } from "next";

export const SITE_NAME = "HelioSolar";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://heliosolar-site-c4lm.vercel.app").replace(/\/+$/, "");

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image.png",
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const brandedTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      title: brandedTitle,
      description,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: brandedTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
