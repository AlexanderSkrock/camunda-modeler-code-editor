const { merge } = require('webpack-merge');
const common = require('./webpack.common.mjs');

function smartMerge(config, overrides) {
  return Object.prototype.toString.call(config) === '[object Array]'
    ? common.map(config => merge(config, overrides))
    : merge(config, overrides);
}

export default smartMerge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});