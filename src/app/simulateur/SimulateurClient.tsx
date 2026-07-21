"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const inputClass = "w-full rounded-2xl border border-ocean-900/10 bg-white px-4 py-3.5 text-sm text-ocean-950 shadow-sm outline-none transition focus:border-solar-500 focus:ring-4 focus:ring-solar-400/15 dark:border-white/10 dark:bg-white/[.045] dark:text-white";

function eur(value: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function number(value: number) {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(value);
}

export function SimulateurClient() {
  const [consumption, setConsumption] = useState(7000);
  const [bill, setBill] = useState(1800);
  const [surface, setSurface] = useState(45);
  const [selfUse, setSelfUse] = useState(65);

  const result = useMemo(() => {
    const maxPowerBySurface = surface / 5;
    const targetPower = consumption / 1350;
    const power = Math.max(1, Math.min(maxPowerBySurface, targetPower, 36));
    const production = power * 1350;
    const consumedSolar = Math.min(production * (selfUse / 100), consumption);
    const avgPrice = bill > 0 && consumption > 0 ? bill / consumption : 0.25;
    const yearlySavings = consumedSolar * avgPrice;
    const avoidedCo2 = production * 0.055;
    return { power, production, consumedSolar, yearlySavings, avoidedCo2 };
  }, [consumption, bill, surface, selfUse]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
      <section className="rounded-[30px] border border-ocean-900/10 bg-white p-6 shadow-[0_20px_70px_rgba(6,23,37,.08)] dark:border-white/10 dark:bg-white/[.035] sm:p-8">
        <h2 className="text-2xl font-bold text-ocean-950 dark:text-white">Vos informations</h2>
        <p className="mt-2 text-sm leading-6 text-slatebrand-500 dark:text-ocean-100">Aucune donnée n’est envoyée. Le calcul reste dans votre navigateur.</p>
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <Field label="Consommation annuelle (kWh)"><input className={inputClass} type="number" min="1000" max="500000" value={consumption} onChange={(e) => setConsumption(Number(e.target.value) || 0)} /></Field>
          <Field label="Facture annuelle d’électricité (€)"><input className={inputClass} type="number" min="0" max="200000" value={bill} onChange={(e) => setBill(Number(e.target.value) || 0)} /></Field>
          <Field label="Surface de toiture disponible (m²)"><input className={inputClass} type="number" min="5" max="10000" value={surface} onChange={(e) => setSurface(Number(e.target.value) || 0)} /></Field>
          <Field label={`Autoconsommation estimée : ${selfUse}%`}><input className="w-full accent-solar-500" type="range" min="30" max="95" step="5" value={selfUse} onChange={(e) => setSelfUse(Number(e.target.value))} /></Field>
        </div>
        <div className="mt-8 rounded-2xl border border-solar-500/20 bg-solar-400/10 p-4 text-sm leading-6 text-ocean-900 dark:text-ocean-100">
          Estimation indicative fondée sur un rendement moyen de 1 350 kWh/kWc/an et environ 5 m² par kWc. L’orientation, l’ombrage, la structure, le réseau et les tarifs réels doivent être étudiés.
        </div>
      </section>

      <aside className="rounded-[30px] bg-ocean-950 p-6 text-white shadow-panel sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-solar-300">Résultat instantané</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-.03em]">Votre potentiel solaire estimé</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <Metric label="Puissance indicative" value={`${result.power.toFixed(1).replace('.', ',')} kWc`} />
          <Metric label="Production annuelle" value={`${number(result.production)} kWh`} />
          <Metric label="Économie annuelle" value={eur(result.yearlySavings)} />
          <Metric label="CO₂ évité estimé" value={`${number(result.avoidedCo2)} kg/an`} />
        </div>
        <div className="mt-8 border-t border-white/10 pt-7">
          <p className="text-sm leading-6 text-ocean-100">Pour obtenir un dimensionnement fiable, HelioSolar analyse la facture, la toiture, les ombrages et le profil de consommation.</p>
          <Link href={`/demande-etude?consommation=${consumption}&surface=${surface}`} className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-solar-400 px-6 py-3 text-sm font-extrabold text-ocean-950 transition hover:-translate-y-0.5 hover:bg-solar-300">Recevoir une étude personnalisée</Link>
        </div>
      </aside>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="grid gap-2 text-sm font-semibold text-ocean-950 dark:text-white"><span>{label}</span>{children}</label>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[.055] p-5"><p className="text-xs uppercase tracking-[.16em] text-ocean-300">{label}</p><p className="mt-2 text-2xl font-bold text-white">{value}</p></div>;
}
