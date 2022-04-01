module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    // prettier rules:
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
}
