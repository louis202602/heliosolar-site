import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

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
] as const;

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

const proofs = [
  { value: "3 → 500 kWc", label: "Du résidentiel à l’industrie" },
  { value: "25 ans", label: "Horizon de performance des modules" },
  { value: "1 350 kWh/kWc", label: "Rendement annuel moyen estimé" },
  { value: "100 %", label: "Études dimensionnées sur mesure" },
];

const differentiators = [
  {
    icon: "engineering" as const,
    title: "Ingénierie, pas de catalogue",
    text: "Chaque implantation est dimensionnée à partir de vos courbes de consommation, de votre toiture et de votre objectif économique — jamais copiée-collée.",
  },
  {
    icon: "transparency" as const,
    title: "Transparence totale",
    text: "Hypothèses de production, contraintes techniques, rentabilité attendue et limites du projet : tout est expliqué clairement, avant décision.",
  },
  {
    icon: "contact" as const,
    title: "Un seul interlocuteur",
    text: "De la qualification du besoin à la supervision post-mise en service, un pilotage structuré et un contact identifié tout au long du projet.",
  },
];

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
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

function DiffIcon({ name }: { name: "engineering" | "transparency" | "contact" }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "engineering") {
    // Blueprint / precision
    return (
      <svg {...common}>
        <path d="M3 21h18M6 21V8l6-4 6 4v13" />
        <path d="M9.5 21v-4a2.5 2.5 0 0 1 5 0v4M12 8.2v.01" />
      </svg>
    );
  }
  if (name === "transparency") {
    // Eye / clarity
    return (
      <svg {...common}>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.6" />
      </svg>
    );
  }
  // Single point of contact / person
  return (
    <svg {...common}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </svg>
  );
}

/* Purposeful hero visual: a stylised photovoltaic array topped by a live
   production-supervision panel — it shows what HelioSolar actually delivers. */
function HeroVisual() {
  const bars = [38, 52, 61, 74, 83, 91, 78, 64];
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
      {/* Panel array */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-ocean-800 via-ocean-900 to-ocean-950 p-4 shadow-panel">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,184,0,0.16),transparent_40%)]" />
        <div className="grid grid-cols-4 gap-2.5 [perspective:1000px]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-gradient-to-br from-ocean-500/25 via-ocean-700/40 to-ocean-950"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:10px_10px]" />
              <div className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/10" />
            </div>
          ))}
        </div>
      </div>

      {/* Live supervision card */}
      <div className="float-slow absolute -bottom-8 -left-4 w-[62%] rounded-2xl border border-white/10 bg-ocean-950/85 p-4 shadow-panel backdrop-blur-xl sm:-left-8">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ocean-300">Production du jour</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> live
          </span>
        </div>
        <p className="mt-2 text-2xl font-extrabold text-white">
          128,4 <span className="text-sm font-semibold text-ocean-200">kWh</span>
        </p>
        <div className="mt-3 flex h-14 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-sm ${i === 5 ? "bg-solar-400" : "bg-ocean-500/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <div className="float-slow absolute -right-3 top-6 rounded-2xl border border-white/10 bg-ocean-950/85 px-4 py-3 shadow-panel backdrop-blur-xl [animation-delay:1.2s] sm:-right-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ocean-300">Autoconsommation</p>
        <p className="mt-1 text-lg font-bold text-solar-300">+ 68 %</p>
      </div>
    </div>
  );
}

export default function AccueilPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-ocean-950 text-white">
        <div className="solar-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[940px] -translate-x-1/2 rounded-full bg-ocean-500/20 blur-[140px]" />
        <div className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full bg-solar-500/10 blur-[100px]" />

        <div className="relative container-px grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="hero-rise max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-solar-300 shadow-[0_0_14px_rgba(255,215,94,0.9)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ocean-100">
                Ingénierie photovoltaïque • Marseille & région Sud
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Votre toiture devient
              <span className="text-gradient block">une source de performance</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.75] text-ocean-100/90 sm:text-lg sm:leading-[1.7]">
              HelioSolar conçoit, installe et supervise des centrales photovoltaïques sur mesure pour les particuliers,
              professionnels, industriels et exploitations agricoles. Une ingénierie exigeante, des données claires, une
              performance suivie dans le temps.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/demande-etude">
                Demander mon étude gratuite <ArrowIcon />
              </Button>
              <Button href="/realisations" variant="secondary">
                Voir les réalisations
              </Button>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-bold text-white">QualiPV 500</p>
                <p className="mt-1 text-xs text-ocean-300">Qualification photovoltaïque</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">500 kWc</p>
                <p className="mt-1 text-xs text-ocean-300">Projets étudiés</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">360°</p>
                <p className="mt-1 text-xs text-ocean-300">Étude, pose et suivi</p>
              </div>
            </div>
          </div>

          <div className="hero-rise [animation-delay:120ms]">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <section className="border-b border-ocean-900/10 bg-white dark:border-white/10 dark:bg-ocean-950">
        <div className="container-px grid gap-6 py-8 sm:grid-cols-3">
          {["Études techniques personnalisées", "Installations professionnelles", "Suivi énergétique structuré"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm font-semibold text-ocean-900 dark:text-ocean-100"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-solar-500/15 text-solar-600 dark:text-solar-300">
                  <CheckIcon />
                </span>
                {item}
              </div>
            ),
          )}
        </div>
      </section>

      {/* ── WHY DIFFERENT ────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Pourquoi HelioSolar</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-ocean-950 dark:text-white sm:text-5xl">
              Une exigence d’ingénieur, une clarté d’entrepreneur.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="card-premium h-full p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-solar-500/12 text-solar-600 dark:text-solar-300">
                    <DiffIcon name={item.icon} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-ocean-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slatebrand-500 dark:text-ocean-100">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ocean-50 py-24 dark:bg-white/[0.02] sm:py-28">
        <div className="container-px">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <Reveal>
              <p className="eyebrow">Solutions</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-ocean-950 dark:text-white sm:text-5xl">
                Une expertise adaptée à chaque échelle.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-2xl text-base leading-8 text-slatebrand-500 dark:text-ocean-100 lg:justify-self-end">
                La même exigence d’ingénierie, de transparence et de performance, quel que soit le profil du site ou la
                puissance visée.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector.index} delay={i * 90}>
                <Link
                  href={sector.href}
                  className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-4xl border border-ocean-900/10 bg-white p-7 shadow-card transition-all duration-500 ease-premium hover:-translate-y-2 hover:shadow-card-hover dark:border-white/10 dark:bg-white/[0.035]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ocean-100/40 via-transparent to-solar-100/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-ocean-500/10 dark:to-solar-500/5" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.22em] text-solar-600 dark:text-solar-300">
                        {sector.index}
                      </span>
                      <span className="rounded-full bg-ocean-50 px-3 py-1 text-xs font-bold text-ocean-700 dark:bg-white/5 dark:text-ocean-100">
                        {sector.metric}
                      </span>
                    </div>
                    <div className="mt-14 h-px w-14 bg-solar-500 transition-all duration-500 ease-premium group-hover:w-24" />
                    <h3 className="mt-6 text-2xl font-bold text-ocean-950 dark:text-white">{sector.title}</h3>
                    <p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{sector.text}</p>
                    <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-ocean-700 transition-colors group-hover:text-solar-600 dark:text-ocean-100 dark:group-hover:text-solar-300">
                      Explorer <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMMERSION / SHOWCASE ─────────────────────────────── */}
      <section className="bg-ocean-950 py-24 text-white sm:py-28">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-solar-300">Immersion chantier</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                Des réalisations visibles, pas seulement promises.
              </h2>
              <p className="mt-6 max-w-md leading-8 text-ocean-100">
                Nos chantiers sont documentés en images et en vidéo drone : implantation, exécution et mise en service.
                Vous voyez concrètement le niveau de finition attendu sur votre propre projet.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-ocean-100">
                {["Prises de vue drone", "Suivi d’exécution", "Contrôle qualité documenté"].map((label) => (
                  <span key={label} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Link
                href="/realisations"
                aria-label="Découvrir nos réalisations photovoltaïques"
                className="group relative block aspect-video overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-ocean-700 via-ocean-900 to-black shadow-panel transition-all duration-500 ease-premium hover:border-solar-300/40"
              >
                <div className="solar-grid absolute inset-0 opacity-35" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,215,94,0.18),transparent_28%)]" />
                {/* Stylised panel-array motif — a real branded visual, not a fake player */}
                <div className="absolute inset-0 grid grid-cols-6 gap-1.5 p-6 opacity-40 [perspective:900px]">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-[3px] border border-white/10 bg-gradient-to-br from-ocean-400/25 to-ocean-950"
                    />
                  ))}
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-transform duration-500 ease-premium group-hover:scale-105">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 text-solar-300" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-solar-300">Nos chantiers</p>
                    <p className="mt-1 text-sm text-ocean-100">Explorer les réalisations photovoltaïques</p>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    Voir
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REFERENCES ───────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="container-px">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <p className="eyebrow">Références</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-ocean-950 dark:text-white sm:text-5xl">
                Des projets concrets, à différentes puissances.
              </h2>
            </Reveal>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-sm font-bold text-ocean-700 transition-colors hover:text-solar-600 dark:text-ocean-100 dark:hover:text-solar-300"
            >
              Toutes les réalisations <ArrowIcon />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {references.map((project, i) => (
              <Reveal key={project.power} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-4xl border border-ocean-900/10 bg-white shadow-card transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-card-hover dark:border-white/10 dark:bg-white/[0.035]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ocean-700 to-ocean-950">
                    <div className="solar-grid absolute inset-0 opacity-35" />
                    <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-solar-500/25 blur-3xl" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <p className="text-4xl font-black tracking-[-0.04em] text-white">{project.power}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-solar-600 dark:text-solar-300">
                        {project.location}
                      </p>
                      <p className="text-xs text-slatebrand-500 dark:text-ocean-300">{project.type}</p>
                    </div>
                    <p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{project.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF / KEY FIGURES ──────────────────────────────── */}
      <section className="bg-ocean-50 py-20 dark:bg-white/[0.02] sm:py-24">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Chiffres clés</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-ocean-950 dark:text-white sm:text-4xl">
              Des repères concrets pour décider en confiance.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proofs.map((proof, i) => (
              <Reveal key={proof.label} delay={(i % 4) * 80}>
                <div className="card-premium h-full p-7 text-center">
                  <p className="text-3xl font-extrabold tracking-[-0.03em] text-ocean-950 dark:text-white sm:text-4xl">
                    {proof.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slatebrand-500 dark:text-ocean-100">{proof.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHOD ───────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="eyebrow">Notre méthode</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-ocean-950 dark:text-white sm:text-5xl">
                La maîtrise du projet, de la donnée au terrain.
              </h2>
              <p className="mt-6 max-w-md leading-8 text-slatebrand-500 dark:text-ocean-100">
                Chaque décision repose sur une analyse technique et économique claire. Vous savez ce qui est prévu,
                pourquoi, et avec quel résultat attendu.
              </p>
            </Reveal>
            <div className="divide-y divide-ocean-900/10 border-y border-ocean-900/10 dark:divide-white/10 dark:border-white/10">
              {method.map(([number, title, text], i) => (
                <Reveal key={number} delay={i * 70}>
                  <div className="group grid gap-4 py-7 sm:grid-cols-[60px_180px_1fr] sm:items-center">
                    <span className="text-xs font-bold tracking-[0.2em] text-solar-600 dark:text-solar-300">
                      {number}
                    </span>
                    <h3 className="text-xl font-bold text-ocean-950 dark:text-white">{title}</h3>
                    <p className="leading-7 text-slatebrand-500 transition-colors group-hover:text-ocean-950 dark:text-ocean-100 dark:group-hover:text-white">
                      {text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="container-px">
          <Reveal>
            <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-ocean-700 to-ocean-950 px-7 py-14 text-white shadow-panel sm:px-12 lg:px-16 lg:py-16">
              <div className="solar-grid pointer-events-none absolute inset-0 opacity-30" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-solar-500/15 blur-[80px]" />
              <Image
                src="/brand/heliosolar-mark.png"
                alt=""
                width={320}
                height={240}
                className="pointer-events-none absolute -bottom-20 right-8 hidden w-72 opacity-[0.08] lg:block"
              />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="eyebrow text-solar-300">Votre projet</p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                    Transformons votre potentiel solaire en projet concret.
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-ocean-100">
                    Une première étude structurée pour estimer la faisabilité, la puissance pertinente et les prochaines
                    étapes. Sans engagement.
                  </p>
                </div>
                <Button href="/demande-etude" className="whitespace-nowrap">
                  Lancer mon étude <ArrowIcon />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
