import { default as allJs, default as allJson } from './all-js'
import { default as allMarkdown } from './all-markdown'
import { default as allYaml } from './all-yaml'
import { default as dTs } from './d-ts'
import { default as packageJson } from './package-json'
import { default as scripts } from './scripts-cli'
import { default as testing } from './testing'

export const overrides = [
  {
    ...allJson,
  },
  {
    ...allYaml,
  },
  {
    ...packageJson,
  },
  {
    ...dTs,
  },
  {
    ...allJs,
  },
  {
    ...scripts,
  },
  {
    ...testing,
  },
  {
    ...allMarkdown,
  },
] as const

console.log(overrides)
