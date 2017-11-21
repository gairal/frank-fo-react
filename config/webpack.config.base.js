const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
	module : {}
};

webpackConfig.entry = {
	app: './src/app/app.js',
}

webpackConfig.output = {
	filename: '[name].js'
}

webpackConfig.plugins = [
	new webpack.ProvidePlugin({
	})
];

webpackConfig.module.loaders = [
	{
		test: /\.(js|jsx)$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	},
	{
	  test   : /\.json$/,
	  loader : 'json'
	},
	{
	  test: /\.css$/,
	  loader: 'style-loader!css-loader?modules',
	  include: /flexboxgrid/
	}
	];

module.exports = webpackConfig;
