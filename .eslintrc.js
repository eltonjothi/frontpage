module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'max-len': ['error', { code: 1000 }],
    'linebreak-style': 0,
    'prettier/prettier': ['error'],
  },
  globals: {
    window: true,
  },
};
