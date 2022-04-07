import type { Linter } from '@/api'

export default {
  extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: [],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
} as Linter.Config
