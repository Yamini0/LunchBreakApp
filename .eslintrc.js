module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    htmlWhitespaceSensitivity: 'ignore',
    semi: false,
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto' },
      { usePrettierrc: true },
    ],
  },
};
