import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — HelioSolar",
  description: "Contactez HelioSolar pour votre projet photovoltaïque.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet solaire."
        description="Décrivez votre bâtiment, votre consommation ou votre objectif. Nous orienterons votre demande vers l’étude adaptée."
        cta={false}
      />
      <section className="py-24 sm:py-28">
        <div className="container-px grid gap-6 lg:grid-cols-3">
          <Reveal>
            <a
              href="mailto:contact@heliosolarpro.fr"
              className="card-premium block h-full p-7 hover:-translate-y-1 hover:border-solar-500/40 hover:shadow-card-hover"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-solar-600 dark:text-solar-300">E-mail</p>
              <h2 className="mt-5 break-all text-xl font-bold text-ocean-950 dark:text-white">
                contact@heliosolarpro.fr
              </h2>
              <p className="mt-4 text-sm leading-7 text-slatebrand-500 dark:text-ocean-100">
                Pour les demandes générales et l’envoi de documents.
              </p>
            </a>
          </Reveal>

          <Reveal delay={90}>
            <div className="card-premium h-full p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-solar-600 dark:text-solar-300">
                Zone d’intervention
              </p>
              <h2 className="mt-5 text-xl font-bold text-ocean-950 dark:text-white">Marseille & région Sud</h2>
              <p className="mt-4 text-sm leading-7 text-slatebrand-500 dark:text-ocean-100">
                Déplacements étudiés selon la puissance, le type de site et la maturité du projet.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <Link
              href="/demande-etude"
              className="group block h-full rounded-4xl bg-ocean-950 p-7 text-white shadow-panel transition-transform duration-500 ease-premium hover:-translate-y-1"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-solar-300">Étude photovoltaïque</p>
              <h2 className="mt-5 text-xl font-bold">Déposer une demande structurée</h2>
              <p className="mt-4 text-sm leading-7 text-ocean-100">
                Consommation, adresse, bâtiment et documents utiles réunis dans un même formulaire.
              </p>
              <span className="btn-sheen mt-8 inline-flex rounded-full bg-solar-500 px-5 py-2.5 text-sm font-bold text-ocean-950">
                Commencer
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
