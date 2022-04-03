const { resolve } = require('path');

// eslint-disable-next-line import/no-unassigned-import
require('eslint-patch-foreman');
// eslint-disable-next-line import/no-unassigned-import

module.exports = {
  extends: ['plugin:foreman/base', 'plugin:foreman/typescript', 'plugin:foreman/prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [resolve(__dirname, './tsconfig.json')]
  }
};
