import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
}) 