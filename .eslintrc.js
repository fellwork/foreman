const { resolve } = require('path')
const { prettyType } = require('./conventions/eslint-config/lib')

module.exports = prettyType({
  rules: {
    'no-console': 'off',
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [resolve(__dirname, './tsconfig.json')],
  },
})
