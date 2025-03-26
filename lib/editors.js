import { ensureConfig } from './config';

export function getEditor(language) {
  const config = ensureConfig();
  return config.editors[language] || config.defaultEditor;
}

export function registerDefaultEditor(defaultEditor) {
  ensureConfig().defaultEditor = defaultEditor;
}

export function registerEditor(language, editor) {
  ensureConfig().editors[language] = editor;
}
