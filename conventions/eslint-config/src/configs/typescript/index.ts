import { merge } from '../../shared'
import { default as baseConfig } from '../../configs/base'
import { overrides } from './overrides'

const typescript = Object.freeze(merge(baseConfig, { overrides }))

export default typescript
