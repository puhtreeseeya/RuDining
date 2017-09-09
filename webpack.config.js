const path = require('path'); 

// const webpack = require('webpack'); 

module.exports = {
	entry: './client/index.js', 
	output: {
		path: __dirname, 
		filename: './public/bundle.js'

	}, 
	devtool: 'source-map', 
	// devtool: 'source-map', 
	// resolve: {
	// 	extensions: ['', '.js', '.jsx']
	// }, 
	module: {
		loaders: [
			{
				test: /\.jsx?$/, 
				exclude: /(node_modules | bower_components)/, 
				loader: 'babel-loader', 
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}