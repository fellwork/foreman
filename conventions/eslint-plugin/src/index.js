'use strict';

const { join } = require('node:path');

const requireIndex = require('requireindex');

module.exports = {
  configs: requireIndex(join(__dirname, 'config')),
  plugins: requireIndex(join(__dirname, 'plugins')),
  utils: {
    filenames: require('./utils/filenames')
  }
};
