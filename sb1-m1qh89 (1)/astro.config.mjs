import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://mellifluous-bubblegum-07f3b1.netlify.app',
  base: '/'
});