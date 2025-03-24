import CodePropertiesProvider from './CodePropertiesProvider';
import DisableModelingCode from './DisableModeling';
import ScriptValueUpdater from './ScriptValueUpdater';

export default {
  __init__: [ 'codePropertiesProvider', 'disableModelingCode', 'scriptValueUpdater' ],
  codePropertiesProvider: [ 'type', CodePropertiesProvider ],
  disableModelingCode: [ 'type', DisableModelingCode ],
  scriptValueUpdater: [ 'type', ScriptValueUpdater ],
};
