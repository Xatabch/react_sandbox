const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        })
    ]
}