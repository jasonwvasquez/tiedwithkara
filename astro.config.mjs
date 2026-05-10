import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Replace 'username' and 'repo' with yours
  site: 'https://jasonwvasquez.github.io/tiedwithkara', 
  vite: {
    plugins: [tailwindcss()]
  }
});