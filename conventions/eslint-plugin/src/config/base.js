'use strict'

const filenames = require('../utils/filenames')

module.exports = {
  extends: ['plugin:eslint-comments/recommended', 'plugin:unicorn/recommended'],
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'es',
    'eslint-comments',
    'filenames',
    'import',
    'n',
    'promise',
    'unicorn',
  ],
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  rules: {
    // Optional eslint rules:
    'accessor-pairs': [
      'error',
      {
        enforceForClassMembers: true,
        setWithoutGet: true,
      },
    ],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false,
      },
    ],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        ignoreGlobals: true,
        properties: 'never',
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'never',
        functions: 'never',
        imports: 'never',
        objects: 'never',
      },
    ],
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'default-case-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],
    'eol-last': 'error',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'func-call-spacing': ['error', 'never'],
    'generator-star-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    indent: [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        flatTernaryExpressions: false,
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
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
          'TemplateLiteral *',
        ],
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        offsetTernaryExpressions: true,
        outerIIFEBody: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
      },
    ],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': [
      'error',
      {
        capIsNew: false,
        newIsCap: true,
        properties: true,
      },
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
        checkLoops: false,
      },
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
        allowEmptyCatch: true,
      },
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
        allowSwitch: false,
      },
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
          ['in', 'instanceof'],
        ],
      },
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
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
        builtinGlobals: false,
      },
    ],
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': [
      'error',
      {
        props: true,
      },
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
        defaultAssignment: false,
      },
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
        allowTernary: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        variables: false,
      },
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
        multiline: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    'object-shorthand': ['warn', 'properties'],
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
          '?': 'before',
          '|>': 'before',
        },
      },
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true,
      },
    ],
    'promise/param-names': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'never'],
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        nonwords: false,
        words: true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['*'],
          markers: ['!', '*package', ',', ':', '::', 'flow-include'],
        },
        line: {
          markers: ['!', '*package', ',', '/', '='],
        },
      },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': [
      'error',
      {
        enforceForIndexOf: true,
        enforceForSwitchCase: true,
      },
    ],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    'wrap-iife': [
      'error',
      'any',
      {
        functionPrototypeMethods: true,
      },
    ],
    'yield-star-spacing': ['error', 'both'],
    yoda: ['error', 'never'],

    // import rules:
    'import/default': 'error',
    'import/extensions': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': [
      'error',
      {
        amd: false,
        commonjs: true,
        esmodule: true,
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',

    // node.js rules:
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',

    // Unicorn rules:
    'unicorn/catch-error-name': 'off', // We use many different valid names for our try/catch errors.
    'unicorn/consistent-function-scoping': 'off', // We have a lot of functions in different scopes.
    'unicorn/import-style': 'off', // Too noisy, not useful enough.
    'unicorn/no-array-callback-reference': 'off', // We use this a lot.
    'unicorn/no-array-for-each': 'off', // We use a lot of `forEach` and this may be too opinionated.
    'unicorn/no-array-reduce': 'off', // We use a lot of `reduce`.
    'unicorn/no-lonely-if': 'off', // Sometimes the code is clearer with the lonely if.
    'unicorn/no-null': 'off', // We use a lot of `null`.
    'unicorn/no-useless-undefined': 'off', // We use a lot of `return undefined` to satisfy the `consistent-return` rule.
    'unicorn/numeric-separators-style': 'off', // Too noisy for now.
    'unicorn/prefer-add-event-listener': 'off', // The autofixer can be unsafe.
    'unicorn/prefer-dom-node-append': 'off', // This incorrectly autofixes `append()` on non-DOM-nodes.
    'unicorn/prefer-dom-node-remove': 'off', // This incorrectly autofixes `remove()` on non-DOM-nodes.
    'unicorn/prefer-dom-node-text-content': 'off', // The autofixer can be unsafe.
    'unicorn/prefer-module': 'off', // Not ready for this yet.
    'unicorn/prefer-node-protocol': 'off', // Big change, enable later.
    'unicorn/prefer-prototype-methods': 'off', // Too noisy for now.
    'unicorn/prefer-query-selector': 'off', // The autofixer can be unsafe.
    'unicorn/prefer-switch': 'off', // Too aggressive for now.
    'unicorn/prefer-ternary': 'off', // Too many violations.
    'unicorn/prevent-abbreviations': 'off',

    // promise rules:
    'promise/param-names': 'error',
  },
}
