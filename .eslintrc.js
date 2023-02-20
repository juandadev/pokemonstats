module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/prop-types': ['warn'],
    'react/jsx-one-expression-per-line': ['off'],
    'import/prefer-default-export': ['warn'],
    'react/no-array-index-key': ['warn'],
    'no-param-reassign': ['warn'],
    camelcase: ['warn'],
    'jsx-a11y/no-static-element-interactions': ['warn'],
    'jsx-a11y/click-events-have-key-events': ['warn'],
  },
};
