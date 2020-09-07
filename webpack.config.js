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
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: ['babel-loader'],
            // },
            {
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'ts-loader',
						options: {
							allowTsInNodeModules: true,
						},
					},
				],
			},
        ]
    },
    resolve: {
		extensions: ['.tsx', '.ts', '.js']
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