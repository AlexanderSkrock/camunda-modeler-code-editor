import { ensureConfig } from './config';

export function getAccessor(element) {
  return Object.values(ensureConfig().accessors).find(accessor => accessor.supportsElement(element));
}

export function registerAccessor(accessor) {
  ensureConfig().accessors[accessor.id] = accessor;
}

export function registerAccessors(accessors) {
  accessors.forEach(registerAccessor);
}
