module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  ignorePatterns: [
    'webpack.config.js'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', { code: 10000 }],
    'react/prefer-stateless-function': [0, { ignorePureComponents: false }],
    'eslint no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }]
  }
};
