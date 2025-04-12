import { merge } from 'webpack-merge';
import common from './webpack.common.mjs';

function smartMerge(config, overrides) {
  return Object.prototype.toString.call(config) === '[object Array]'
    ? common.map(config => merge(config, overrides))
    : merge(config, overrides);
}

export default smartMerge(common, {
  mode: 'production',
  devtool: 'source-map',
});
