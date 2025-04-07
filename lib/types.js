import { ensureConfig } from './config';

export function getEditableTypes() {
  return Object.values(ensureConfig().types);
}

export function getEditableType(id) {
  return ensureConfig().types[id];
}

export function registerEditableType(typeImplementation) {
  ensureConfig().types[typeImplementation.id] = typeImplementation;
}

export function registerEditableTypes(typeImplementations) {
  typeImplementations.forEach(typeImplementation => registerEditableType(typeImplementation));
}
