import { getConfigValue, setConfigValue } from './config';

const EDITABLE_TYPES_CONFIG_PROPERTY = 'editableTypes';

export function getEditableTypes() {
  return Object.values(getConfigValue(EDITABLE_TYPES_CONFIG_PROPERTY, {}));
}

export function getEditableType(id) {
  return getConfigValue(EDITABLE_TYPES_CONFIG_PROPERTY, {})[id];
}

export function registerEditableType(typeImplementation) {
  setConfigValue(EDITABLE_TYPES_CONFIG_PROPERTY, (currentTypes) => ({
    ...currentTypes,
    [typeImplementation.id]: typeImplementation,
  }));
}

export function registerEditableTypes(typeImplementations) {
  typeImplementations.forEach(registerEditableType);
}
