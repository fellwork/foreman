const { resolve } = require('path');

module.exports = {
  extends: ['@fellwork/foreman'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [resolve(__dirname, './tsconfig.json')]
  }
};
