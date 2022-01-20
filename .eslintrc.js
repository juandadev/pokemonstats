module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'next',
    'prettier',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'warn',
    'react/no-array-index-key': 'warn',
    'no-param-reassign': 'warn',
    camelcase: 'warn',
  },
};
