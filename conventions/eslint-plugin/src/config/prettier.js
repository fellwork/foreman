'use strict';

module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier'],
  rules: {
    // prettier rules:
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: true
      }
    ]
  }
};
