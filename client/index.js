import { registerBpmnJSPlugin, registerClientExtension } from 'camunda-modeler-plugin-helpers';

import { registerDefaultEditor } from '../lib';

import BpmnJsExtension from './bpmn-js';
import CodeEditorExtension from './CodeEditorExtension';
import { DefaultCodeEditor } from './components';

registerDefaultEditor(DefaultCodeEditor);

registerBpmnJSPlugin(BpmnJsExtension);
registerClientExtension(CodeEditorExtension);
