import type { ShapeCardItem } from "../ui/types";

/** Chiffre vérifiable affiché dans la bande de preuves. */
export interface ProofStat {
  valeur: string;
  label: string;
}

/** Étape de la méthode de travail, numérotée selon sa position. */
export interface MethodStep {
  titre: string;
  texte: string;
}

/** Service proposé, associé à l'un des quatre symboles (sans tags). */
export type Service = Omit<ShapeCardItem, "tags">;
