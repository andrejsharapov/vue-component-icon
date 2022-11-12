import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';
import { createHtmlPlugin } from 'vite-plugin-html';

const isDevMode = process.env.NODE_ENV !== 'production';
const pkg = require('./package.json');

process.env.VITE_APP_VERSION = pkg.version;
process.env.VITE_APP_DESCRIPTION = pkg.description;

if (!isDevMode) {
  process.env.VITE_APP_TITLE = pkg.name;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue2(),
      vue2Jsx(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
            desc: env.VITE_APP_DESCRIPTION,
            version: env.VITE_APP_VERSION,
          },
        },
      }),
      legacy({
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 8080,
    },
  };
});
