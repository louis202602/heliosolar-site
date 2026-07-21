import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Mentions légales (provisoire) — HelioSolar",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <Section eyebrow="Page provisoire" title="Mentions légales">
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-steel-700 dark:text-steel-100">
        <p className="rounded-md bg-copper-100/60 px-4 py-3 text-copper-700 dark:bg-copper-700/20 dark:text-copper-300">
          Cette page est incomplète. Aucune mention légale réelle (identité de l&apos;entreprise, SIRET, capital
          social, directeur de publication, hébergeur, etc.) n&apos;a été renseignée : elle doit être rédigée avec un
          juriste avant toute mise en ligne publique.
        </p>
        <p>Sections à compléter :</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Identification de l&apos;éditeur du site</li>
          <li>Identification de l&apos;hébergeur</li>
          <li>Directeur de la publication</li>
          <li>Propriété intellectuelle</li>
        </ul>
      </div>
    </Section>
  );
}
