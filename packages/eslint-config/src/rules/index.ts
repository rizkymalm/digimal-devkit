import type { DefineConfigOptions } from "../types.js";

import { generalRules } from "./general.js";
import { reactRules } from "./react.js";
import { tailwindRules } from "./tailwind.js";
import { typescriptRules } from "./typescript.js";

export function createRules(options: DefineConfigOptions = {}) {
  const { react = true, tailwind = true, typeChecked = true } = options;

  return {
    ...generalRules,
    ...(react ? reactRules : {}),
    ...(tailwind ? tailwindRules : {}),
    ...(typeChecked ? typescriptRules : {}),
  };
}
