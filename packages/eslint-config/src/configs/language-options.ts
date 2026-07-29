import globals from "globals";

import type { DefineConfigOptions } from "../types.js";
import tseslint from "typescript-eslint";

export function createLanguageOptions(options: DefineConfigOptions = {}) {
  return {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ...(options.typeChecked
        ? {
            projectService: {
              allowDefaultProject: [
                "*.js",
                "*.mjs",
                "*.cjs",
                "eslint.config.js",
                "*.config.js",
                "*.config.mjs",
              ],
            },
          }
        : {}),
    },

    globals: {
      ...globals.browser,
      ...globals.node,
    },
  };
}
