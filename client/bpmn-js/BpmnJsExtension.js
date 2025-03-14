import CodePropertiesProvider from "./CodePropertiesProvider";
import DisableModelingCode from "./DisableModeling.js";

export default {
    __init__: [ 'codePropertiesProvider', 'disableModelingCode' ],
    codePropertiesProvider: [ 'type', CodePropertiesProvider ],
    disableModelingCode: [ 'type', DisableModelingCode ],
};
