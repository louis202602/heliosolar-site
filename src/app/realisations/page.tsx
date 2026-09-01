import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    image: "/media/hero-agri.jpg",
    location: "Projet agricole",
    power: "Vue drone",
    type: "Hangar photovoltaïque",
    detail: "Réalisation sur bâtiment agricole documentée par drone, avec une couverture photovoltaïque dense et une intégration lisible dans son environnement.",
  },
  {
    image: "/media/project-orchard.jpg",
    location: "Environnement agricole",
    power: "Vue aérienne",
    type: "Toiture solaire",
    detail: "Bâtiment équipé de panneaux photovoltaïques au cœur de son environnement, photographié depuis les airs.",
  },
  {
    image: "/media/project-industrial.jpg",
    location: "Site professionnel",
    power: "Grande surface",
    type: "Toiture photovoltaïque",
    detail: "Implantation photovoltaïque sur une grande surface de toiture pour valoriser au maximum l’espace disponible.",
  },
  {
    image: "/media/project-install.jpg",
    location: "Chantier en toiture",
    power: "Détail chantier",
    type: "Implantation photovoltaïque",
    detail: "Vue rapprochée de la couverture solaire pour montrer la disposition des panneaux et le résultat final.",
  },
];

export const metadata: Metadata = {
  title: "Réalisations photovoltaïques",
  description: "Découvrez en images des réalisations photovoltaïques HelioSolar sur bâtiments agricoles et professionnels.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    url: "/realisations",
    title: "Réalisations photovoltaïques | HelioSolar",
    description: "Chantiers photovoltaïques documentés par des vues terrain et drone.",
  },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des projets concrets, documentés et visibles."
        description="Une sélection de chantiers photovoltaïques réels, photographiés sur le terrain."
      />
      <section className="py-24 sm:py-28">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.image} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-5xl border border-ocean-900/10 bg-white shadow-card dark:border-white/10 dark:bg-white/[0.035]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ocean-900">
                    <Photo
                      src={p.image}
                      alt={`${p.type} — ${p.location}`}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      quality={88}
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-950/45 via-transparent to-transparent" />
                    <p className="absolute bottom-6 left-6 text-3xl font-black text-white">{p.power}</p>
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-solar-600 dark:text-solar-300">{p.location}</p>
                    <h2 className="mt-3 text-xl font-bold text-ocean-950 dark:text-white">{p.type}</h2>
                    <p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{p.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 overflow-hidden rounded-5xl bg-ocean-950 text-white">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[280px] bg-ocean-900 sm:min-h-[360px]">
                  <Photo
                    src="/media/project-roof.jpg"
                    alt="Vue drone d’une grande toiture photovoltaïque"
                    sizes="(max-width: 1023px) 100vw, 60vw"
                    quality={88}
                    className="object-cover object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-ocean-950/25" />
                </div>
                <div className="p-8 sm:p-10 lg:self-center">
                  <p className="eyebrow text-solar-300">Vue drone</p>
                  <p className="mt-3 text-2xl font-bold sm:text-3xl">Voir l’échelle réelle d’un chantier.</p>
                  <p className="mt-4 leading-7 text-ocean-100">Des vues réelles permettent de juger immédiatement l’ampleur, l’intégration et le niveau de finition.</p>
                  <a href="/demande-etude" className="btn-sheen mt-7 inline-flex rounded-full bg-solar-500 px-6 py-3 text-sm font-bold text-ocean-950">Demander mon étude</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
