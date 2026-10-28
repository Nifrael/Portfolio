import { getCollection, type CollectionEntry } from "astro:content";
import { PROJECT_SHAPES, type ProjectShape } from "../content.config";

export type Project = CollectionEntry<"projects">;

const byNewestFirst = (a: Project, b: Project): number =>
  b.data.publishDate.valueOf() - a.data.publishDate.valueOf();

/** Tous les projets, triés du plus récent au plus ancien. */
export async function getSortedProjects(): Promise<Project[]> {
  const projects = await getCollection("projects");
  return projects.sort(byNewestFirst);
}

/** Nombre maximum de projets en vitrine sur l'accueil (un par symbole △ ○ × □). */
export const MAX_FEATURED_PROJECTS = 4;

/**
 * Les projets mis en avant (featured), du plus récent au plus ancien, limités
 * à MAX_FEATURED_PROJECTS. Les autres restent visibles sur l'index /projets.
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getSortedProjects();
  return projects
    .filter((project) => project.data.featured)
    .slice(0, MAX_FEATURED_PROJECTS);
}

/**
 * Symbole d'un projet : celui du frontmatter `shape`, sinon le cycle
 * △ ○ × □ selon sa position dans la liste.
 */
export function getProjectShape(project: Project, index: number): ProjectShape {
  return project.data.shape ?? PROJECT_SHAPES[index % PROJECT_SHAPES.length];
}

/** Alias de technos comptés comme une seule (cf. TagList). */
const TECH_ALIASES: Record<string, string> = { sass: "scss" };

export interface ProjectStats {
  count: number;
  technologies: number;
  firstYear: number;
  lastYear: number;
}

/** Chiffres clés d'une liste de projets (nombre, technos distinctes, période). */
export function getProjectStats(projects: Project[]): ProjectStats {
  const technologies = new Set(
    projects.flatMap(({ data }) =>
      data.tags.map((tag) => {
        const key = tag.toLowerCase();
        return TECH_ALIASES[key] ?? key;
      }),
    ),
  );
  const years = projects.map(({ data }) => data.publishDate.getFullYear());

  return {
    count: projects.length,
    technologies: technologies.size,
    firstYear: Math.min(...years),
    lastYear: Math.max(...years),
  };
}
