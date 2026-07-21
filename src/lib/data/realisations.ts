import type { Realisation } from "@/lib/types";

/**
 * Données d'exemple — à remplacer par les vraies réalisations HelioSolar.
 * Aucune de ces entrées ne doit être publiée telle quelle : localisations,
 * puissances et contractants sont des placeholders pour valider le modèle
 * de données et le gabarit d'affichage.
 */
export const realisationsExemple: Realisation[] = [
  {
    id: "r-001",
    slug: "hangar-agricole-exemple",
    titre: "Hangar agricole — exemple à remplacer",
    secteur: "agricole",
    typeInstallation: ["toiture", "revente_totale"],
    localisation: "Exemple — Département à préciser",
    puissanceCracCrete_kWc: 100,
    anneeMiseEnService: 2025,
    contractant: {
      raisonSociale: "HelioSolar",
      role: "mandataire_principal",
    },
    description:
      "Contenu d'exemple : décrire ici le projet réel (surface, technique de pose, mise en service).",
    images: [],
    miseEnAvant: true,
  },
  {
    id: "r-002",
    slug: "ombriere-parking-exemple",
    titre: "Ombrière de parking — exemple à remplacer",
    secteur: "professionnel",
    typeInstallation: ["ombriere", "autoconsommation"],
    localisation: "Exemple — Département à préciser",
    puissanceCracCrete_kWc: 250,
    anneeMiseEnService: 2024,
    contractant: {
      raisonSociale: "HelioSolar",
      role: "mandataire_principal",
    },
    description:
      "Contenu d'exemple : décrire ici le projet réel (nombre de places, ombrières, autoconsommation collective).",
    images: [],
  },
  {
    id: "r-003",
    slug: "toiture-residentielle-exemple",
    titre: "Toiture résidentielle — exemple à remplacer",
    secteur: "residentiel",
    typeInstallation: ["toiture", "autoconsommation", "stockage_batterie"],
    localisation: "Exemple — Département à préciser",
    puissanceCracCrete_kWc: 6,
    anneeMiseEnService: 2025,
    contractant: {
      raisonSociale: "Partenaire agréé — nom à préciser",
      role: "sous_traitant",
    },
    description:
      "Contenu d'exemple : décrire ici le projet réel (orientation, batterie, autoconsommation).",
    images: [],
  },
];
