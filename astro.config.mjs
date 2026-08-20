import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jbrauhn.github.io',
  base: '/agentic-engineering-field-guide',
  integrations: [mdx(), sitemap()],
  build: {
    format: 'preserve'
  }
});
