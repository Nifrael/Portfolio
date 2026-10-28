import type { ProjectShape } from '../../content.config';

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

/** Service proposé, associé à l'un des quatre symboles. */
export interface Service {
  shape: ProjectShape;
  titre: string;
  texte: string;
}
