import type { Metadata } from "next";
import { SimulateurClient } from "./SimulateurClient";

export const metadata: Metadata = {
  title: "Simulateur photovoltaïque",
  description: "Estimez gratuitement le potentiel photovoltaïque de votre toiture, votre production et vos économies annuelles.",
  alternates: { canonical: "/simulateur" },
};

export default function SimulateurPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ocean-950 py-20 text-white sm:py-24">
        <div className="solar-grid absolute inset-0 opacity-45" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-solar-300">Simulation gratuite</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-[-.04em] sm:text-6xl">Estimez le potentiel solaire de votre toiture.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ocean-100 sm:text-lg">Obtenez un premier ordre de grandeur en moins d’une minute, puis faites vérifier le résultat par une étude technique HelioSolar.</p>
        </div>
      </section>
      <section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><SimulateurClient /></div></section>
    </main>
  );
}
