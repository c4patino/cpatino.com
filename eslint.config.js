import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

// Define the React version used in the project
const REACT_VERSION = "19.1.0";

// Add ignores for files we don't want to lint
const ignores = [
  "**/node_modules/**",
  "**/dist/**",
  "**/.astro/**",
  "**/.github/**",
  "**/public/**",
  "**/pnpm-lock.yaml",
  "**/*.config.cjs",
  "**/*.config.js",
  "**/*.config.mjs",
  "**/*.d.ts",
];

export default defineConfig([
  { ignores },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: REACT_VERSION
      }
    }
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off"
    }
  },
]);
