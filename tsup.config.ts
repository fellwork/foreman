import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'build',
  clean: ['lib'],
  entry: ['index.ts', 'deps/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'lib',
  dts: {
    resolve: true
  }
})
