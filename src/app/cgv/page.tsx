import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Conditions générales de vente (provisoire) — HelioSolar",
  robots: { index: false, follow: false },
};

export default function CGVPage() {
  return (
    <Section eyebrow="Page provisoire" title="Conditions générales de vente">
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-steel-700 dark:text-steel-100">
        <p className="rounded-md bg-copper-100/60 px-4 py-3 text-copper-700 dark:bg-copper-700/20 dark:text-copper-300">
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
