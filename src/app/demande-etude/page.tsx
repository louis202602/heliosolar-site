import type { Metadata } from "next";
import { EtudeForm } from "./EtudeForm";

export const metadata: Metadata = {
  title: "Demande d’étude photovoltaïque — HelioSolar",
  description: "Déposez une demande structurée pour votre projet photovoltaïque résidentiel, professionnel, industriel ou agricole.",
};

export default function DemandeEtudePage() {
  return (
    <main className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(circle_at_75%_0%,rgba(250,192,45,.12),transparent_45%),radial-gradient(circle_at_20%_10%,rgba(46,111,149,.15),transparent_42%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-solar-600 dark:text-solar-300">Étude photovoltaïque</p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-[-.04em] text-ocean-950 dark:text-white sm:text-5xl">Votre projet commence par les bonnes données.</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slatebrand-500 dark:text-ocean-100">Renseignez les éléments connus. HelioSolar pourra qualifier la demande, identifier les premières contraintes et préparer l’échange utile.</p>
          <div className="mt-9 grid gap-4">
            {["Analyse du type de bâtiment", "Prise en compte de la consommation", "Orientation vers la solution adaptée", "Aucun engagement à ce stade"].map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-ocean-900/10 bg-white/75 p-4 dark:border-white/10 dark:bg-white/[.035]">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ocean-950 text-xs font-bold text-solar-300 dark:bg-solar-400 dark:text-ocean-950">{index + 1}</span>
                <span className="text-sm font-semibold text-ocean-900 dark:text-white">{item}</span>
              </div>
            ))}
          </div>
        </aside>
        <section className="rounded-[32px] border border-ocean-900/10 bg-white p-6 shadow-[0_28px_90px_rgba(6,23,37,.10)] dark:border-white/10 dark:bg-white/[.035] sm:p-9">
          <EtudeForm />
        </section>
      </div>
    </main>
  );
}
