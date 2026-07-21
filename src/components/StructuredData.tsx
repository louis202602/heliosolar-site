const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://heliosolarpro.fr";

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "HelioSolar",
  url: siteUrl,
  logo: `${siteUrl}/brand/heliosolar-logo-full.png`,
  email: "contact@heliosolarpro.fr",
  description:
    "Études, conception et installation de solutions photovoltaïques pour particuliers, professionnels, industriels et exploitations agricoles.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Marseille, Provence-Alpes-Côte d’Azur et régions voisines",
  },
  knowsAbout: [
    "Photovoltaïque résidentiel",
    "Photovoltaïque professionnel",
    "Centrales solaires industrielles",
    "Autoconsommation",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HelioSolar",
  url: siteUrl,
  inLanguage: "fr-FR",
};

export function StructuredData() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
