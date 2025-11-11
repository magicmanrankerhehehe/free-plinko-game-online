import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: false,
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/free-plinko-game-online' : '',
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 404s for favicon and icon files
        if (path.includes('favicon') || path.includes('apple-touch-icon')) {
          return;
        }
        // Otherwise throw the error
        throw new Error(message);
      }
    }
  },
};

export default config;
