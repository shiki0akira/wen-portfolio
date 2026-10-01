// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// 待補 notes (<div class="todo">) are reminders for the author: they show in local preview,
// and are stripped from the built HTML so they never reach the live site.
const removeTodoNotes = {
  name: 'remove-todo-notes',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const walk = (/** @type {string} */ d) => {
        for (const f of readdirSync(d)) {
          const p = join(d, f);
          if (statSync(p).isDirectory()) walk(p);
          else if (p.endsWith('.html')) {
            const html = readFileSync(p, 'utf8');
            const out = html.replace(/<div class="todo"[^>]*>[\s\S]*?<\/div>/g, '');
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
  devToolbar: { enabled: false },
  integrations: [removeTodoNotes],
});
