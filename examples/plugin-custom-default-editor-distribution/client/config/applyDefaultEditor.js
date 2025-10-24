import { registerDefaultEditor } from '@camunda-modeler-code-editor/api';

import { DefaultEditor } from '../editors';

function applyDefaultEditor() {
  registerDefaultEditor(DefaultEditor);
}

export default applyDefaultEditor;