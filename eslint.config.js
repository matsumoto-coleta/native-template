// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = defineConfig([
  expoConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      // @see https://typescript-eslint.io/rules/array-type
      "@typescript-eslint/array-type": "off",

      // @see https://typescript-eslint.io/rules/consistent-type-definitions/
      "@typescript-eslint/consistent-type-definitions": "off",

      // @see https://typescript-eslint.io/rules/consistent-type-imports/
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],

      // @see https://typescript-eslint.io/rules/no-unused-vars/
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // @see https://typescript-eslint.io/rules/require-await/
      "@typescript-eslint/require-await": "off",

      // @see https://typescript-eslint.io/rules/no-misused-promises/
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: { attributes: false },
        },
      ],

      // https://typescript-eslint.io/rules/no-var-requires/
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  {
    ignores: ["dist/*", "babel.config.js"],
  }
]);
