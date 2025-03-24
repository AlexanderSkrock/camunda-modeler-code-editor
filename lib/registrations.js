const DEFAULT_STATE = {
  editors: {},
  default: null,
};

function ensureGlobal() {
  if (!globalThis['code-editor']) {
    globalThis['code-editor'] = DEFAULT_STATE;
  }
  return globalThis['code-editor'];
}

export function getEditor(language) {
  const config = ensureGlobal();
  return config.editors[language] || config.default;
}

export function registerDefaultEditor(defaultEditor) {
  ensureGlobal().default = defaultEditor;
}

export function registerEditor(language, editor) {
  ensureGlobal().editors[language] = editor;
}
