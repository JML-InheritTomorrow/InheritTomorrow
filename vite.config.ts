// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/InheritTomorrow/', // Set base path for GitHub Pages
  build: {
    outDir: 'docs', // Output directory for build - set to docs for GitHub Pages
  }
})
