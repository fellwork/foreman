import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/config.ts'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  dts: {
    resolve: true,
    entry: 'src/config.ts'
  },
  outDir: 'lib',
  splitting: false,
  sourcemap: false,
  clean: true
});
