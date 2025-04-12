const path = require('path');
const CamundaModelerWebpackPlugin = require('camunda-modeler-webpack-plugin');

module.exports = {
  name: 'client',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
  },
  resolve: {
    alias: {

      // FIXME can be potentially be removed when carbon is provided via camunda-modeler-plugin-helpers
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
    },
  },
  plugins: [
    new CamundaModelerWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ],
      },
    ],
  },
};
