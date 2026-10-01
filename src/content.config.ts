import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './data/categories';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string().optional(),
    role: z.string(),
    category: z.enum(categories),
    company: z.string().optional(),
    type: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().default(''),
    tags: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(false),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { work };
