import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  outDir: 'lib',
  entries: [
    {
      input: 'src/',
      outDir: 'lib',
      format: 'cjs',
      declaration: true,
    },
  ],
  rollup: {},
})
