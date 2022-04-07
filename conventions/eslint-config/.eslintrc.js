const { prettyType } = require('./lib/index')

module.exports = prettyType({
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
})
