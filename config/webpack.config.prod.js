const baseWebpackConfig = require('./webpack.config.base'),
merge = require('webpack-merge'),
webpack = require('webpack'),
UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  plugins: [
  	new webpack.DefinePlugin({
  	  'process.env': {
  	    NODE_ENV: JSON.stringify('production')
  	  }
  	}),
  	new UglifyJsPlugin()
  ]
})
