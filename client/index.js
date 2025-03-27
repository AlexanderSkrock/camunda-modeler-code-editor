import { registerBpmnJSPlugin, registerClientExtension } from 'camunda-modeler-plugin-helpers';

import { registerDefaultEditor, registerEditableType } from '../lib';

import { DefaultCodeEditor } from './components';
import { ScriptTask } from './types';

import BpmnJsExtension from './bpmn-js';
import CodeEditorExtension from './CodeEditorExtension';

registerEditableType('bpmn:ScriptTask', ScriptTask);

registerDefaultEditor(DefaultCodeEditor);

registerBpmnJSPlugin(BpmnJsExtension);
registerClientExtension(CodeEditorExtension);
