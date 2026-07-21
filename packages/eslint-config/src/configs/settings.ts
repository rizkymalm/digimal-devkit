import { DefineConfigOptions } from "../types.js";

export function createSettings({
  react = true,
  tailwind = true,
}: DefineConfigOptions = {}) {
  return {
    ...(react
      ? {
          react: {
            version: "detect",
          },
        }
      : {}),

    ...(tailwind
      ? {
          tailwindcss: {
            callees: ["cn", "clsx", "cva"],
            cssConfigPath: "./src/index.css",
          },
        }
      : {}),
  };
}
