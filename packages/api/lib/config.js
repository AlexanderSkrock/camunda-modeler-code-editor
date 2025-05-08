const GLOBAL_CONFIG_NAME = 'code-editor';

const DEFAULT_CONFIG = {
  defaultEditor: null,
  editors: {},
  accessors: {},
  types: {},
  scopeProviders: {},
};

export function resetConfig() {
  globalThis[GLOBAL_CONFIG_NAME] = { ... DEFAULT_CONFIG };
}

export function ensureConfig() {
  if (!globalThis[GLOBAL_CONFIG_NAME]) {
    globalThis[GLOBAL_CONFIG_NAME] = { ...DEFAULT_CONFIG };
  }
  return globalThis[GLOBAL_CONFIG_NAME];
}
