module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  env: {
    "browser": true,
    "node": false
  },
  rules: {
    "indent": ["error", 2],
    "comma-dangle": ["error", "never"],
    "implicit-arrow-linebreak": 0,
    "no-underscore-dangle": 0,
    "no-new": 0
  }
};
