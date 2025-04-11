import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  return {
    base: '/goit-advancedjs-final-project/',
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          uiKit: resolve(__dirname, 'src/partials/ui-kit.html'),
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      SortCss({
        sort: 'mobile-first',
      }),
    ],
    server: {
      open: true,
      host: true,
    },
    css: {
      devSourcemap: true,
    },
  };
});
