import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  name: 'api',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};
