import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_WEBSITE || 'https://sre.cm',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
