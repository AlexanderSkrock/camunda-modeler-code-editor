import { registerBpmnJSPlugin, registerClientExtension } from 'camunda-modeler-plugin-helpers';

import CodeEditorExtension from './CodeEditorClientExtension';
import CodeEditorBpmnJsPlugin from './CodeEditorBpmnJsPlugin';
import { registerEditableTypes } from '../lib/types';

import { registerDefaultEditor } from '../lib';
import { defaultEditor, defaultTypes } from '../default-implementation';

registerDefaultEditor(defaultEditor);
registerEditableTypes(defaultTypes);

registerBpmnJSPlugin(CodeEditorBpmnJsPlugin);
registerClientExtension(CodeEditorExtension);
