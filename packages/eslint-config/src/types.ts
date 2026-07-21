import type { Linter } from "eslint";

export interface DefineConfigOptions {
  react?: boolean;
  tailwind?: boolean;
  typeChecked?: boolean;
  prettier?: boolean;
}

export type FlatConfig = Linter.Config;
