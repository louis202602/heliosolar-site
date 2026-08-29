import Link from "next/link";
import { Button } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

const sectors = [
  {
    title: "Résidentiel",
    metric: "3 à 36 kWc",
    href: "/residentiel",
    text: "Autoconsommation, stockage et pilotage pour réduire durablement votre facture.",
  },
  {
    title: "Professionnels",
    metric: "36 à 100 kWc",
    href: "/professionnels-industriels",
    text: "Toitures d’activité, tertiaire et ombrières dimensionnées autour de vos usages réels.",
  },
  {
    title: "Industrie & agriculture",
    metric: "100 à 500 kWc",
    href: "/professionnels-industriels",
    text: "Grandes puissances, contraintes techniques complexes et stratégie énergétique à l’échelle du site.",
  },
];

const refs = [
  {
    image: "/media/project-orchard.jpg",
    location: "Projet agricole",
    type: "Toiture photovoltaïque",
    power: "Vue drone",
    detail: "Bâtiment photovoltaïque intégré à son environnement, documenté par prise de vue aérienne.",
  },
  {
    image: "/media/project-install.jpg",
    location: "Chantier en toiture",
    type: "Implantation photovoltaïque",
    power: "Détail chantier",
    detail: "Vue rapprochée d’une installation en toiture pour montrer l’implantation et le niveau de finition.",
  },
  {
    image: "/media/project-roof.jpg",
    location: "Grande toiture",
    type: "Couverture solaire",
    power: "Surface valorisée",
    detail: "Vue aérienne d’une toiture équipée sur une grande surface disponible.",
  },
];

const method = [
  ["01", "Analyse", "Consommation, toiture, irradiation, ombrages et potentiel économique."],
  ["02", "Conception", "Dimensionnement précis, choix des équipements et implantation optimisée."],
  ["03", "Réalisation", "Pose, coordination, contrôle qualité et documentation du chantier."],
  ["04", "Performance", "Mise en service, supervision et accompagnement dans la durée."],
] as const;

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function AccueilPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ocean-950 text-white">
        <div className="container-px grid min-h-[700px] items-center gap-12 py-16 lg:grid-cols-[.9fr_1.1fr] lg:py-24">
          <div>
            <p className="eyebrow text-solar-300">Ingénierie photovoltaïque • Marseille & région Sud</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Votre toiture devient <span className="text-gradient block">une source de performance.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ocean-100">
              HelioSolar conçoit, installe et supervise des centrales photovoltaïques sur mesure pour particuliers,
              professionnels, industriels et exploitations agricoles.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/demande-etude">Demander mon étude gratuite <Arrow /></Button>
              <Button href="/realisations" variant="secondary">Voir les réalisations</Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-7">
              <div><p className="text-2xl font-bold">QualiPV 500</p><p className="text-xs text-ocean-300">Qualification photovoltaïque</p></div>
              <div><p className="text-2xl font-bold">360°</p><p className="text-xs text-ocean-300">Étude, pose et suivi</p></div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] border border-white/10 bg-ocean-900 shadow-panel">
            <Photo src="/media/hero-agri.jpg" alt="Réalisation photovoltaïque agricole HelioSolar vue par drone" eager className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-ocean-950/75 px-4 py-2 text-xs font-bold uppercase tracking-[.16em]">Réalisation réelle • vue drone</div>
          </div>
        </div>
      </section>

      <section className="border-b border-ocean-900/10 bg-white py-8 dark:bg-ocean-950">
        <div className="container-px grid gap-5 text-sm font-semibold sm:grid-cols-3">
          <p>Études techniques personnalisées</p><p>Installations professionnelles</p><p>Suivi énergétique structuré</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px">
          <Reveal><p className="eyebrow">Solutions</p><h2 className="mt-4 text-4xl font-bold text-ocean-950 dark:text-white sm:text-5xl">Une expertise adaptée à chaque échelle.</h2></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link href={s.href} className="card-premium flex min-h-[280px] flex-col p-8">
                  <span className="w-fit rounded-full bg-ocean-50 px-3 py-1 text-xs font-bold text-ocean-700">{s.metric}</span>
                  <h3 className="mt-9 text-2xl font-bold text-ocean-950 dark:text-white">{s.title}</h3>
                  <p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{s.text}</p>
                  <span className="mt-auto pt-7 text-sm font-bold text-ocean-700 dark:text-ocean-100">Explorer →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean-950 py-24 text-white">
        <div className="container-px grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <Reveal><p className="eyebrow text-solar-300">Immersion chantier</p><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Des réalisations visibles, pas seulement promises.</h2><p className="mt-6 leading-8 text-ocean-100">Vues drone, implantation et résultat final : nos médias montrent concrètement le niveau de chantier.</p></Reveal>
          <Reveal>
            <Link href="/realisations" className="relative block aspect-video overflow-hidden rounded-[30px] border border-white/10">
              <Photo src="/media/project-industrial.jpg" alt="Grande toiture photovoltaïque professionnelle" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/65 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 text-xl font-bold">Découvrir nos chantiers</p>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px">
          <Reveal><p className="eyebrow">Références</p><h2 className="mt-4 text-4xl font-bold text-ocean-950 dark:text-white sm:text-5xl">Le terrain comme meilleure preuve.</h2></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {refs.map((p, i) => (
              <Reveal key={p.image} delay={i * 80}>
                <article className="card-premium h-full overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Photo src={p.image} alt={`${p.type} — ${p.location}`} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/55 via-transparent to-transparent" />
                    <p className="absolute bottom-5 left-5 text-2xl font-black text-white">{p.power}</p>
                  </div>
                  <div className="p-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-solar-600">{p.location}</p><h3 className="mt-3 text-xl font-bold text-ocean-950 dark:text-white">{p.type}</h3><p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{p.detail}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean-50 py-24 dark:bg-white/[.02]">
        <div className="container-px grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal><p className="eyebrow">Notre méthode</p><h2 className="mt-4 text-4xl font-bold text-ocean-950 dark:text-white sm:text-5xl">La maîtrise du projet, de la donnée au terrain.</h2></Reveal>
          <div className="divide-y divide-ocean-900/10 border-y border-ocean-900/10">
            {method.map(([n, t, x]) => <div key={n} className="grid gap-3 py-7 sm:grid-cols-[60px_160px_1fr]"><span className="text-xs font-bold text-solar-600">{n}</span><h3 className="text-xl font-bold text-ocean-950 dark:text-white">{t}</h3><p className="leading-7 text-slatebrand-500 dark:text-ocean-100">{x}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-24"><div className="container-px"><div className="rounded-5xl bg-gradient-to-br from-ocean-700 to-ocean-950 px-8 py-14 text-white"><p className="eyebrow text-solar-300">Votre projet</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Transformons votre potentiel solaire en projet concret.</h2><div className="mt-8"><Button href="/demande-etude">Lancer mon étude <Arrow /></Button></div></div></div></section>
    </>
  );
}
