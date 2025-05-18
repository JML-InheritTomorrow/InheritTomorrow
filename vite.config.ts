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
    allowedHosts: [
      '5173-i6vbbzdp9dwypfagm528t-ad7476d0.manus.computer',
      '5174-icsnxbcy7qjxhjwhkkhcz-ad7476d0.manus.computer',
      '5175-icsnxbcy7qjxhjwhkkhcz-ad7476d0.manus.computer',
      '5176-icsnxbcy7qjxhjwhkkhcz-ad7476d0.manus.computer',
      '5177-icsnxbcy7qjxhjwhkkhcz-ad7476d0.manus.computer',
      '5178-icsnxbcy7qjxhjwhkkhcz-ad7476d0.manus.computer'
    ]
  }
})
