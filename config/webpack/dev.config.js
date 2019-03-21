const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [
          path.resolve('src')
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('public'),
    historyApiFallback: true,
    hot: true,
    port: 9000,
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
