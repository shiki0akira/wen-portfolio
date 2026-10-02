import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './data/categories';

const metric = z.object({ value: z.string(), label: z.string() });
const link = z.object({ label: z.string(), href: z.string() });

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
    // Position on the home page (1 = first). Leave out to keep a work off the home page.
    featured: z.number().optional(),
    // Show in-article images smaller (e.g. pages with many tall design boards).
    compactImages: z.boolean().default(false),
    metrics: z.array(metric).default([]),
    links: z.array(link).default([]),
  }),
});

// English translations, matched to `work` by file name. Only text fields; anything left out
// (order, cover, category, featured...) comes from the Chinese entry.
const workEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work-en' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string().optional(),
    role: z.string(),
    company: z.string().optional(),
    type: z.string(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()),
    metrics: z.array(metric).optional(),
    links: z.array(link).optional(),
  }),
});

export const collections = { work, workEn };
