const config = require('./lib/config.js');
const { resolve } = require('path');

module.export = {
  ...config,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [resolve(__dirname, './tsconfig.json')]
  }
};
