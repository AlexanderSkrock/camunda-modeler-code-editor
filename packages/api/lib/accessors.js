import { getConfigValue, setConfigValue } from './config';

const ACCESSORS_CONFIG_PROPERTY = 'accessors';

export function getAccessor(element) {
  const accessors = Object.values(getConfigValue(ACCESSORS_CONFIG_PROPERTY, {}));
  return accessors.find(accessor => accessor.supportsElement(element));
}

export function registerAccessor(accessor) {
  setConfigValue(ACCESSORS_CONFIG_PROPERTY, (accessors = {}) => ({
    ...accessors,
    [accessor.id]: accessor,
  }));
}

export function registerAccessors(accessors) {
  accessors.forEach(registerAccessor);
}
