import { defineConfig, globalIgnores } from 'eslint/config';

import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default defineConfig([ globalIgnores([ 'node_modules/*', 'dist/*' ]), {
  extends: [ 'bpmn-io/node', 'bpmn-io/browser' ],

  plugins: {
    'bpmn-io': bpmnIoPlugin,
  },
} ]);
