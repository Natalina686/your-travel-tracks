import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/your-travel-tracks/',
  plugins: [react()],
})
