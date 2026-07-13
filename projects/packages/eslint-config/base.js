/** @type {import("eslint").Linter.Config[]} */
export const baseConfig = [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "build/**"
    ]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {}
  }
];
