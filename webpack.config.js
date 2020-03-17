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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		clientLogLevel: 'silent'
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}