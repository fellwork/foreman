const { resolve } = require('path');

require('@fellwork/eslint-plugin-foreman/patch');

module.exports = {
  extends: [
    'plugin:@fellwork/eslint-plugin-foreman/typescript',
    '@fellwork/eslint-plugin-foreman/prettier'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [resolve(__dirname, './tsconfig.json')]
  }
};
