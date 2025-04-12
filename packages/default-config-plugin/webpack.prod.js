const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

function smartMerge(config, overrides) {
  return Object.prototype.toString.call(config) === '[object Array]'
    ? common.map(config => merge(config, overrides))
    : merge(config, overrides);
}

module.exports = smartMerge(common, {
  mode: 'production',
  devtool: 'source-map',
});