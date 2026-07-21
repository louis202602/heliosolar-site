import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande d’étude photovoltaïque",
  description: "Décrivez votre projet photovoltaïque et demandez une première étude à HelioSolar.",
  alternates: { canonical: "/demande-etude" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
