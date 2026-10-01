// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The live site is a GitHub Pages project site: https://shiki0akira.github.io/wen-portfolio/
// Local preview stays at the root (localhost:4321/), so the base path only applies to the build.
const isBuild = process.env.NODE_ENV === 'production';
const BASE = '/wen-portfolio';

// Runs on the built HTML:
// - prefixes root-relative links and images (written as "/work/…", "/images/…" in the source) with BASE;
// - strips 待補 notes (<div class="todo">), which are reminders for the author shown only in local preview.
const finishHtml = {
  name: 'finish-html',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const rootLink = new RegExp(`(href|src)="/(?!/|${BASE.slice(1)}/)`, 'g');
      const walk = (/** @type {string} */ d) => {
        for (const f of readdirSync(d)) {
          const p = join(d, f);
          if (statSync(p).isDirectory()) walk(p);
          else if (p.endsWith('.html')) {
            const html = readFileSync(p, 'utf8');
            const out = html
              .replace(/<div class="todo"[^>]*>[\s\S]*?<\/div>/g, '')
              .replace(rootLink, `$1="${BASE}/`);
            if (out !== html) writeFileSync(p, out);
          }
        }
      };
      walk(fileURLToPath(dir));
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://shiki0akira.github.io',
  base: isBuild ? BASE : undefined,
  devToolbar: { enabled: false },
  integrations: [finishHtml],
});
