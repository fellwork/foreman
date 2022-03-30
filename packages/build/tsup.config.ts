import { defineConfig } from 'tsup'

export default defineConfig([
  {
    name: 'esm',
    clean: ['lib/esm'],
    entry: ['src/index.ts'],
    format: ['esm'],
    keepNames: true,
    outDir: 'lib/esm',
    splitting: false,
    sourcemap: false,
    target: 'node16',
    bundle: true
  },
  {
    name: 'cjs',
    clean: ['lib/cjs'],
    entry: ['src/index.ts'],
    format: ['cjs'],
    keepNames: true,
    outDir: 'lib/cjs',
    splitting: false,
    sourcemap: false,
    target: 'node16',
    bundle: true
  }
])
