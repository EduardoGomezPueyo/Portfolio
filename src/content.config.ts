import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/data/case-studies',
    generateId: ({ entry }) => {
      // entry is like "en/sakura-sushi.mdx" - use full path without extension as id
      return entry.replace(/\.mdx$/, '');
    },
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: image(),
    heroImage: image(),
    role: z.string(),
    timeline: z.string(),
    platform: z.string(),
    company: z.string(),
    context: z.string(),
    year: z.string(),
    summary: z
      .object({
        problem: z.string(),
        role: z.string(),
        outcome: z.string(),
      })
      .optional(),
    order: z.number(),
    lang: z.enum(['en', 'es']),
    slug: z.string(),
    published: z.boolean().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies };
