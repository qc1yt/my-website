// Settings for the entire Astro project.
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eng-blankspace.pages.dev/', 
  integrations: [sitemap()],
});
