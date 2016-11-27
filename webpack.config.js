var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');
var MODULES_DIR = path.resolve(__dirname, 'node_modules');

var config = {
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
  },
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : [APP_DIR, MODULES_DIR + '/react-particles'],
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
        //'style!css!sass?outputStyle=compressed'
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }

    ]
  },
  sassLoader: {
    includePaths: [
      './node_modules'
    ]
  }
};

module.exports = config;