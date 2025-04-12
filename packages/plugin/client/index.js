import { registerBpmnJSPlugin, registerClientExtension } from 'camunda-modeler-plugin-helpers';

import CodeEditorExtension from './CodeEditorClientExtension';
import CodeEditorBpmnJsPlugin from './CodeEditorBpmnJsPlugin';

registerBpmnJSPlugin(CodeEditorBpmnJsPlugin);
registerClientExtension(CodeEditorExtension);
