import { setConfigValue, getConfigValue } from './config';

const DEFAULT_EDITOR_CONFIG_PROPERTY = 'defaultEditor';
const EDITORS_CONFIG_PROPERTY = 'editors';

export function getEditor(language) {
  const editorForLanguage = getConfigValue(EDITORS_CONFIG_PROPERTY, {})[language];
  return editorForLanguage || getConfigValue(DEFAULT_EDITOR_CONFIG_PROPERTY);
}

export function registerDefaultEditor(defaultEditor) {
  setConfigValue(DEFAULT_EDITOR_CONFIG_PROPERTY, defaultEditor);
}

export function registerEditor(language, editor) {
  setConfigValue(EDITORS_CONFIG_PROPERTY, (currentEditors = {}) => ({
    ...currentEditors,
    [language]: editor,
  }));
}
