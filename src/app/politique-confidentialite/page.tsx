import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité (provisoire) — HelioSolar",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Section eyebrow="Page provisoire" title="Politique de confidentialité">
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-steel-700 dark:text-steel-100">
        <p className="rounded-md bg-copper-100/60 px-4 py-3 text-copper-700 dark:bg-copper-700/20 dark:text-copper-300">
          Cette page est incomplète. Aucune politique de confidentialité réelle (base légale, durées de conservation,
          sous-traitants, droits RGPD, contact DPO, etc.) n&apos;a été rédigée : elle doit être établie avec un juriste
          avant toute mise en ligne publique, notamment du fait du formulaire de contact et de demande d&apos;étude.
        </p>
        <p>Sections à compléter :</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Données collectées et finalités</li>
          <li>Base légale du traitement</li>
          <li>Durée de conservation</li>
          <li>Droits des personnes concernées et contact</li>
        </ul>
      </div>
    </Section>
  );
}
