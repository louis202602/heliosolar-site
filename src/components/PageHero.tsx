import Link from "next/link";

export function PageHero({ eyebrow, title, description, cta = true }: { eyebrow: string; title: string; description: string; cta?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-ocean-950 py-24 text-white sm:py-32">
      <div className="solar-grid absolute inset-0 opacity-55" />
      <div className="absolute left-1/2 top-0 h-80 w-[760px] -translate-x-1/2 rounded-full bg-ocean-500/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-solar-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-.045em] sm:text-6xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-ocean-100 sm:text-lg">{description}</p>
        {cta && <div className="mt-9 flex flex-wrap gap-4"><Link href="/demande-etude" className="rounded-full bg-solar-400 px-6 py-3 text-sm font-bold text-ocean-950 transition hover:-translate-y-0.5 hover:bg-solar-300">Demander une étude</Link><Link href="/realisations" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10">Voir les réalisations</Link></div>}
      </div>
    </section>
  );
}

export function FeatureGrid({ items }: { items: { number?: string; title: string; text: string; metric?: string }[] }) {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((item, index) => <article key={item.title} className="group rounded-[28px] border border-ocean-900/10 bg-white p-7 shadow-[0_18px_60px_rgba(6,23,37,.07)] transition duration-500 hover:-translate-y-1.5 hover:shadow-panel dark:border-white/10 dark:bg-white/[.035]"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[.2em] text-solar-600 dark:text-solar-300">{item.number ?? String(index + 1).padStart(2, "0")}</span>{item.metric && <span className="rounded-full bg-ocean-50 px-3 py-1 text-xs font-bold text-ocean-700 dark:bg-white/5 dark:text-ocean-100">{item.metric}</span>}</div><div className="mt-8 h-px w-12 bg-solar-500 transition-all duration-500 group-hover:w-20"/><h2 className="mt-6 text-2xl font-bold tracking-[-.025em] text-ocean-950 dark:text-white">{item.title}</h2><p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{item.text}</p></article>)}</div>;
}
