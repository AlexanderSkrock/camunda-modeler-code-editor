import path from 'path';
import CamundaModelerWebpackPlugin from 'camunda-modeler-webpack-plugin';

export default {
  name: 'client',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
  },
  resolve: {
    alias: {

      // FIXME can be potentially be removed when carbon is provided via camunda-modeler-plugin-helpers
      'react/jsx-runtime': import.meta.resolve('react/jsx-runtime'),
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
