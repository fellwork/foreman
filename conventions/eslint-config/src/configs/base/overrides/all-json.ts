export default {
  files: ['*.json', '*.json5'],
  parser: 'jsonc-eslint-parser',
  rules: {
    quotes: ['error', 'double'],
    'quote-props': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
  },
}
