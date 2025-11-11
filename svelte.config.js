const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: false,
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/free-plinko-game-online' : '',
    }
  },
};
