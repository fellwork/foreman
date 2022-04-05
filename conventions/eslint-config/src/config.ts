import './patch';
import * as base from './base';
import * as typescript from './typescript';

export default {
  env: base.env,
  extends: [
    ...base.extends,
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: base.ignorePatterns,
  plugins: [...base.plugins, 'prettier'],
  overrides: [...base.overrides],
  settings: { ...base.settings, ...typescript.settings },
  rules: {
    ...base.rules,
    ...typescript.rules,
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100
      }
    ]
  }
};
