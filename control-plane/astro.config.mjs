import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sowthri-industrial-ai.github.io',
  integrations: [sitemap()],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
