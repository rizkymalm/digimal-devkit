import { globalIgnores } from "eslint/config";

import type { DefineConfigOptions } from "../types.js";

export function createIgnores(_options: DefineConfigOptions = {}) {
  return globalIgnores(["dist", "coverage", "node_modules"]);
}
