import globals from "globals";

import type { DefineConfigOptions } from "../types.js";

export function createLanguageOptions(_options: DefineConfigOptions = {}) {
  return {
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
}
