'use strict'

module.exports = {
  extends: [require.resolve('./base')],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        'brace-style': 'off',
        camelcase: 'off',
        'comma-spacing': 'off',
        'dot-notation': 'off',
        'func-call-spacing': 'off',
        indent: 'off',
        'keyword-spacing': 'off',
        'lines-between-class-members': 'off',
        'no-array-constructor': 'off',
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',
        'no-throw-literal': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'no-useless-constructor': 'off',
        'no-void': ['error', { allowAsStatement: true }],
        quotes: 'off',
        semi: 'off',
        'space-before-function-paren': 'off',
        // From standard
        '@typescript-eslint/comma-spacing': [
          'error',
          {
            after: true,
            before: false,
          },
        ],
        '@typescript-eslint/dot-notation': [
          'error',
          {
            allowKeywords: true,
          },
        ],
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/indent': [
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
        '@typescript-eslint/keyword-spacing': 'error',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true,
          },
        ],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-redeclare': [
          'error',
          {
            builtinGlobals: false,
          },
        ],
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            args: 'none',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'all',
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/quotes': [
          'error',
          'single',
          {
            allowTemplateLiterals: false,
            avoidEscape: true,
          },
        ],
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/space-before-function-paren': ['error', 'always'],

        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            enums: false,
            variables: false,
            typedefs: false, // Only the TypeScript rule has this option.
          },
        ],

        // Rules exclusive to Standard TypeScript:
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
          },
        ],
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            allowDirectConstAssertionInArrowFunctions: true,
          },
        ],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: { delimiter: 'none' },
            singleline: { delimiter: 'comma', requireLast: false },
          },
        ],
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variableLike',
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
        ],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': [
          'error',
          { allowSingleExtends: true },
        ],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': [
          'error',
          { allowWithDecorator: true },
        ],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-this-alias': [
          'error',
          { allowDestructuring: true },
        ],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': [
          'error',
          {
            ignoreConditionalTests: false,
            ignoreMixedLogicalExpressions: false,
          },
        ],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': [
          'error',
          { ignoreStringArrays: true },
        ],
        '@typescript-eslint/restrict-plus-operands': [
          'error',
          { checkCompoundAssignments: true },
        ],
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNumber: true },
        ],
        '@typescript-eslint/return-await': ['error', 'always'],
        '@typescript-eslint/strict-boolean-expressions': [
          'error',
          {
            allowString: false,
            allowNumber: false,
            allowNullableObject: false,
            allowNullableBoolean: false,
            allowNullableString: false,
            allowNullableNumber: false,
            allowAny: false,
          },
        ],
        '@typescript-eslint/triple-slash-reference': [
          'error',
          { lib: 'never', path: 'never', types: 'never' },
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
      },
    },
  ],
}
