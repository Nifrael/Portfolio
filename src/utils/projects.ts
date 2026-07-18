import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

const byNewestFirst = (a: Project, b: Project): number =>
  b.data.publishDate.valueOf() - a.data.publishDate.valueOf();

/** Tous les projets, triés du plus récent au plus ancien. */
export async function getSortedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort(byNewestFirst);
}

/** Les projets mis en avant (featured), triés du plus récent au plus ancien. */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getSortedProjects();
  return projects.filter((project) => project.data.featured);
}
