import Link from "next/link";
import { Button } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

const sectors = [
  {
    title: "Résidentiel",
    metric: "3 à 36 kWc",
    href: "/residentiel",
    text: "Autoconsommation, stockage et pilotage : des solutions prévues pour adapter le projet aux usages réels.",
  },
  {
    title: "Professionnels",
    metric: "36 à 100 kWc",
    href: "/professionnels-industriels",
    text: "Toitures d’activité, tertiaire et ombrières : des projets à dimensionner autour des consommations et contraintes du site.",
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
    location: "Expérience terrain agricole",
    type: "Toiture photovoltaïque",
    power: "Vue drone",
    detail: "Média issu de l’expérience professionnelle de Louis Preira dans le photovoltaïque, présenté sans attribuer ce chantier à HelioSolar.",
  },
  {
    image: "/media/project-install.jpg",
    location: "Expérience terrain",
    type: "Implantation photovoltaïque",
    power: "Détail chantier",
    detail: "Vue d’une installation photovoltaïque documentant l’expérience terrain de Louis Preira, sans attribution de réalisation à HelioSolar.",
  },
  {
    image: "/media/project-roof.jpg",
    location: "Expérience grande toiture",
    type: "Couverture solaire",
    power: "Surface équipée",
    detail: "Vue aérienne utilisée pour illustrer l’expérience professionnelle acquise sur des projets photovoltaïques de grande surface.",
  },
];

const method = [
  ["01", "Analyse", "Consommation, toiture, irradiation, ombrages et potentiel économique."],
  ["02", "Conception", "Dimensionnement, choix des équipements et implantation à valider selon les contraintes du projet."],
  ["03", "Préparation", "Organisation du chantier, sécurité, ressources, contrôles et documentation avant exécution."],
  ["04", "Suivi", "Contrôle des résultats, documentation et accompagnement selon le périmètre contractuel futur."],
] as const;

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
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
            <p className="eyebrow text-solar-300">Projet photovoltaïque • Marseille & région Sud</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Votre toiture peut devenir <span className="text-gradient block">une source de performance.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ocean-100">
              HelioSolar est un projet photovoltaïque porté par Louis Preira. Le site présente son expérience terrain,
              les solutions envisagées et permet de manifester un intérêt avant le lancement juridique complet de l’activité d’installation.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/demande-etude">Présenter mon projet <Arrow /></Button>
              <Button href="/realisations" variant="secondary">Voir l’expérience terrain</Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-7">
              <div><p className="text-2xl font-bold">QualiPV 500</p><p className="text-xs text-ocean-300">Qualification obtenue par Louis Preira</p></div>
              <div><p className="text-2xl font-bold">Terrain</p><p className="text-xs text-ocean-300">Expérience photovoltaïque documentée</p></div>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] border border-white/10 bg-ocean-900 shadow-panel sm:aspect-[4/3]">
            <Photo
              src="/media/hero-agri.jpg"
              alt="Expérience professionnelle photovoltaïque agricole de Louis Preira, vue par drone"
              eager
              sizes="(max-width: 1023px) 100vw, 52vw"
              quality={90}
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-950/30 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-ocean-950/75 px-4 py-2 text-xs font-bold uppercase tracking-[.16em]">Expérience terrain • vue drone</div>
          </div>
        </div>
      </section>

      <section className="border-b border-ocean-900/10 bg-white py-8 dark:bg-ocean-950">
        <div className="container-px grid gap-5 text-sm font-semibold sm:grid-cols-3">
          <p>Étude exploratoire du besoin</p><p>Préparation technique du projet</p><p>Qualification et expérience terrain</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px">
          <Reveal><p className="eyebrow">Solutions envisagées</p><h2 className="mt-4 text-4xl font-bold text-ocean-950 dark:text-white sm:text-5xl">Une approche adaptée à chaque échelle.</h2></Reveal>
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
          <Reveal><p className="eyebrow text-solar-300">Expérience terrain</p><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Des médias réels, présentés avec leur contexte.</h2><p className="mt-6 leading-8 text-ocean-100">Ces photos illustrent l’expérience photovoltaïque acquise par Louis Preira. Elles ne sont pas présentées comme des chantiers réalisés juridiquement par HelioSolar.</p></Reveal>
          <Reveal>
            <Link href="/realisations" className="relative block aspect-video overflow-hidden rounded-[30px] border border-white/10 bg-ocean-900">
              <Photo
                src="/media/project-industrial.jpg"
                alt="Grande toiture photovoltaïque issue de l’expérience professionnelle de Louis Preira"
                sizes="(max-width: 1023px) 100vw, 60vw"
                quality={88}
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-950/50 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 text-xl font-bold">Découvrir l’expérience terrain</p>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px">
          <Reveal><p className="eyebrow">Références d’expérience</p><h2 className="mt-4 text-4xl font-bold text-ocean-950 dark:text-white sm:text-5xl">Le terrain comme preuve d’expérience.</h2></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {refs.map((p, i) => (
              <Reveal key={p.image} delay={i * 80}>
                <article className="card-premium h-full overflow-hidden">
                  <div className="relative aspect-[16/10] bg-ocean-900">
                    <Photo
                      src={p.image}
                      alt={`${p.type} — ${p.location}`}
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      quality={88}
                      className="object-cover object-center"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-950/45 via-transparent to-transparent" />
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
          <Reveal><p className="eyebrow">Méthode préparée</p><h2 className="mt-4 text-4xl font-bold text-ocean-950 dark:text-white sm:text-5xl">Structurer chaque projet avant engagement.</h2></Reveal>
          <div className="divide-y divide-ocean-900/10 border-y border-ocean-900/10">
            {method.map(([n, t, x]) => <div key={n} className="grid gap-3 py-7 sm:grid-cols-[60px_160px_1fr]"><span className="text-xs font-bold text-solar-600">{n}</span><h3 className="text-xl font-bold text-ocean-950 dark:text-white">{t}</h3><p className="leading-7 text-slatebrand-500 dark:text-ocean-100">{x}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-24"><div className="container-px"><div className="rounded-5xl bg-gradient-to-br from-ocean-700 to-ocean-950 px-8 py-14 text-white"><p className="eyebrow text-solar-300">Votre projet</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Présentez votre besoin photovoltaïque pour préparer la suite.</h2><div className="mt-8"><Button href="/demande-etude">Présenter mon projet <Arrow /></Button></div></div></div></section>
    </>
  );
}
