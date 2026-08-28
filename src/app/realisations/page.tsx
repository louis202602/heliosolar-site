import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const projects = [
  { image: "/media/hero-agri.svg", location: "Projet agricole", power: "Grande toiture", type: "Hangar photovoltaïque", detail: "Réalisation sur bâtiment agricole documentée par drone, avec une couverture photovoltaïque dense et une intégration lisible dans son environnement." },
  { image: "/media/realisation-industrial.svg", location: "Site professionnel", power: "Forte puissance", type: "Toiture grande surface", detail: "Implantation photovoltaïque sur une grande surface de toiture pour maximiser le potentiel énergétique disponible." },
  { image: "/media/hero-agri.svg", location: "Exploitation agricole", power: "Sur mesure", type: "Bâtiment photovoltaïque", detail: "Installation en environnement agricole avec vues d’ensemble permettant de juger directement la qualité d’intégration." },
];

export const metadata: Metadata = { title: "Réalisations photovoltaïques — HelioSolar", description: "Découvrez en images des réalisations photovoltaïques HelioSolar sur bâtiments agricoles et professionnels." };

export default function Page() {
  return <>
    <PageHero eyebrow="Réalisations" title="Des projets concrets, documentés et visibles." description="Une sélection de chantiers photovoltaïques réels, photographiés sur le terrain." />
    <section className="py-24 sm:py-28"><div className="container-px">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p,i)=><Reveal key={`${p.location}-${i}`} delay={i*90}><article className="group h-full overflow-hidden rounded-5xl border border-ocean-900/10 bg-white shadow-card transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-card-hover dark:border-white/10 dark:bg-white/[0.035]">
          <div className="relative aspect-[16/10] overflow-hidden"><Image src={p.image} alt={`${p.type} — ${p.location}`} fill unoptimized className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 33vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-ocean-950/75 via-transparent to-transparent"/><div className="absolute inset-x-6 bottom-6"><p className="text-3xl font-black tracking-[-0.04em] text-white">{p.power}</p></div></div>
          <div className="p-7"><p className="text-xs font-bold uppercase tracking-[0.2em] text-solar-600 dark:text-solar-300">{p.location}</p><h2 className="mt-3 text-xl font-bold text-ocean-950 dark:text-white">{p.type}</h2><p className="mt-4 leading-7 text-slatebrand-500 dark:text-ocean-100">{p.detail}</p></div>
        </article></Reveal>)}
      </div>
      <Reveal><div className="mt-16 overflow-hidden rounded-5xl bg-ocean-950 text-white"><div className="grid lg:grid-cols-[1.2fr_0.8fr]"><div className="relative min-h-[320px]"><Image src="/media/realisation-industrial.svg" alt="Vue drone d'une grande toiture photovoltaïque" fill unoptimized className="object-cover" sizes="(min-width:1024px) 60vw,100vw"/><div className="absolute inset-0 bg-gradient-to-r from-transparent to-ocean-950/50" /></div><div className="p-8 sm:p-10 lg:self-center"><p className="eyebrow text-solar-300">Vue drone</p><p className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Voir l’échelle réelle d’un chantier.</p><p className="mt-4 leading-7 text-ocean-100">Des vues réelles permettent de juger immédiatement l’ampleur, l’intégration et le niveau de finition.</p><a href="/demande-etude" className="btn-sheen mt-7 inline-flex rounded-full bg-solar-500 px-6 py-3 text-sm font-bold text-ocean-950">Demander mon étude</a></div></div></div></Reveal>
    </div></section>
  </>;
}
