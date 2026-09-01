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
    default: "Installateur photovoltaïque à Marseille & région Sud | HelioSolar",
    template: "%s | HelioSolar",
  },
  description:
    "HelioSolar conçoit et installe des solutions photovoltaïques à Marseille et en région Sud pour particuliers, professionnels, sites industriels et exploitations agricoles.",
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
    title: "Installateur photovoltaïque à Marseille & région Sud | HelioSolar",
    description:
      "Étude, conception et installation photovoltaïque pour particuliers, professionnels, industriels et exploitations agricoles.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "HelioSolar — solutions photovoltaïques" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Installateur photovoltaïque à Marseille & région Sud | HelioSolar",
    description: "Solutions photovoltaïques pour particuliers, professionnels, industriels et exploitations agricoles.",
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
