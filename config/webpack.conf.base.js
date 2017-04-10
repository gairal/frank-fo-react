const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
	module : {}
};

webpackConfig.output = {
	filename: 'app.js'
}

webpackConfig.plugins = [
	new webpack.ProvidePlugin({
	})
];

webpackConfig.module.loaders = [{
	test: /.js?$/,
	loader: 'babel-loader',
	exclude: /node_modules/,
	query: {
		presets: ['es2015'],
    plugins: ['add-module-exports']
	}
}];

module.exports = webpackConfig;
