// TODO: Add Tailwind eslint plugin when support for Tailwind v4 is released
// see: https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/384

module.exports = {
  root: true,
  extends: ["plugin:@next/next/recommended", "eslint-config-react-alexpagnotta"],
  overrides: [
    {
      files: [
        "**/*.d.ts",
        "./app/**/{page,layout,not-found,error,global-error,route,template,default,robot,sitemap}.ts?(x)",
        "./middleware.ts",
        "./next.config.ts",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  rules: {
    "@next/next/no-img-element": "off",
  },
  globals: { React: true },
};
