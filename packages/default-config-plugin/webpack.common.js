const path = require('path');
const CamundaModelerWebpackPlugin = require('camunda-modeler-webpack-plugin');

module.exports = {
  name: 'client',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
  },
  plugins: [
    new CamundaModelerWebpackPlugin(),
  ],
};
