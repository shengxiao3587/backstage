const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
          },
        ]
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        exclude: /node_modules/,
        use:[
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        include: /node_modules\/antd/,
        use:[
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          // {
          //   loader: 'sass-loader',
          // },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            },
          },
        ],
      }
    ]
  }
};
