import type { Linter } from '@/api'

export default {
  extends: 'plugin:prettier/recommended',
  plugins: ['prettier'],
} as Linter.Config
