import reactRefresh from "eslint-plugin-react-refresh";

import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tailwindcss from "eslint-plugin-tailwindcss";

export const plugins = {
  import: importPlugin,
  "unused-imports": unusedImports,
  "simple-import-sort": simpleImportSort,
  tailwindcss,
};
