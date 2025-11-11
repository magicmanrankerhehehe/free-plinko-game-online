export default defineConfig({
  base: '/free-plinko-game-online/',
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    restoreMocks: true,
  },
});
