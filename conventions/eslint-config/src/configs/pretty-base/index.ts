import { merge } from '../../shared'

import { default as baseConfig } from '../../configs/base'
import { default as prettierConfig } from '../../configs/prettier'

export default merge(baseConfig, prettierConfig)
