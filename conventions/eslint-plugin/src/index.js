'use strict';

const requireIndex = require('requireindex');

module.exports = {
  configs: requireIndex(`${__dirname}/config`),
  utils: {
    filenames: require('./utils/filenames')
  }
};
