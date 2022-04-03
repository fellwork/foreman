module.exports = {
  extends: ['./src/config/patch', './src/config/strict', './src/config/prettier'],
  overrides: [
    {
      files: ['src/config/base.js'],
      rules: {
        'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: false }]
      }
    }
  ]
};
