import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande d’étude photovoltaïque gratuite",
  description: "Décrivez votre projet photovoltaïque et demandez une première étude structurée à HelioSolar.",
  alternates: { canonical: "/demande-etude" },
  openGraph: {
    url: "/demande-etude",
    title: "Demande d’étude photovoltaïque gratuite | HelioSolar",
    description: "Transmettez les données de votre projet et recevez une première analyse photovoltaïque HelioSolar.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
