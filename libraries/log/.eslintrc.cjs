module.exports = {
  extends: ['plugin:foreman/patch', 'plugin:foreman/typescript', 'plugin:foreman/prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  }
};
