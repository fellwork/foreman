'use strict'

module.exports = {
  extends: [require.resolve('./base')],
  plugins: ['sort-keys-fix'],
  rules: {
    // Optional eslint rules:
    'no-console': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],

    // import rules:
    'import/group-exports': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
}
