import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { PWARegister } from "@/components/PWARegister";
import { InstallAppBanner } from "@/components/InstallAppBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://heliosolarpro.fr"),
  title: {
    default: "Projet photovoltaïque à Marseille & région Sud | HelioSolar",
    template: "%s | HelioSolar",
  },
  description:
    "HelioSolar est un projet photovoltaïque porté par Louis Preira à Marseille et en région Sud, destiné aux particuliers, professionnels, sites industriels et exploitations agricoles.",
  applicationName: "HelioSolar",
  category: "Énergie solaire",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/brand/favicon-64.png", type: "image/png" }],
    apple: [{ url: "/brand/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "HelioSolar",
    title: "Projet photovoltaïque à Marseille & région Sud | HelioSolar",
    description:
      "Présentation du projet HelioSolar, de l’expérience terrain de Louis Preira et des futures solutions photovoltaïques envisagées.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "HelioSolar — projet photovoltaïque" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projet photovoltaïque à Marseille & région Sud | HelioSolar",
    description: "Projet photovoltaïque porté par Louis Preira à Marseille et en région Sud.",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a className="skip-link" href="#contenu-principal">Aller au contenu principal</a>
        <StructuredData />
        <PWARegister />
        <ThemeProvider>
          <Header />
          <main id="contenu-principal">{children}</main>
          <Footer />
          <InstallAppBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
