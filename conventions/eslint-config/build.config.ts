import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  declaration: true,
  entries: [
    { input: 'src/index.ts' },
    { input: 'src/configs/', outDir: 'lib/configs/', format: 'esm', ext: 'mjs' },
    { input: 'src/configs/', outDir: 'lib/configs/', format: 'cjs', ext: 'cjs', declaration: false }
  ],
  rollup: {
    dts: {
      respectExternal: true
    }
  }
});
