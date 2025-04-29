import { registerDefaultEditor } from '@camunda-modeler-code-editor/api';
import { TextEditor } from '@camunda-modeler-code-editor/editors';

export default () => {
  registerDefaultEditor(TextEditor);
};