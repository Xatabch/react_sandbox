const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
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
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    }
                ],
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

const devMod = {
	devtool: 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			HOST: JSON.stringify('http://localhost:8000'),
		}),
	],
}

const prodMod = {
	plugins: [
		new webpack.DefinePlugin({
			HOST: JSON.stringify('http://api.neiron.email'),
		})
	],
}

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		return merge([
			common,
			devMod
		])
	} else if (argv.mode === 'production') {
		return merge([
			common,
			prodMod
		])
	}
}
