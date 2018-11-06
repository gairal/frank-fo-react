const path = require('path');

module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    'jest/globals': true,
  },
  globals: {
    chrome: true,
    DEBUG: true,
    LOG_LEVEL: true,
  },
  plugins: ['jest', 'prettier'],
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 1,
    curly: 2,
    indent: [2, 2, { 'SwitchCase': 1 }],
    eqeqeq: 2,
    'new-cap': 2,
    camelcase: 2,
    quotes: [2, 'single'],
    'no-trailing-spaces': 2,
    'jsx-a11y/anchor-is-valid': [ 'error', {
      specialLink: [ 'to' ],
    }],
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@', path.resolve(__dirname, 'src/app')],
        ['Mocks', path.resolve(__dirname, 'test/mocks')],
      ],
    },
  },
};
