import { registerEditor } from '@camunda-modeler-code-editor/api';

import { ClojureEditor } from '../editors';

const CLOJURE_LANGUAGE_NAMES = [
  'clojure',
  'Clojure'
];

function applyClojureEditor() {
  CLOJURE_LANGUAGE_NAMES.forEach(name => {
    registerEditor(name, ClojureEditor);
  });
}

export default applyClojureEditor;