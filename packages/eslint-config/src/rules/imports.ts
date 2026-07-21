export const importRules = {
  "import/order": "off",
  "import/extensions": "off",
  "import/no-unresolved": "off",
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
      bundledDependencies: false,
    },
  ],

  "import/prefer-default-export": "off",
  "import/newline-after-import": "error",
  "import/first": "error",
  "import/no-duplicates": "error",
  "import/no-self-import": "error",
  "import/no-useless-path-segments": "error",
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  "import/no-anonymous-default-export": "warn",
} as const;
