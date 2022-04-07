import type { Linter } from '@/api'

export default {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    worker: true,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    'plugin:yml/standard',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['es', 'eslint-comments', 'html', 'import', 'n', 'promise', 'unicorn'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
} as Linter.Config
