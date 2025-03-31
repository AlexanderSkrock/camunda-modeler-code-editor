const DEFAULT_CONFIG = {
  defaultEditor: null,
  editors: {},
  types: {},
  scopeProvider: null,
};

export function ensureConfig() {
  if (!globalThis['code-editor']) {
    globalThis['code-editor'] = DEFAULT_CONFIG;
  }
  return globalThis['code-editor'];
}
