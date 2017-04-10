const baseWebpackConfig = require('./webpack.conf.base'),
merge = require('webpack-merge'),
webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  plugins: [
  	new webpack.DefinePlugin({
  	  'process.env': {
  	    NODE_ENV: JSON.stringify('production')
  	  }
  	})
  ]
})
