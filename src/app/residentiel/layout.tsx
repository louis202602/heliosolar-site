import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photovoltaïque résidentiel",
  description: "Étude et installation photovoltaïque résidentielle avec HelioSolar.",
  alternates: { canonical: "/residentiel" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
