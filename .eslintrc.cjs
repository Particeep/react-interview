module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react /no-unescaped-entities": 0,
    "react-hooks/exhaustive-deps": 1,
    "react-hooks/rules-of-hooks": "error",
  },
};
