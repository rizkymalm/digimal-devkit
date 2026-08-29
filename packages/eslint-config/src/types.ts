import type { Linter } from "eslint";

interface ReactOptions {
  three?: boolean;
}

export interface DefineConfigOptions {
  react?: boolean | ReactOptions;
  tailwind?: boolean;
  typeChecked?: boolean;
  prettier?: boolean;
  accessibility?: boolean;
}

export type FlatConfig = Linter.Config;
