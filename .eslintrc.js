module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "react/no-children-prop": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
