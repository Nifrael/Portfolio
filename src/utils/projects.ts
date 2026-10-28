import { getCollection, type CollectionEntry } from "astro:content";

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
