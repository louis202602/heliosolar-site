import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    location: "Toulouse",
    power: "126 kWc",
    type: "Toiture professionnelle",
    detail:
      "Projet photovoltaïque sur bâtiment d’activité, avec étude d’implantation et préparation d’exécution.",
  },
  {
    location: "Ytrac",
    power: "151,6 kWc",
    type: "Site industriel",
    detail:
      "332 modules, 16 strings et une préparation technique détaillée pour une installation de grande puissance.",
  },
  {
    location: "Région Sud",
    power: "49,14 kWc",
    type: "Bâtiment professionnel",
    detail: "Installation dimensionnée pour autoconsommation et maîtrise durable des charges énergétiques.",
  },
];

export const metadata: Metadata = {
  title: "Réalisations photovoltaïques — HelioSolar",
  description: "Références photovoltaïques résidentielles, professionnelles et industrielles.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des projets concrets, documentés et visibles."
        description="Une sélection de projets photovoltaïques menés du dimensionnement à la mise en service, à différentes puissances et sur différents types de sites."
      />
      <section className="py-24 sm:py-28">
        <div className="container-px">
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.power} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-5xl border border-ocean-900/10 bg-white shadow-card transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-card-hover dark:border-white/10 dark:bg-white/[0.035]">
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-ocean-600 via-ocean-800 to-ocean-950">
                    <div className="solar-grid absolute inset-0 opacity-40" />
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-solar-400/20 blur-3xl" />
                    <div className="absolute inset-x-6 bottom-6">
                      <p className="text-4xl font-black tracking-[-0.04em] text-white">{p.power}</p>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-solar-600 dark:text-solar-300">
                      {p.location}
                    </p>
                    <h2 className="mt-3 text-xl font-bold text-ocean-950 dark:text-white">{p.type}</h2>
                    <p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{p.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-5xl bg-ocean-950 px-8 py-10 text-white sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow text-solar-300">Votre projet</p>
                <p className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  Un chantier similaire au vôtre ? Parlons-en.
                </p>
              </div>
              <a
                href="/demande-etude"
                className="btn-sheen inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-solar-500 px-6 py-3 text-sm font-bold text-ocean-950 shadow-solar-btn transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-solar-400"
              >
                Demander mon étude
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
