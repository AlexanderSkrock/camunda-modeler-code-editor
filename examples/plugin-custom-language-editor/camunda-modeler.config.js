const camundaModelerConfig = require('../../camunda-modeler.config');

module.exports = {
  ...camundaModelerConfig,
  linkedPlugins: [
    '.',
  ],
};
