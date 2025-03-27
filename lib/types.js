import { ensureConfig } from './config';

export function getEditableTypes() {
  return ensureConfig().types;
}

export function getEditableType(typeName) {
  return ensureConfig().types[typeName];
}

export function registerEditableType(type, typeImplementation) {
  ensureConfig().types[type] = typeImplementation;
}
