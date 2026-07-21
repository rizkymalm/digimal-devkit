import js from "@eslint/js";
import tseslint from "typescript-eslint";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";

import type { DefineConfigOptions } from "../types.js";
import { defaultOptions } from "../helpers/default-options.js";

export function createPresets(options: DefineConfigOptions = {}) {
  const resolved = {
    ...defaultOptions,
    ...options,
  };

  return [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    ...(resolved.typeChecked ? tseslint.configs.recommendedTypeChecked : []),

    ...(resolved.react
      ? [
          react.configs.flat.recommended,
          reactHooks.configs.flat.recommended,
          reactRefresh.configs.vite,
        ]
      : []),
    ...(resolved.accessibility ? [jsxA11y.flatConfigs.recommended] : []),
  ];
}
