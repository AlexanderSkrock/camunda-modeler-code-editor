import { defineConfig, globalIgnores } from 'eslint/config';

import bpmnIoPlugin from 'eslint-plugin-bpmn-io';
import jestPlugin from 'eslint-plugin-jest';

export default defineConfig([ globalIgnores([ 'node_modules/*', 'dist/*' ]), {
  extends: [ 'bpmn-io/jsx', 'bpmn-io/node', 'bpmn-io/browser' ],

  plugins: {
    'bpmn-io': bpmnIoPlugin,
    'jest': jestPlugin,
  },
} ]);
