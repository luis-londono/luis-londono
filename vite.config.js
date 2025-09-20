import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base public path when served in production (use your repo name for project pages)
  base: '/luis-londono/',
  plugins: [react()],
})
