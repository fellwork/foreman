import { merge } from '../../shared'

import { default as typescriptConfig } from '../../configs/typescript'
import { default as prettierConfig } from '../../configs/prettier'

export default merge(typescriptConfig, prettierConfig)
