import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai-experiments/',
  css: {
    postcss: './postcss.config.cjs',
    devSourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      host: 'localhost'
    },
    allowedHosts: [
      'localhost',
      '*.ngrok-free.app',
      '*.ngrok.io'
    ]
  }
}) 