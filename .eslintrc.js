module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended", "eslint:recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error", { singleQuote: false }, { endOfLine: "lf" }],
    "linebreak-style": "off",
    "no-extra-boolean-cast": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-self-assign": "error",
    "no-dupe-keys": 0,
    "no-case-declarations": 0,
    "no-unused-vars": 0,
    "no-undef": 0,
  },
};
