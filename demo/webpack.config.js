const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// module.exports = {
module.exports = (env, argv) => {
  return {
    entry: ['babel-polyfill', './demo/index.js'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, '../docs'),
      publicPath: env && env.DEV_SERVER == "true" ? '/' : '/material-table-core',
      filename: 'material-ui-core.demo.bundle.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, '../demo/index.html'),
        filename: './index.html',
      }),
    ],
    devServer: {
      contentBase: './demo',
      hot: true,
      disableHostCheck: true,
      open: true,
    },
  };
};
