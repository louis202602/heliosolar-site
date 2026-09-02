import type { Metadata } from "next";
import { PageHero, FeatureGrid } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "À propos — HelioSolar",
  description: "Découvrez le projet HelioSolar, l’expérience terrain et l’approche photovoltaïque de Louis Preira.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Un projet photovoltaïque construit sur l’expérience terrain."
        description="HelioSolar est un projet porté à Marseille par Louis Preira. L’activité d’installation est en préparation et le site présente l’expérience, la méthode et les solutions envisagées avant son lancement juridique complet."
      />
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FeatureGrid
            items={[
              { title: "Qualification", text: "Louis Preira a obtenu la qualification QualiPV 500 dans le cadre de son parcours professionnel.", metric: "QualiPV 500" },
              { title: "Approche terrain", text: "Les choix techniques sont confrontés aux réalités du bâtiment, de l’exploitation et du chantier." },
              { title: "Transparence", text: "Les hypothèses, contraintes et limites doivent être expliquées clairement avant tout engagement." },
              { title: "Sur mesure", text: "Chaque futur projet devra être étudié selon son site, ses usages et ses contraintes propres." },
              { title: "Vision long terme", text: "Matériel, architecture, maintenance et évolutivité font partie des critères préparés pour le futur service." },
              { title: "Pré-lancement", text: "Aucun devis, contrat ou engagement d’installation HelioSolar n’est présenté comme disponible tant que le cadre juridique et assurantiel n’est pas finalisé." },
            ]}
          />
        </div>
      </section>
    </>
  );
}
