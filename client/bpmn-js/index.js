import CodePropertiesProvider from './CodePropertiesProvider';
import DisableModelingCode from './DisableModeling';

export default {
  __init__: [ 'codePropertiesProvider', 'disableModelingCode' ],
  codePropertiesProvider: [ 'type', CodePropertiesProvider ],
  disableModelingCode: [ 'type', DisableModelingCode ],
};
