export default [
  // Overrides from @antfu/eslint-config
  {
    files: ['*.json', '*.json5'],
    parser: 'jsonc-eslint-parser',
    rules: {
      quotes: ['error', 'double'],
      'quote-props': ['error', 'always'],
      'comma-dangle': ['error', 'never']
    }
  },
  {
    files: ['*.yaml', '*.yml'],
    parser: 'yaml-eslint-parser',
    rules: {
      'spaced-comment': 'off'
    }
  },
  {
    files: ['package.json'],
    parser: 'jsonc-eslint-parser',
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'name',
            'type',
            'version',
            'private',
            'packageManager',
            'description',
            'keywords',
            'license',
            'author',
            'repository',
            'funding',
            'main',
            'module',
            'types',
            'unpkg',
            'jsdelivr',
            'exports',
            'files',
            'bin',
            'sideEffects',
            'scripts',
            'peerDependencies',
            'peerDependenciesMeta',
            'dependencies',
            'optionalDependencies',
            'devDependencies',
            'husky',
            'lint-staged',
            'eslintConfig',
            'prettier'
          ]
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          order: { type: 'asc' }
        }
      ]
    }
  },
  {
    files: ['*.d.ts'],
    rules: {
      'import/no-duplicates': 'off'
    }
  },
  {
    files: ['*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off'
    }
  },
  {
    files: ['scripts/**/*.*', 'cli.*'],
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
    rules: {
      'no-unused-expressions': 'off'
    }
  },
  {
    // Code blocks in markdown file
    files: ['**/*.md/*.*'],
    rules: {
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-unresolved': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'no-restricted-imports': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off'
    }
  }
];
