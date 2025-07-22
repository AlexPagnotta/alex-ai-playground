// TODO: Add Tailwind eslint plugin when support for Tailwind v4 is released
// see: https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/384

module.exports = {
  root: true,
  extends: ["eslint-config-react-alexpagnotta"],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.app.json", "./tsconfig.vite.json"],
  },
  ignorePatterns: ["vite.config.ts"],
  overrides: [],
  globals: { React: true },
};
