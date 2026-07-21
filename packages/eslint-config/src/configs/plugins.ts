import type { DefineConfigOptions } from "../types.js";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tailwindcss from "eslint-plugin-tailwindcss";

export function createPlugins({ tailwind = true }: DefineConfigOptions = {}) {
  return {
    import: importPlugin,

    "unused-imports": unusedImports,

    "simple-import-sort": simpleImportSort,

    ...(tailwind
      ? {
          tailwindcss,
        }
      : {}),
  };
}
