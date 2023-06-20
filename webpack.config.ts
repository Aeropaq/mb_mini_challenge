import * as path from "path";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CopyPlugin from "copy-webpack-plugin";

const config = {
    entry: "./src/app/main.ts",
    mode: "development",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/app/index.html", scriptLoading: "module",
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/assets", to: "assets"}
            ],
        }),
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer: {
        static: path.join(__dirname, "dist"), compress: true, port: 5001, hot: false, headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
        },
    },
};
export default config;