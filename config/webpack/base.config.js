const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve('src')
        ],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve('src', 'components'),
      constants: path.resolve('src', 'constants'),
      utils: path.resolve('src', 'utils')
    },
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ])
  ]
};
