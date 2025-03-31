import { registerBpmnJSPlugin, registerClientExtension } from 'camunda-modeler-plugin-helpers';

import { registerDefaultEditor, registerEditableTypes, registerScopeProvider } from '../lib';

import { defaultEditor, defaultScopeProvider, defaultTypes } from '../default-implementation';
import CodeEditorExtension from './CodeEditorClientExtension';
import CodeEditorBpmnJsPlugin from './CodeEditorBpmnJsPlugin';

registerDefaultEditor(defaultEditor);
registerEditableTypes(defaultTypes);
registerScopeProvider(defaultScopeProvider);

registerBpmnJSPlugin(CodeEditorBpmnJsPlugin);
registerClientExtension(CodeEditorExtension);
