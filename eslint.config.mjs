import { defineConfig, globalIgnores } from 'eslint/config';
import { fixupPluginRules } from '@eslint/compat';

import importPlugin from 'eslint-plugin-import';
import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default defineConfig([ globalIgnores([ 'node_modules/*', 'dist/*' ]), {
  extends: [ 'bpmn-io/jsx', 'bpmn-io/node', 'bpmn-io/browser' ],

  plugins: {
    'import': fixupPluginRules(importPlugin),
    'bpmn-io': fixupPluginRules(bpmnIoPlugin),
  },

  languageOptions: {
    globals: {},
    ecmaVersion: 2023,
    sourceType: 'module',
  },

  rules: {
    'no-restricted-imports': [ 'error', {
      name: '@carbon/react',
      message: '@carbon should be consumed via vendor/@carbon/react until it is provided by the camunda-modeler-plugin-helpers',
    }, {
      name: '@carbon/icons-react',
      message: '@carbon should be consumed via vendor/@carbon/icons-react until it is provided by the camunda-modeler-plugin-helpers',
    } ],

    'import/no-restricted-paths': [ 'error', {
      zones: [ {
        target: './lib',
        from: [ 'default-implementation', 'client' ],
        message: 'library functionality should be self-contained',
      }, {
        target: './default-implementation',
        from: [ 'client' ],
        message: 'type implementations should only depend on the library',
      } ],
    } ],
  },
} ]);