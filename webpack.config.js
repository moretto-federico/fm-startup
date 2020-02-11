var path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'test.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};