// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/**/*.tsx",
    "./app/**/*.tsx",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  ...sharedConfig,
};

export default config;
