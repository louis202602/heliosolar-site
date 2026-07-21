import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

const sectors = [
  {
    index: "01",
    title: "Résidentiel",
    text: "Autoconsommation, stockage et pilotage intelligent pour réduire durablement la facture énergétique.",
    href: "/residentiel",
    metric: "3 à 36 kWc",
  },
  {
    index: "02",
    title: "Professionnels",
    text: "Toitures commerciales, bâtiments tertiaires et ombrières conçus autour de vos usages réels.",
    href: "/professionnels-industriels",
    metric: "36 à 100 kWc",
  },
  {
    index: "03",
    title: "Industrie & agriculture",
    text: "Grandes puissances, contraintes techniques complexes et stratégie énergétique à l’échelle du site.",
    href: "/professionnels-industriels",
    metric: "100 à 500 kWc",
  },
];

const method = [
  ["01", "Analyse", "Consommation, toiture, irradiation, ombrages et potentiel économique."],
  ["02", "Conception", "Dimensionnement précis, choix des équipements et implantation optimisée."],
  ["03", "Réalisation", "Pose, coordination, contrôle qualité et suivi documentaire du chantier."],
  ["04", "Performance", "Mise en service, supervision et accompagnement dans la durée."],
];

const references = [
  {
    location: "Toulouse",
    type: "Toiture professionnelle",
    power: "126 kWc",
    detail: "Étude, implantation et exécution photovoltaïque sur bâtiment d’activité.",
  },
  {
    location: "Ytrac",
    type: "Site industriel",
    power: "151,6 kWc",
    detail: "332 modules et 16 strings, avec préparation technique détaillée.",
  },
  {
    location: "Région Sud",
    type: "Bâtiment professionnel",
    power: "49,14 kWc",
    detail: "Solution dimensionnée pour l’autoconsommation et la maîtrise des charges.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function SolarVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]" aria-hidden="true">
      <div className="absolute inset-[6%] rounded-full bg-ocean-500/20 blur-3xl" />
      <div className="orbital-ring absolute inset-[2%] rounded-full border border-dashed border-ocean-300/25" />
      <div className="orbital-ring-reverse absolute inset-[12%] rounded-full border border-ocean-300/20" />
      <div className="pulse-soft absolute inset-[20%] rounded-full border border-white/15 bg-gradient-to-br from-ocean-300/30 via-ocean-700/50 to-ocean-950 shadow-[0_0_110px_rgba(46,111,149,.5)]">
        <div className="absolute inset-[10%] overflow-hidden rounded-full border border-white/10 bg-ocean-900">
          <div className="absolute -left-[30%] top-[20%] h-[38%] w-[160%] rotate-[-16deg] bg-gradient-to-r from-transparent via-ocean-300/35 to-transparent blur-sm" />
          <div className="absolute -left-[20%] top-[45%] h-px w-[145%] rotate-[-12deg] bg-solar-300/70 shadow-[0_0_18px_rgba(255,215,94,.8)]" />
          <div className="absolute left-[26%] top-[24%] h-2 w-2 rounded-full bg-solar-300 shadow-[0_0_16px_rgba(255,215,94,1)]" />
          <div className="absolute bottom-[15%] left-[8%] h-[36%] w-[84%] rounded-[50%] bg-ocean-950/70" />
        </div>
      </div>
      <div className="float-slow absolute right-[1%] top-[14%] rounded-2xl border border-white/10 bg-ocean-950/70 px-4 py-3 shadow-panel backdrop-blur-xl">
        <p className="text-[10px] uppercase tracking-[.18em] text-ocean-300">Production</p>
        <p className="mt-1 text-lg font-bold text-white">Pilotée</p>
      </div>
      <div className="float-slow absolute bottom-[13%] left-0 rounded-2xl border border-white/10 bg-ocean-950/70 px-4 py-3 shadow-panel backdrop-blur-xl [animation-delay:1.2s]">
        <p className="text-[10px] uppercase tracking-[.18em] text-ocean-300">Études</p>
        <p className="mt-1 text-sm font-semibold text-solar-300">Sur mesure</p>
      </div>
    </div>
  );
}

export default function AccueilPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ocean-950 text-white">
        <div className="solar-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-0 h-[560px] w-[940px] -translate-x-1/2 rounded-full bg-ocean-500/20 blur-[140px]" />
        <div className="absolute -right-20 top-24 h-64 w-64 rounded-full bg-solar-500/10 blur-[100px]" />

        <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-solar-300 shadow-[0_0_14px_rgba(255,215,94,.9)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[.22em] text-ocean-100">
                Ingénierie photovoltaïque • Marseille & région Sud
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Votre toiture devient
              <span className="text-gradient block">une source de performance.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-ocean-100 sm:text-lg">
              HelioSolar conçoit et réalise des installations photovoltaïques sur mesure pour les particuliers,
              professionnels, industriels et exploitations agricoles.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/demande-etude">Demander mon étude <ArrowIcon /></Button>
              <Button href="/realisations" variant="secondary">Voir les réalisations</Button>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
              <div><p className="text-2xl font-bold text-white">QualiPV 500</p><p className="mt-1 text-xs text-ocean-300">Qualification photovoltaïque</p></div>
              <div><p className="text-2xl font-bold text-white">500 kWc</p><p className="mt-1 text-xs text-ocean-300">Projets étudiés</p></div>
              <div><p className="text-2xl font-bold text-white">360°</p><p className="mt-1 text-xs text-ocean-300">Étude, pose et suivi</p></div>
            </div>
          </div>

          <SolarVisual />
        </div>
      </section>

      <section className="border-b border-ocean-900/10 bg-white dark:border-white/10 dark:bg-ocean-950">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {["Études techniques personnalisées", "Installations professionnelles", "Suivi énergétique structuré"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ocean-900 dark:text-ocean-100">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-solar-500/15 text-solar-600 dark:text-solar-300"><CheckIcon /></span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-solar-600 dark:text-solar-300">Solutions</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-.035em] text-ocean-950 dark:text-white sm:text-5xl">Une expertise adaptée à chaque échelle.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slatebrand-500 dark:text-ocean-100 lg:justify-self-end">
              La même exigence d’ingénierie, de transparence et de performance, quel que soit le profil du site ou la puissance visée.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Link key={sector.index} href={sector.href} className="group relative min-h-[350px] overflow-hidden rounded-[28px] border border-ocean-900/10 bg-white p-7 shadow-[0_18px_60px_rgba(6,23,37,.07)] transition duration-500 hover:-translate-y-2 hover:shadow-panel dark:border-white/10 dark:bg-white/[.035]">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-100/30 via-transparent to-solar-100/40 opacity-0 transition duration-500 group-hover:opacity-100 dark:from-ocean-500/10 dark:to-solar-500/5" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[.22em] text-solar-600 dark:text-solar-300">{sector.index}</span><span className="rounded-full bg-ocean-50 px-3 py-1 text-xs font-bold text-ocean-700 dark:bg-white/5 dark:text-ocean-100">{sector.metric}</span></div>
                  <div className="mt-14 h-px w-14 bg-solar-500 transition-all duration-500 group-hover:w-24" />
                  <h3 className="mt-6 text-2xl font-bold text-ocean-950 dark:text-white">{sector.title}</h3>
                  <p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{sector.text}</p>
                  <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-ocean-700 group-hover:text-solar-600 dark:text-ocean-100 dark:group-hover:text-solar-300">Explorer <ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean-950 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-solar-300">Immersion chantier</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-.035em] sm:text-5xl">Des réalisations visibles, pas seulement promises.</h2>
              <p className="mt-6 max-w-md leading-8 text-ocean-100">Cette zone est prête à accueillir ta vidéo drone principale. Elle sera compressée, sans lecture sonore automatique et optimisée pour le mobile.</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-ocean-100">
                {["Vidéo 10–20 s en accueil", "Version complète en réalisation", "Poster optimisé"].map((label) => <span key={label} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{label}</span>)}
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-ocean-700 via-ocean-900 to-black shadow-panel">
              <div className="solar-grid absolute inset-0 opacity-35" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,215,94,.18),transparent_28%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
                  <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 text-solar-300" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div><p className="text-xs font-bold uppercase tracking-[.2em] text-solar-300">Vidéo drone</p><p className="mt-1 text-sm text-ocean-100">Emplacement prêt pour ton chantier finalisé</p></div>
                <span className="rounded-full bg-black/35 px-3 py-1 text-xs text-white/75 backdrop-blur">À intégrer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[.24em] text-solar-600 dark:text-solar-300">Références</p><h2 className="mt-4 text-4xl font-bold tracking-[-.035em] text-ocean-950 dark:text-white sm:text-5xl">Des projets concrets, à différentes puissances.</h2></div>
            <Link href="/realisations" className="inline-flex items-center gap-2 text-sm font-bold text-ocean-700 hover:text-solar-600 dark:text-ocean-100 dark:hover:text-solar-300">Toutes les réalisations <ArrowIcon /></Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {references.map((project) => (
              <article key={project.power} className="overflow-hidden rounded-[28px] border border-ocean-900/10 bg-white shadow-[0_18px_60px_rgba(6,23,37,.07)] dark:border-white/10 dark:bg-white/[.035]">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ocean-700 to-ocean-950">
                  <div className="solar-grid absolute inset-0 opacity-35" />
                  <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-solar-500/25 blur-3xl" />
                  <div className="absolute inset-0 flex items-end p-6"><p className="text-4xl font-black tracking-[-.04em] text-white">{project.power}</p></div>
                </div>
                <div className="p-6"><div className="flex items-center justify-between gap-4"><p className="text-xs font-bold uppercase tracking-[.18em] text-solar-600 dark:text-solar-300">{project.location}</p><p className="text-xs text-slatebrand-500 dark:text-ocean-300">{project.type}</p></div><p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{project.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean-50 py-24 dark:bg-white/[.025] sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-solar-600 dark:text-solar-300">Notre méthode</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-.035em] text-ocean-950 dark:text-white sm:text-5xl">La maîtrise du projet, de la donnée au terrain.</h2>
              <p className="mt-6 max-w-md leading-8 text-slatebrand-500 dark:text-ocean-100">Chaque décision repose sur une analyse technique et économique claire. Vous savez ce qui est prévu, pourquoi, et avec quel résultat attendu.</p>
            </div>
            <div className="divide-y divide-ocean-900/10 border-y border-ocean-900/10 dark:divide-white/10 dark:border-white/10">
              {method.map(([number, title, text]) => (
                <div key={number} className="group grid gap-4 py-7 sm:grid-cols-[60px_180px_1fr] sm:items-center">
                  <span className="text-xs font-bold tracking-[.2em] text-solar-600 dark:text-solar-300">{number}</span>
                  <h3 className="text-xl font-bold text-ocean-950 dark:text-white">{title}</h3>
                  <p className="leading-7 text-slatebrand-500 transition group-hover:text-ocean-950 dark:text-ocean-100 dark:group-hover:text-white">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-ocean-700 to-ocean-950 px-7 py-14 text-white shadow-panel sm:px-12 lg:px-16 lg:py-16">
            <div className="solar-grid pointer-events-none absolute inset-0 opacity-30" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-solar-500/15 blur-[80px]" />
            <Image src="/brand/heliosolar-mark.png" alt="" width={320} height={240} className="pointer-events-none absolute -bottom-20 right-8 hidden w-72 opacity-[.08] lg:block" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.24em] text-solar-300">Votre projet</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-.03em] sm:text-4xl">Transformons votre potentiel solaire en projet concret.</h2>
                <p className="mt-4 max-w-2xl leading-7 text-ocean-100">Une première étude structurée pour estimer la faisabilité, la puissance pertinente et les prochaines étapes.</p>
              </div>
              <Button href="/demande-etude" className="whitespace-nowrap">Lancer mon étude <ArrowIcon /></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
