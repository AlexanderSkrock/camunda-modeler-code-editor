import path from 'path';
import CamundaModelerWebpackPlugin from 'camunda-modeler-webpack-plugin';

export default {
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
