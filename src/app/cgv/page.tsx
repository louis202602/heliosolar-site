import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Conditions générales de vente (provisoire) — HelioSolar",
  robots: { index: false, follow: false },
};

export default function CGVPage() {
  return (
    <Section eyebrow="Page provisoire" title="Conditions générales de vente">
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slatebrand-500 dark:text-ocean-100">
        <p className="rounded-2xl border border-solar-500/25 bg-solar-100/55 px-4 py-3 text-ocean-800 dark:bg-solar-500/10 dark:text-solar-100">
          Cette page est incomplète. Aucune condition générale de vente réelle (modalités de devis, délais
          d&apos;installation, garanties, rétractation, SAV, etc.) n&apos;a été rédigée : elle doit être établie avec
          un juriste avant toute mise en ligne publique.
        </p>
        <p>Sections à compléter :</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Modalités de devis et de commande</li>
          <li>Délais et conditions d&apos;installation</li>
          <li>Garanties applicables</li>
          <li>Droit de rétractation et service après-vente</li>
        </ul>
      </div>
    </Section>
  );
}
