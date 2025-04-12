import path from 'path';
import { fileURLToPath } from 'url';
import CamundaModelerWebpackPlugin from 'camunda-modeler-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  name: 'helpers',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    library: {
      type: 'module',
    },
  },
  plugins: [
    new CamundaModelerWebpackPlugin(),
  ],
  experiments: {
    outputModule: true,
  },
};
