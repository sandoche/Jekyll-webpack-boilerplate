const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = Merge(CommonConfig, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080',
        files: ["_site/*.html"]
      },
      {
        reload: false
      }
    ),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: [
      './_site'
    ],
    hot: true
  }
});
