const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.prod');

const serveProdConfig = Object.assign({}, config);

serveProdConfig.plugins.push(new webpack.DefinePlugin({
  DEBUG: JSON.stringify(true),
  LOG_LEVEL: JSON.stringify(40),
}));

serveProdConfig.devServer = {
  contentBase: path.join(__dirname, '../dist'),
  compress: true,
  port: 3000,
  hot: true,
  historyApiFallback: true,
};

serveProdConfig.plugins.push(new webpack.NamedModulesPlugin());
serveProdConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = serveProdConfig;
