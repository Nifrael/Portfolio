import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/** Symboles géométriques associés aux projets featured (cf. ShapeSymbol). */
export const PROJECT_SHAPES = [
  "triangle",
  "circle",
  "cross",
  "square",
] as const;
export type ProjectShape = (typeof PROJECT_SHAPES)[number];

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(250),
      publishDate: z.coerce.date(),
      featured: z.boolean().default(false),
      shape: z.enum(PROJECT_SHAPES).optional(),
      tags: z.array(z.string()),
      cover: z.object({
        src: image(),
        alt: z.string(),
      }),
      links: z
        .object({
          live: z.url().optional(),
          repository: z.url().optional(),
        })
        .optional(),
    }),
});

export const collections = { projects };
