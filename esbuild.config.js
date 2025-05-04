const aliasPlugin = require('esbuild-plugin-alias');
const { sassPlugin } = require('esbuild-sass-plugin');

module.exports = {
  plugins: [

    // does the same as the Camunda Modeler Webpack Plugin
    // see https://github.com/camunda/camunda-modeler-webpack-plugin
    aliasPlugin({
      '@bpmn-io/properties-panel': require.resolve('camunda-modeler-plugin-helpers/vendor/@bpmn-io/properties-panel'),
      'bpmn-js-properties-panel': require.resolve('camunda-modeler-plugin-helpers/vendor/bpmn-js-properties-panel'),
      'react': require.resolve('camunda-modeler-plugin-helpers/react')
    }),
    sassPlugin({
      filter: /\.module\.scss$/,
      type: 'local-css',
    }),
    sassPlugin({
      filter: /\.scss$/,
      type: 'style',
    }),
  ],
  loader: {
    '.css': 'css',
    '.scss': 'css'
  },
};