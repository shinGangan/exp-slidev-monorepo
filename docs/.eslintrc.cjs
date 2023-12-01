module.exports = {
  root: true,
  ignorePatterns: [
    "**/dist/**/*",
    "**/node_modules/**/*",
    "**/.nuxt/**/*",
    "**/.output/**/*",
    ".github",
    ".vscode",
  ],
  extends: "@nuxt/eslint-config",
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/multi-word-component-names": "off",
  },
};
