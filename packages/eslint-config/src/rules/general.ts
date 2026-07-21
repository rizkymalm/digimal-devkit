export const generalRules = {
  "no-console": [
    "warn",
    {
      allow: ["warn", "error", "info"],
    },
  ],
  "no-restricted-syntax": [
    "error",
    "ForInStatement",
    "LabeledStatement",
    "WithStatement",
  ],
  "default-param-last": "off",
  "no-param-reassign": "off",
  "no-underscore-dangle": "off",
  "no-nested-ternary": "off",
  "no-plusplus": "off",
} as const;
