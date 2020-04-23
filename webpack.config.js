const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: { 
        index: './src/index.js' 
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: 'svelte-loader'
            }
        ]
    },
    devServer: {
		contentBase: path.join(__dirname, 'build'),
        clientLogLevel: 'silent'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}