import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  // Dynamically collect all HTML files in src and its subdirectories
  const htmlFiles = glob.sync('src/**/*.html').reduce((acc, file) => {
    const name = file
      .replace('src/', '')
      .replace('.html', '')
      .replace(/\//g, '_');
    acc[name] = resolve(__dirname, file);
    return acc;
  }, {});

  return {
    base: '/goit-advancedjs-final-project/',
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: htmlFiles,
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
      injectHTML({
        // Match all HTML files
        injectFile: /.*\.html$/,
        // Define the base path for partials
        injectPaths: [resolve(__dirname, 'src/partials')],
        // Custom resolver to handle relative paths
        resolvePath: (filePath, parentFilePath) => {
          // If the path is absolute (starts with /), resolve from injectPaths
          if (filePath.startsWith('/')) {
            return resolve(__dirname, 'src', filePath.slice(1));
          }
          // If the path is relative, resolve it relative to the parent file's directory
          return resolve(parentFilePath, '..', filePath);
        },
      }),
      FullReload(['./src/**/*.html']),
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
