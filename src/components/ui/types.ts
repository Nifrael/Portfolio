import type { ProjectShape } from "../../content.config";

/** Carte associée à l'un des quatre symboles (services, compétences…). */
export interface ShapeCardItem {
  shape: ProjectShape;
  titre: string;
  texte: string;
  tags?: string[];
}
