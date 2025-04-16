const path = require('path');
const { merge } = require('webpack-merge');

const CamundaModelerWebpackPlugin = require('camunda-modeler-webpack-plugin');

function smartMerge(config, ...overrides) {
  return Object.prototype.toString.call(config) === '[object Array]'
    ? config.map(config => merge(config, ...overrides))
    : merge(config, ...overrides);
}

function envOverrides(config, context) {
  return context.options.mode === 'development'
    ? {
      mode: 'development',
      devtool: 'inline-source-map',
    }
    : {
      mode: 'production',
      devtool: 'source-map',
    };
}

function jsxRuntimeAliasOverrides(config, context) {
  if (!context.options.configureJsxRuntimeAlias) {
    return {};
  }
  return {
    resolve: {
      alias: {

        // FIXME can be potentially be removed when carbon is provided via camunda-modeler-plugin-helpers
        'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      },
    },
  };
}

function moduleOverrides(config, context) {
  if (!context.options.asModule) {
    return {};
  }
  return {
    output: {
      library: {
        type: 'module',
      },
    },
    experiments: {
      outputModule: true,
    },
  };
}

function styleOverrides(config, context) {
  if (!context.options.supportsStyles) {
    return {};
  }

  return {
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ],
        },
        {
          test: /\.css$/i,
          use: [ 'style-loader', 'css-loader' ],
        },
      ],
    },
  };
};

function defaultOverrides(config, context) {
  return {
    name: path.basename(context.options.outputFileName),
    entry: path.resolve(__dirname, context.options.projectRoot, context.options.main),
    output: {
      path: path.resolve(__dirname, context.options.projectRoot, context.options.outputPath),
      filename: context.options.outputFileName,
    },
    plugins: [
      new CamundaModelerWebpackPlugin(),
    ],
  };
}

module.exports = (config, context) => {
  const overrides = [
    defaultOverrides(config, context),
    styleOverrides(config, context),
    moduleOverrides(config, context),
    jsxRuntimeAliasOverrides(config, context),
    envOverrides(config, context),
  ];
  return smartMerge(config, ...overrides);
};
