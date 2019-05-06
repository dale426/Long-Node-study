const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    ventor: './src/page/js/common.js',
    home: './src/page/js/home.js',
  },
  // entry: () => new Promise((resolve) => resolve(['./demo', './demo2'])),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "src\/page\/index.html",
    })
  ],
};