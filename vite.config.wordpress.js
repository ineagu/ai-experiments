import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    
    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      build: {
        outDir: 'optimole-templates/assets/build',
        rollupOptions: {
          input: {
            main: 'src/wordpress-entry.jsx',
          },
          output: {
            entryFileNames: 'js/[name].js',
            chunkFileNames: 'js/[name]-[hash].js',
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name.split('.');
              const extType = info[info.length - 1];
              if (/.(css|scss|sass)$/.test(assetInfo.name)) {
                return 'css/[name][extname]';
              }
              return 'assets/[name]-[hash][extname]';
            },
          },
        },
        assetsInlineLimit: 0,
      },
    })