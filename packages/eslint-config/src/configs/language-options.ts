import globals from "globals";

export const languageOptions = {
  parserOptions: {
    projectService: true,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    ...globals.browser,
    ...globals.node,
  },
};
