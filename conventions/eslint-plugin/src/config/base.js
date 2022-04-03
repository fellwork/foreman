'use strict';

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    require.resolve('../plugins/standard'),
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended'
  ],
  ignorePatterns: [
    '*.min.*',
    '*.build.log',
    'CHANGELOG.md',
    'LICENSE*',
    'coverage',
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/lib/**',
    '**/temp/**',
    '**/__tests__/**',
    '**/__mocks__/**',
    '**/__fixtures__/**',
    '**/__snapshots__/**',
    '.history',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '!.github',
    '!.vscode'
  ],
  overrides: [
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
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  plugins: ['es', 'eslint-comments', 'filenames', 'html', 'promise', 'unicorn'],
  rules: {
    // Optional eslint rules:
    'accessor-pairs': [
      'error',
      {
        enforceForClassMembers: true,
        setWithoutGet: true
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false
      }
    ],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        ignoreGlobals: true,
        properties: 'never'
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'never',
        functions: 'never',
        imports: 'never',
        objects: 'never'
      }
    ],
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true
      }
    ],
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'default-case-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': [
      'error',
      {
        allowKeywords: true
      }
    ],
    'eol-last': 'error',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'func-call-spacing': ['error', 'never'],
    'generator-star-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    indent: [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 1
        },
        FunctionExpression: {
          body: 1,
          parameters: 1
        },
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'JSXAttribute',
          'JSXClosingElement',
          'JSXClosingFragment',
          'JSXElement > *',
          'JSXElement',
          'JSXEmptyExpression',
          'JSXExpressionContainer',
          'JSXFragment',
          'JSXIdentifier',
          'JSXMemberExpression',
          'JSXNamespacedName',
          'JSXOpeningElement',
          'JSXOpeningFragment',
          'JSXSpreadAttribute',
          'JSXSpreadChild',
          'JSXText',
          'TemplateLiteral *'
        ],
        offsetTernaryExpressions: true,
        outerIIFEBody: 1
      }
    ],

    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false
      }
    ],

    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],

    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],

    'multiline-ternary': ['error', 'always-multiline'],

    'new-cap': [
      'error',
      {
        capIsNew: false,
        newIsCap: true,
        properties: true
      }
    ],

    'new-parens': 'error',

    'no-array-constructor': 'error',

    'no-async-promise-executor': 'error',

    'no-caller': 'error',

    'no-case-declarations': 'error',

    'no-class-assign': 'error',

    'no-compare-neg-zero': 'error',

    'no-cond-assign': 'error',

    'no-const-assign': 'error',

    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],

    'no-control-regex': 'error',

    'no-debugger': 'error',

    'no-delete-var': 'error',

    'no-dupe-args': 'error',

    'no-dupe-class-members': 'error',

    'no-dupe-keys': 'error',

    'no-duplicate-case': 'error',

    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],

    'no-empty-character-class': 'error',

    'no-empty-pattern': 'error',

    'no-eval': 'error',

    'no-ex-assign': 'error',

    'no-extend-native': 'error',

    'no-extra-bind': 'error',

    'no-extra-boolean-cast': 'error',

    'no-extra-parens': ['error', 'functions'],

    'no-fallthrough': 'error',

    'no-floating-decimal': 'error',

    'no-func-assign': 'error',

    'no-global-assign': 'error',

    'no-implied-eval': 'error',

    'no-import-assign': 'error',

    'no-invalid-regexp': 'error',

    'no-irregular-whitespace': 'error',

    'no-iterator': 'error',

    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],

    'no-lone-blocks': 'error',

    'no-loss-of-precision': 'error',

    'no-misleading-character-class': 'error',

    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
        groups: [
          ['!=', '!==', '<', '<=', '==', '===', '>', '>='],
          ['&&', '||'],
          ['in', 'instanceof']
        ]
      }
    ],

    'no-mixed-spaces-and-tabs': 'error',

    'no-multi-spaces': 'error',

    'no-multi-str': 'error',

    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0
      }
    ],

    'no-new': 'error',

    'no-new-func': 'error',

    'no-new-object': 'error',

    'no-new-symbol': 'error',

    'no-new-wrappers': 'error',

    'no-obj-calls': 'error',

    'no-octal': 'error',

    'no-octal-escape': 'error',

    'no-proto': 'error',

    'no-prototype-builtins': 'error',

    'no-redeclare': [
      'error',
      {
        builtinGlobals: false
      }
    ],

    'no-regex-spaces': 'error',

    'no-return-assign': ['error', 'except-parens'],

    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],

    'no-self-compare': 'error',

    'no-sequences': 'error',

    'no-shadow-restricted-names': 'error',

    'no-sparse-arrays': 'error',

    'no-tabs': 'error',

    'no-template-curly-in-string': 'error',

    'no-this-before-super': 'error',

    'no-throw-literal': 'error',

    'no-trailing-spaces': 'error',

    'no-undef': 'error',

    'no-undef-init': 'error',

    'no-unexpected-multiline': 'error',

    'no-unmodified-loop-condition': 'error',

    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],

    'no-unreachable': 'error',

    'no-unreachable-loop': 'error',

    'no-unsafe-finally': 'error',

    'no-unsafe-negation': 'error',

    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true
      }
    ],

    'no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],

    'no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        variables: false
      }
    ],

    'no-useless-backreference': 'error',

    'no-useless-call': 'error',

    'no-useless-catch': 'error',

    'no-useless-computed-key': 'error',

    'no-useless-constructor': 'error',

    'no-useless-escape': 'error',

    'no-useless-rename': 'error',

    'no-useless-return': 'error',

    'no-var': 'warn',

    'no-void': 'error',

    'no-whitespace-before-property': 'error',

    'no-with': 'error',

    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true
      }
    ],

    'object-curly-spacing': ['error', 'always'],

    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true
      }
    ],

    'object-shorthand': ['warn', 'properties'],

    'one-var': [
      'error',
      {
        initialized: 'never'
      }
    ],

    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
          '?': 'before',
          '|>': 'before'
        }
      }
    ],

    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      }
    ],

    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],

    'prefer-promise-reject-errors': 'error',

    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true
      }
    ],

    // promise rules:
    'promise/param-names': 'error',

    'quote-props': ['error', 'as-needed'],

    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true
      }
    ],

    'rest-spread-spacing': ['error', 'never'],

    semi: ['error', 'always'],

    'semi-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],

    'space-before-blocks': ['error', 'always'],

    'space-before-function-paren': ['error', 'always'],

    'space-in-parens': ['error', 'never'],

    'space-infix-ops': 'error',

    'space-unary-ops': [
      'error',
      {
        nonwords: false,
        words: true
      }
    ],

    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['/', '#']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],

    'symbol-description': 'error',

    'template-curly-spacing': ['error', 'never'],

    'template-tag-spacing': ['error', 'never'],

    'unicode-bom': ['error', 'never'],

    // Unicorn rules:

    // We use a lot of `reduce`.
    'unicorn/no-lonely-if': 'off',

    // Sometimes the code is clearer with the lonely if.
    'unicorn/no-null': 'off',

    // We use a lot of `null`.
    'unicorn/no-useless-undefined': 'off',

    // We use a lot of `return undefined` to satisfy the `consistent-return` rule.
    'unicorn/numeric-separators-style': 'off',

    // Too noisy for now.
    'unicorn/prefer-add-event-listener': 'off',

    // The autofixer can be unsafe.
    'unicorn/prefer-dom-node-append': 'off',

    // This incorrectly autofixes `append()` on non-DOM-nodes.
    'unicorn/prefer-dom-node-remove': 'off',

    // This incorrectly autofixes `remove()` on non-DOM-nodes.
    'unicorn/prefer-dom-node-text-content': 'off',

    // The autofixer can be unsafe.
    'unicorn/prefer-module': 'off',

    // Big change, enable later.
    'unicorn/prefer-prototype-methods': 'off',

    // Too noisy for now.
    'unicorn/prefer-query-selector': 'off',

    // The autofixer can be unsafe.
    'unicorn/prefer-switch': 'off',

    // Testing: very aggressive
    // 'unicorn/prefer-ternary': 'off',

    // Testing: possibly Too many violations.
    // 'unicorn/prevent-abbreviations': 'off',

    // Pass error message when throwing errors
    'unicorn/error-message': 'error',
    // Uppercase regex escapes
    'unicorn/escape-case': 'error',
    // Array.isArray instead of instanceof
    'unicorn/no-array-instanceof': 'error',
    // Prevent deprecated `new Buffer()`
    'unicorn/no-new-buffer': 'error',
    // Keep regex literals safe!
    'unicorn/no-unsafe-regex': 'off',
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    'unicorn/number-literal-case': 'error',
    // ** instead of Math.pow()
    'unicorn/prefer-exponentiation-operator': 'error',
    // includes over indexOf when checking for existence
    'unicorn/prefer-includes': 'error',
    // String methods startsWith/endsWith instead of more complicated stuff
    'unicorn/prefer-starts-ends-with': 'error',
    // textContent instead of innerText
    'unicorn/prefer-text-content': 'error',
    // Enforce throwing type error when throwing error while checking typeof
    'unicorn/prefer-type-error': 'error',
    // Use new when throwing error
    'unicorn/throw-new-error': 'error',

    'use-isnan': [
      'error',
      {
        enforceForIndexOf: true,
        enforceForSwitchCase: true
      }
    ],

    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true
      }
    ],

    'wrap-iife': [
      'error',
      'any',
      {
        functionPrototypeMethods: true
      }
    ],

    'yield-star-spacing': ['error', 'both'],

    yoda: ['error', 'never'],

    'eslint-comments/disable-enable-pair': 'off'
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  }
};
