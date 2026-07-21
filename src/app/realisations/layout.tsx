import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations photovoltaïques",
  description: "Découvrez une sélection de réalisations photovoltaïques professionnelles et industrielles HelioSolar.",
  alternates: { canonical: "/realisations" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
