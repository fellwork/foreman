import { merge } from '../../shared'
import prettierRules from './prettier-rules.json'
import { default as prettierConfig } from './config'

const prettier = Object.freeze(merge(prettierConfig, prettierRules))

export default prettier
