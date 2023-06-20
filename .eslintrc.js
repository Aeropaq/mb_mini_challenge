module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "eslint:recommended"
    ],
    plugins: ["import", "@typescript-eslint"],
    parserOptions: {ecmaVersion: 2020},
    ignorePatterns: [
        "node_modules/",
        "**/files/**/*",
        "dist/"
    ],
    overrides: [
        {
            files: ["*.ts", "*.js"],
            extends: [
                "plugin:@typescript-eslint/recommended"
            ],
            rules: {
                "semi": ["error", "always"],
                "keyword-spacing": [
                    "error",
                    {
                        after: true
                    }
                ],
                "import/extensions": [
                    "error",
                    {
                        ts: "never",
                        js: "never",
                        vue: "always",
                        json: "always",
                        png: "always",
                        jpg: "always",
                        mp3: "always",
                        mp4: "always",
                    },
                ],
                "space-before-function-paren": [
                    "error",
                    {
                        anonymous: "never",
                        named: "never",
                        asyncArrow: "always"
                    },
                ],
                "no-multiple-empty-lines": [
                    "error",
                    {
                        max: 1
                    }
                ],
                "no-param-reassign": [
                    2,
                    {
                        props: false
                    }
                ],
                "object-curly-newline": [
                    "error",
                    {
                        consistent: true,
                        multiline: true,
                    },
                ],
                "no-extra-boolean-cast": "error",
                "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
                "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
                "@typescript-eslint/no-unused-vars": "warn",
                "@typescript-eslint/no-explicit-any": "error",
                "@typescript-eslint/no-empty-interface": "warn",
            }
        },
    ],
    rules: {
        "indent": [
            "error",
            4,
            {
                SwitchCase: 1
            }
        ],
        "max-len": [
            "error",
            {
                code: 500,
                ignorePattern: "^\\s*<path"
            }
        ],
        "quotes": ["error", "double"],
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".ts", ".json"],
            },
        },
    },
};
