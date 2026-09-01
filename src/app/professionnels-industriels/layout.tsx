import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photovoltaïque professionnel, industriel & agricole",
  description: "Solutions photovoltaïques HelioSolar pour bâtiments professionnels, industriels et agricoles à Marseille, en région Sud et zones voisines.",
  alternates: { canonical: "/professionnels-industriels" },
  openGraph: {
    url: "/professionnels-industriels",
    title: "Photovoltaïque professionnel, industriel & agricole | HelioSolar",
    description: "Étude et installation de centrales photovoltaïques pour bâtiments professionnels, industriels et agricoles.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
