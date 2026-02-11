const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");
const react = require("eslint-plugin-react");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: 13,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "next",
        "prettier",
    ),

    plugins: {
        react,
    },

    rules: {
        camelcase: ["off"],
        "jsx-a11y/no-static-element-interactions": ["warn"],
        "jsx-a11y/click-events-have-key-events": ["warn"],
    },
}, globalIgnores(["src/generated/prisma", "**/*.md"])]);
