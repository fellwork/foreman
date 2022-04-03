'use strict';

module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier'],
  rules: {
    // prettier rules:
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ]
  }
};
