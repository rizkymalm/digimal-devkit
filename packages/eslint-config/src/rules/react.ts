import type { DefineConfigOptions } from "../types.js";
import { reactThreeRules } from "./react/three.js";

export function createReactRules(options: DefineConfigOptions = {}) {
  const reactOptions = typeof options.react === "object" ? options.react : {};

  return {
    "react/react-in-jsx-scope": "off",
    "react/button-has-type": "error",
    "react/prop-types": "off",
    "react/jsx-key": "error",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    "react/self-closing-comp": "error",
    "react/jsx-no-useless-fragment": "warn",
    "react/no-unstable-nested-components": "warn",
    "react-refresh/only-export-components": "warn",
    "react/jsx-boolean-value": "warn",
    "react/no-danger": "warn",
    "react/no-children-prop": "error",
    "react/jsx-fragments": ["warn", "syntax"],
    "react/function-component-definition": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",

    ...(reactOptions.three ? reactThreeRules : {}),
  } as const;
}
