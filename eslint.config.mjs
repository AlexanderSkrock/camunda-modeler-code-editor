import { defineConfig, globalIgnores } from 'eslint/config';

import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default defineConfig([ globalIgnores([ 'node_modules/*', 'dist/*' ]), {
  extends: [ 'bpmn-io/jsx', 'bpmn-io/node', 'bpmn-io/browser' ],

  plugins: {
    'bpmn-io': bpmnIoPlugin,
  },

  // the carbon imports rules are only relevant for the plugin package
  rules: {
    'no-restricted-imports': [ 'error', {
      name: '@carbon/react',
      message: '@carbon should be consumed via vendor/@carbon/react until it is provided by the camunda-modeler-plugin-helpers',
    }, {
      name: '@carbon/icons-react',
      message: '@carbon should be consumed via vendor/@carbon/icons-react until it is provided by the camunda-modeler-plugin-helpers',
    } ],
  },

  env: {
    jest: true,
  },
} ]);
