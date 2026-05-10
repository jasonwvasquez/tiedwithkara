import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jasonvasquez.github.io',
  base: '/tiedwithkara',
  trailingSlash: 'always', // Add this line
  vite: {
    plugins: [tailwindcss()]
  }
});