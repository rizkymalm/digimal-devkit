import { defaultOptions } from "../helpers/default-options.js";
import type { DefineConfigOptions } from "../types.js";
import { accessibilityRules } from "./accessibility.js";

import { generalRules } from "./general.js";
import { importRules } from "./imports.js";
import { reactRules } from "./react.js";
import { tailwindRules } from "./tailwind.js";
import { typeCheckedRules } from "./typescript-typechecked.js";
import { typescriptRules } from "./typescript.js";
import { unusedImportRules } from "./unused-imports.js";

export function createRules(options: DefineConfigOptions = {}) {
  const resolved = {
    ...defaultOptions,
    ...options,
  };

  return {
    ...generalRules,
    ...importRules,
    ...unusedImportRules,
    ...typescriptRules, // SELALU
    ...(resolved.typeChecked ? typeCheckedRules : {}), // OPSIONAL
    ...(resolved.react ? reactRules : {}),
    ...(resolved.tailwind ? tailwindRules : {}),
    ...(resolved.accessibility ? accessibilityRules : {}),
  };
}
