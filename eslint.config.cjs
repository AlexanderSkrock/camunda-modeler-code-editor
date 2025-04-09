const { defineConfig, globalIgnores } = require('eslint/config');
const { fixupPluginRules } = require('@eslint/compat');
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const importPlugin = require('eslint-plugin-import');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = defineConfig([ globalIgnores([ 'node_modules/*', 'dist/*' ]), {
  extends: compat.extends('plugin:bpmn-io/jsx', 'plugin:bpmn-io/node', 'plugin:bpmn-io/browser'),

  plugins: {
    import: fixupPluginRules(importPlugin),
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