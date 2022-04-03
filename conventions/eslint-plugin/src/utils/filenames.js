'use strict';
// https://github.com/selaux/eslint-plugin-filenames/blob/1.3.0/lib/rules/match-regex.js#L29
// https://github.com/selaux/eslint-plugin-filenames/blob/1.3.0/lib/common/parseFilename.js#L10

module.exports = {
  regex: {
    kebab: '^.?[a-z0-9]+[a-z0-9-.]*$',
    pascal: '^([A-Z]+[a-z0-9.]*)+$'
  }
};
