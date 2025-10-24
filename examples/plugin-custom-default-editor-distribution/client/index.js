import { registerBpmnJSPlugin, registerClientExtension } from 'camunda-modeler-plugin-helpers';

import { applyDefaultAccessors, applyDefaultEditableTypes, applyDefaultEditor, applyDefaultScopeProviders } from '@camunda-modeler-code-editor/config';
import { CodeEditorBpmnJsPlugin, CodeEditorClientExtension } from '@camunda-modeler-code-editor/plugin-base';

import { applyDefaultEditor as applyCustomDefaultEditor } from './config';

// Defaults
applyDefaultAccessors();
applyDefaultEditableTypes();
applyDefaultEditor();
applyDefaultScopeProviders();

// Override
applyCustomDefaultEditor();

// Plugin registratin
registerBpmnJSPlugin(CodeEditorBpmnJsPlugin);
registerClientExtension(CodeEditorClientExtension);
