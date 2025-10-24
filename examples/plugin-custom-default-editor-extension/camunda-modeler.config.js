const defaultModelerConfig = require('../../camunda-modeler.config');

module.exports = {
  ...defaultModelerConfig,
  linkedPlugins: [
    '.',
    '../../packages/plugin-default'
  ],
};
