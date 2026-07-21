import { Linter } from "eslint";
import { createIgnores } from "./configs/ignores.js";
import { createLanguageOptions } from "./configs/language-options.js";
import { createPlugins } from "./configs/plugins.js";
import { createPresets } from "./configs/presets.js";
import { createSettings } from "./configs/settings.js";
import { createRules } from "./rules/index.js";

import type { DefineConfigOptions } from "./types.js";
import { defaultOptions } from "./helpers/default-options.js";

export function defineConfig(
  options: DefineConfigOptions = {},
): Linter.Config[] {
  const resolved = {
    ...defaultOptions,
    ...options,
  };
  return [
    createIgnores(resolved),
    ...createPresets(resolved),
    {
      languageOptions: createLanguageOptions(resolved),
      plugins: createPlugins(resolved),
      settings: createSettings(resolved),
      rules: createRules(resolved),
    },
  ];
}
