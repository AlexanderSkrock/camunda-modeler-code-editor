import { registerBpmnJSPlugin, registerClientExtension } from 'camunda-modeler-plugin-helpers';

import CodeEditorExtension from './CodeEditorClientExtension';
import CodeEditorBpmnJsPlugin from './CodeEditorBpmnJsPlugin';
import configureDefaultImplementation from './configureDefaultImplementation';

configureDefaultImplementation();

registerBpmnJSPlugin(CodeEditorBpmnJsPlugin);
registerClientExtension(CodeEditorExtension);
