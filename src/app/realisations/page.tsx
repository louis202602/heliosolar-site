import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    image: "/media/hero-agri.jpg",
    location: "Expérience agricole",
    power: "Vue drone",
    type: "Hangar photovoltaïque",
    detail: "Média issu de l’expérience professionnelle de Louis Preira dans le photovoltaïque. Ce chantier n’est pas présenté comme une réalisation juridiquement effectuée par HelioSolar.",
  },
  {
    image: "/media/project-orchard.jpg",
    location: "Expérience agricole",
    power: "Vue aérienne",
    type: "Toiture solaire",
    detail: "Bâtiment photovoltaïque documenté dans le cadre de l’expérience terrain de Louis Preira, sans attribution de sa réalisation à HelioSolar.",
  },
  {
    image: "/media/project-industrial.jpg",
    location: "Expérience professionnelle",
    power: "Grande surface",
    type: "Toiture photovoltaïque",
    detail: "Grande surface photovoltaïque utilisée pour illustrer l’expérience professionnelle acquise par Louis Preira sur le terrain.",
  },
  {
    image: "/media/project-install.jpg",
    location: "Expérience chantier",
    power: "Détail terrain",
    type: "Implantation photovoltaïque",
    detail: "Vue rapprochée d’une installation photovoltaïque issue de l’expérience terrain de Louis Preira.",
  },
];

export const metadata: Metadata = {
  title: "Expérience terrain photovoltaïque",
  description: "Découvrez en images l’expérience professionnelle photovoltaïque de Louis Preira, porteur du projet HelioSolar.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    url: "/realisations",
    title: "Expérience terrain photovoltaïque | HelioSolar",
    description: "Photos terrain et drone présentées dans leur contexte, sans attribuer à HelioSolar des chantiers antérieurs à son lancement.",
  },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Expérience terrain"
        title="Des projets photovoltaïques réels, présentés avec leur contexte."
        description="Ces médias illustrent l’expérience professionnelle de Louis Preira. Ils ne sont pas présentés comme des chantiers réalisés par HelioSolar lorsque ce n’est pas le cas."
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
                    alt="Vue drone d’une grande toiture photovoltaïque issue de l’expérience professionnelle de Louis Preira"
                    sizes="(max-width: 1023px) 100vw, 60vw"
                    quality={88}
                    className="object-cover object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-ocean-950/25" />
                </div>
                <div className="p-8 sm:p-10 lg:self-center">
                  <p className="eyebrow text-solar-300">Vue drone</p>
                  <p className="mt-3 text-2xl font-bold sm:text-3xl">Voir l’échelle réelle d’une installation.</p>
                  <p className="mt-4 leading-7 text-ocean-100">Ces vues permettent d’illustrer concrètement l’expérience terrain acquise sur des installations photovoltaïques.</p>
                  <a href="/demande-etude" className="btn-sheen mt-7 inline-flex rounded-full bg-solar-500 px-6 py-3 text-sm font-bold text-ocean-950">Présenter mon projet</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
