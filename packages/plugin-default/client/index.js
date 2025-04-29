import { registerBpmnJSPlugin, registerClientExtension } from 'camunda-modeler-plugin-helpers';

import { CodeEditorBpmnJsPlugin, CodeEditorClientExtension } from '@camunda-modeler-code-editor/plugin-base';
import { applyDefaultAccessors, applyDefaultEditableTypes, applyDefaultEditor, applyDefaultScopeProviders } from '@camunda-modeler-code-editor/config';

applyDefaultAccessors();
applyDefaultEditableTypes();
applyDefaultEditor();
applyDefaultScopeProviders();

registerBpmnJSPlugin(CodeEditorBpmnJsPlugin);
registerClientExtension(CodeEditorClientExtension);
