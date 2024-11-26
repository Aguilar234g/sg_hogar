import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sghogar.es',
  base: '/',
  server: {
    host: true,
    port: 4321
  },
  output: 'static',
  trailingSlash: 'never'
});