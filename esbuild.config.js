const { existsSync, statSync } = require('node:fs');
const { readFile } = require('node:fs/promises');
const { dirname, extname, join } = require('node:path');
const { sassPlugin } = require('esbuild-sass-plugin');

/**
 * This plugins aims to do equivalent work as the resolve alias feature of Webpack.
 * Exact matches can be defined using a trailing $. If this is not present, then we
 * will also match subpaths, e. g. react will also match react/jsx-runtime.
 * As the aliases are evaluated in order, always the first possible match will win.
 * Actually, this is slightly different to Webpack, because there exact matches always
 * had precendence.
 */
const aliasPlugin = (aliasMap) => {
  return {
    name: 'alias',
    setup(build) {
      const asyncCache = new Map();

      build.onResolve({ filter: /.*/ }, async args => {
        function toResolveParams(args) {
          return {
            kind: args.kind,
            importer: args.importer,
            namespace: args.namespace,
            resolveDir: args.resolveDir,
            pluginData: args.pluginData
          };
        };

        async function defaultResolve(adjustedImport, args) {
          return build.resolve(adjustedImport, args);
        }

        function findMatchingAlias(path) {
          for (const [ aliasName, aliasReplacement ] of Object.entries(aliasMap)) {
            const needsExactMatch = aliasName.endsWith('$');
            const importToMatch = aliasName.endsWith('$') ? aliasName.substring(aliasName.length - 1) : aliasName;

            if (path === importToMatch) {
              return {
                exact: needsExactMatch,
                alias: aliasName,
                path: path,
                replacement: aliasReplacement,
              };
            } else if (!needsExactMatch && path.startsWith(importToMatch + '/')) {
              const subPath = path.substring(importToMatch.length + 1);

              const isFile = extname(aliasReplacement) !== '' || existsSync(aliasReplacement) && statSync(aliasReplacement).isFile();
              const adjustedReplacement = isFile
                ? join(dirname(aliasReplacement), subPath)
                : join(aliasReplacement, subPath);

              return {
                exact: needsExactMatch,
                alias: aliasName,
                path: path,
                replacement: adjustedReplacement,
              };
            }
          }
        }

        async function aliasResolve(path, resolveParams) {
          const match = findMatchingAlias(path);
          if (!match) {
            return undefined;
          };

          if (path === match.replacement) {
            return undefined;
          }

          return defaultResolve(match.replacement, resolveParams);
        }

        const pathToLookup = args.path;

        if (asyncCache.has(pathToLookup)) {
          return asyncCache.get(pathToLookup);
        } else {
          const resolvedAlias = aliasResolve(pathToLookup, toResolveParams(args));
          asyncCache.set(pathToLookup, resolvedAlias);

          resolvedAlias.then(result => {
            if (result && result.path) {
              console.log(`🔁 Alias matched: "${pathToLookup}" → ${result.path}`);
            }
          });

          return resolvedAlias;
        }
      });
    }
  };
};

const rebuildLoggerPlugin = () => ({
  name: 'rebuild-logger',
  setup(build) {
    build.onStart(() => {
      console.log('🔄 Rebuilding...');
    });
    build.onEnd(result => {
      console.log('✅ Rebuild complete:', new Date().toLocaleTimeString());
    });
  }
});

module.exports = {
  plugins: [
    rebuildLoggerPlugin(),

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
      type: 'css',
    }),
  ],
  loader: {
    '.css': 'css',
    '.scss': 'css'
  },
};