const path = require('path');

const CamundaModelerWebpackPlugin = require('camunda-modeler-webpack-plugin');

const config = {
  resolve: {
    fallback: {
      'assert': false,
      'util': false,
    },
  },
  mode: 'development',
  devtool: 'cheap-source-map',
  plugins: [
    new CamundaModelerWebpackPlugin(),
  ],
};

const libConfig = {
  ...config,
  name: 'lib',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};

const clientConfig = {
  ...config,
  name: 'client',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
  },
};

module.exports = [
  libConfig,
  clientConfig,
];
