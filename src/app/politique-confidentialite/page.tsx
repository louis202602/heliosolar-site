import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité (provisoire) — HelioSolar",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Section eyebrow="Page provisoire" title="Politique de confidentialité">
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-slatebrand-500 dark:text-ocean-100">
        <p className="rounded-2xl border border-solar-500/25 bg-solar-100/55 px-4 py-3 text-ocean-800 dark:bg-solar-500/10 dark:text-solar-100">
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
