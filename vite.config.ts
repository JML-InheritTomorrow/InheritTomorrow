// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/InheritTomorrow/',
  build: {
    outDir: 'docs'
  },
  server: {
    allowedHosts: ['5173-i6vbbzdp9dwypfagm528t-ad7476d0.manus.computer']
  }
})
