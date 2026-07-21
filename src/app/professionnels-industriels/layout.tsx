import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photovoltaïque professionnel et industriel",
  description: "Solutions photovoltaïques HelioSolar pour bâtiments professionnels, industriels et agricoles.",
  alternates: { canonical: "/professionnels-industriels" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
