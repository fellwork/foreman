import * as paths from './paths'
import { default as ignorePatterns } from './ignore'

import type { Linter } from 'eslint'

interface ConfigFn {
  (extend: Linter.Config): Linter.Config
  path: string
}

type ConfigFunctions = {
  [K in keyof typeof paths]: ConfigFn
}

const base = {
  root: true,
  ignorePatterns,
}

export default Object.entries(paths).reduce((acc, [key, val]) => {
  /* names of configs are the same as the keys in the configs object */
  const curKey = key as keyof typeof paths
  /**
   *
   * @param extend - the config to extend
   * @returns
   */
  const fn: ConfigFn = (extend: Linter.Config) => ({
    extends: val,
    ...base,
    ...extend,
  })

  fn.path = val
  acc[curKey] = fn
  return acc
}, {} as ConfigFunctions)
