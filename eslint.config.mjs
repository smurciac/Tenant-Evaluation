import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import chaiFriendly from "eslint-plugin-chai-friendly";
import cypress from "eslint-plugin-cypress";
import prettier from "eslint-plugin-prettier";
import importSort from 'eslint-plugin-simple-import-sort';
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...compat.extends(
  "eslint:recommended",
  "plugin:cypress/recommended",
  'plugin:@typescript-eslint/eslint-recommended',
  "plugin:@typescript-eslint/recommended",
  "plugin:chai-friendly/recommended",
), {
  plugins: {
    cypress,
    "@typescript-eslint": typescriptEslint,
    "chai-friendly": chaiFriendly,
    prettier,
    "simple-import-sort": importSort,
  },

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.mocha,
      ...cypress.environments.globals.globals,
    },

    parser: tsParser,
    ecmaVersion: "latest",
    sourceType: "module",
  },

  rules: {
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-namespace": ['error', { allowDeclarations: true }],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "arrow-spacing": ["error", {
      "before": true,
      "after": true,
    }],
    "block-spacing": "error",
    "chai-friendly/no-unused-expressions": 2,
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "warn",
    "cypress/assertion-before-screenshot": "error",
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict",
    }],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-eval": "error",
    "no-namespace": "off",
    "no-undef": "error",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    indent: ["error", 2, {
      SwitchCase: 1,
    }],
    "simple-import-sort/imports": [ "error",{
      groups: [
        // npm packages
        // Anything that starts with a letter (or digit or underscore), or `@` followed by a letter.
        // ['^\\w'],
        // Internal packages.
        ['^@selectors(/.*|$)','^@pages(/.*|$)','^@models(/.*|$)','^@utils(/.*|$)','^@fixtures(/.*|$)'],
        // Side effect imports.
        ['^\\u0000'],
        // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
      ],
    }],
    "simple-import-sort/exports": "error",
  },
}];