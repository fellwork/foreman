import { build } from 'esbuild'
import { exit } from 'node:process'
import { pathResolve } from './src/path'

async function main() {
  await startBuild({
    rollup: {
      external: [],
      clean: true,
      globbyOptions: {
        ignore: [pathResolve('./src/index.ts')].map((value) => value.replace(/\\/g, '/'))
      }
    }
  })

  await build({
    bundle: true,
    format: 'cjs',
    target: 'node12.20',
    entryPoints: ['src/index.ts'],
    outdir: 'lib',
    minify: true,
    platform: 'node',
    external: ['rollup', 'typescript']
  })
}

main().catch((err: unknown) => {
  console.error(err)
  exit(1)
})
