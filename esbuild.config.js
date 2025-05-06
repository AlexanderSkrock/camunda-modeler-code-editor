const { existsSync, statSync } = require('node:fs');
const { dirname, extname, join } = require('node:path');
const { sassPlugin } = require('esbuild-sass-plugin');

const aliasPlugin = (aliasMap) => {
  return {
    name: 'alias',
    setup(build) {
      build.onResolve({ filter: /.*/ }, args => {
        for (const [ aliasName, aliasReplacement ] of Object.entries(aliasMap)) {
          const needsExactMatch = aliasName.endsWith('$');
          const importToMatch = aliasName.endsWith('$') ? aliasName.substring(aliasName.length - 1) : aliasName;

          if (args.path === importToMatch) {
            console.log(`🔁 Alias matched: "${args.path}" → ${aliasReplacement}`);
            return {
              path: aliasReplacement,
              namespace: 'file'
            };
          } else if (!needsExactMatch && args.path.startsWith(importToMatch + '/')) {
            const subPath = args.path.substring(importToMatch.length + 1);

            const isFile = extname(aliasReplacement) !== '' || existsSync(aliasReplacement) && statSync(aliasReplacement).isFile();
            const adjustedReplacement = isFile
              ? join(dirname(aliasReplacement), subPath)
              : join(aliasReplacement, subPath);

            console.log(`🔁 Subpath of alias matched: "${args.path}" → ${adjustedReplacement}`);
            return {
              path: require.resolve(adjustedReplacement),
              namespace: 'file'
            };
          }
        }
        return undefined;
      });
    }
  };
};

module.exports = {
  plugins: [

    // does the same as the Camunda Modeler Webpack Plugin
    // see https://github.com/camunda/camunda-modeler-webpack-plugin
    aliasPlugin({
      '@bpmn-io/properties-panel': require.resolve('camunda-modeler-plugin-helpers/vendor/@bpmn-io/properties-panel'),
      'bpmn-js-properties-panel': require.resolve('camunda-modeler-plugin-helpers/vendor/bpmn-js-properties-panel'),

      // currently the helpers module only provides react and not sub paths like react/jsx-runtime
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
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