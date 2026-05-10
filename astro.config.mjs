import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. The 'site' is your main domain
  site: 'https://jasonvasquez.github.io',
  
  // 2. The 'base' is your repository name (this is the magic fix)
  base: '/tiedwithkara',
  
  vite: {
    plugins: [tailwindcss()]
  }
});