const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './client/index',
  output: {
    path: '/client/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
}
