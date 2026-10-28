import type { ProjectShape } from '../../content.config';

/** Étape du parcours professionnel (fil néon). */
export interface ParcoursStep {
  periode: string;
  titre: string;
  lieu: string;
  texte: string;
  shape: ProjectShape;
}

/** Étape de formation (frise horizontale). */
export interface FormationStep {
  annee: string;
  diplome: string;
  ecole: string;
  texte: string;
  shape: ProjectShape;
}

/** Carte de compétence associée à l'un des quatre symboles. */
export interface ShapeCard {
  shape: ProjectShape;
  titre: string;
  texte: string;
  tags: string[];
}
