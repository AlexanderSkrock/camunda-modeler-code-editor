const GLOBAL_CONFIG_NAME = 'code-editor';

const defaultConfig = () =>({});

function setConfig(config) {
  globalThis[GLOBAL_CONFIG_NAME] = config;
}

function getConfig() {
  return globalThis[GLOBAL_CONFIG_NAME];
}

function ensureConfig() {
  if (!getConfig()) {
    setConfig(defaultConfig());
  }
  return getConfig();
}

export function resetConfig() {
  setConfig(defaultConfig());
}

export function getConfigValue(key, defaultValue) {
  const currentConfig = ensureConfig();
  return currentConfig[key] || defaultValue;
}

export function setConfigValue(key, value) {
  const currentConfig = ensureConfig();

  const nextValue = typeof value === 'function'
    ? value(getConfigValue(key))
    : value;

  setConfig({
    ...currentConfig,
    [key]: nextValue,
  });
}
