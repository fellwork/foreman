/* eslint-disable import/no-unassigned-import */
require('@rushstack/eslint-patch/modern-module-resolution')
/* eslint-enable import/no-unassigned-import */
module.exports = {
  extends: ['plugin:foreman/typescript', 'plugin:foreman/prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
