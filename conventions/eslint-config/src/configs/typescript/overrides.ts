import tsRules from './ts-rules.json'
import { default as tsConfig } from './config'

export const overrides = [
  {
    files: ['*.ts', '*.tsx'],
    ...tsConfig,
    ...tsRules,
  },
]
