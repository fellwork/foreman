module.exports = {
  root: true,
  extends: ['./src/config/strict', './src/config/prettier'],
  overrides: [
    {
      files: ['./src/**/*.js'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off'
      }
    }
  ]
};
