/**
 * Modèle de données pour une "Réalisation" (projet installé/livré).
 *
 * Le champ `contractant` identifie l'entité juridique qui a contracté et
 * réalisé les travaux (HelioSolar en direct, ou un partenaire/sous-traitant
 * agréé). Il est distinct du `client` (le bénéficiaire de l'installation),
 * ce qui est nécessaire pour la traçabilité contractuelle et pour toute
 * mention légale future sur les pages de réalisations.
 */

export type SecteurRealisation = "residentiel" | "professionnel" | "industriel" | "agricole";

export type TypeInstallation =
  | "toiture"
  | "ombriere"
  | "au_sol"
  | "autoconsommation"
  | "revente_totale"
  | "stockage_batterie";

export interface Contractant {
  /** Raison sociale de l'entité contractante (peut être HelioSolar ou un partenaire). */
  raisonSociale: string;
  /** Numéro SIREN/SIRET si disponible — laisser vide plutôt qu'inventer une valeur. */
  siret?: string;
  /** Rôle du contractant sur ce projet précis. */
  role: "mandataire_principal" | "cotraitant" | "sous_traitant";
}

export interface Realisation {
  id: string;
  slug: string;
  titre: string;
  secteur: SecteurRealisation;
  typeInstallation: TypeInstallation[];
  /** Ville + département suffisent ; pas d'adresse précise sans consentement. */
  localisation: string;
  puissanceCracCrete_kWc: number;
  anneeMiseEnService: number;
  /** Entité(s) ayant contractuellement réalisé les travaux. */
  contractant: Contractant;
  description: string;
  /** Chemins d'images placeholder — à remplacer par de vrais visuels du chantier. */
  images: string[];
  miseEnAvant?: boolean;
}
