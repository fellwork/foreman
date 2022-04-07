import { useBabelParserConfig, merge } from '../../shared'
import { default as baseConfig } from './config'
import { overrides } from './overrides'

const configured = useBabelParserConfig(baseConfig)
const base = Object.freeze(merge(configured, { overrides }))

export default base
