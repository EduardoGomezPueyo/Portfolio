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
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    heroImage: z.string(),
    role: z.string(),
    timeline: z.string(),
    tools: z.array(z.string()),
    team: z.string().optional(),
    order: z.number(),
    lang: z.enum(['en', 'es']),
    slug: z.string(),
  }),
});

export const collections = { 'case-studies': caseStudies };
