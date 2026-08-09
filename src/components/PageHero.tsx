import Link from "next/link";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ocean-950 py-24 text-white sm:py-32">
      <div className="solar-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[760px] -translate-x-1/2 rounded-full bg-ocean-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full bg-solar-500/10 blur-[100px]" />
      <div className="relative container-px">
        <div className="hero-rise">
          <p className="eyebrow text-solar-300">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ocean-100 sm:text-lg">{description}</p>
          {cta && (
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/demande-etude"
                className="btn-sheen inline-flex items-center gap-2 rounded-full bg-solar-500 px-6 py-3 text-sm font-bold text-ocean-950 shadow-solar-btn transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-solar-400"
              >
                Demander une étude
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-white/10"
              >
                Voir les réalisations
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { number?: string; title: string; text: string; metric?: string }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={(index % 3) * 90}>
          <article className="group card-premium h-full p-7 hover:-translate-y-1.5 hover:border-solar-500/40 hover:shadow-card-hover">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-[0.2em] text-solar-600 dark:text-solar-300">
                {item.number ?? String(index + 1).padStart(2, "0")}
              </span>
              {item.metric && (
                <span className="rounded-full bg-ocean-50 px-3 py-1 text-xs font-bold text-ocean-700 dark:bg-white/5 dark:text-ocean-100">
                  {item.metric}
                </span>
              )}
            </div>
            <div className="mt-8 h-px w-12 bg-solar-500 transition-all duration-500 ease-premium group-hover:w-20" />
            <h2 className="mt-6 text-2xl font-bold tracking-[-0.025em] text-ocean-950 dark:text-white">
              {item.title}
            </h2>
            <p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
