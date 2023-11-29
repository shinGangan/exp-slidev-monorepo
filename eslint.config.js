"use strict";
// @ts-check
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfig from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import { fileURLToPath } from "node:url";
import { dirname } from "pathe";

const eslintrc = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  {
    ignores: [
      "eslint.config.js",
      "**/dist/**/*",
      "**/node_modules/**/*",
      ".github",
      ".vscode",
      ".textlintrc.js",
    ],
  },
  eslintConfig.configs.recommended,
  ...eslintrc.extends("plugin:vue/vue3-recommended"),
  {
    files: ["**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  eslintConfigPrettier,
];
