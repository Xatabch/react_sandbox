const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    devServer: {
		compress: true
	},
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ESLintPlugin({
            overrideConfigFile: path.resolve(__dirname, '../.eslintrc'),
            context: path.resolve(__dirname, '../src'),
            files: '**/*.(tsx|ts)'
        })
    ]
}
