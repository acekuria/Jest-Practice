/* eslint-disable prettier/prettier */

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/caesar.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
};
