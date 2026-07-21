import { Linter } from "eslint";
import { createIgnores } from "./configs/ignores.js";
import { createLanguageOptions } from "./configs/language-options.js";
import { createPlugins } from "./configs/plugins.js";
import { createPresets } from "./configs/presets.js";
import { createSettings } from "./configs/settings.js";
import { createRules } from "./rules/index.js";

import type { DefineConfigOptions } from "./types.js";

export function defineConfig(
  options: DefineConfigOptions = {},
): Linter.Config[] {
  return [
    createIgnores(options),
    ...createPresets(options),
    {
      languageOptions: createLanguageOptions(options),
      plugins: createPlugins(options),
      settings: createSettings(options),
      rules: createRules(options),
    },
  ];
}
