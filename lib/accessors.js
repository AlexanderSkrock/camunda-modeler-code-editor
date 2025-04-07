import { ensureConfig } from './config';

import { getType } from './utils';

function isString(variable) {
  return typeof variable === 'string' || variable instanceof String;
}

export function getAccessor(typeNameOrElement) {
  const typeName = isString(typeNameOrElement) ? typeNameOrElement : getType(typeNameOrElement);
  return ensureConfig().accessors[typeName];
}

export function registerAccessor(typeName, accessors) {
  ensureConfig().accessors[typeName] = accessors;
}

export function registerAccessors(typeToAccessors) {
  Object.entries(typeToAccessors).forEach(([ typeName, accessors ]) => {
    registerAccessor(typeName, accessors);
  });
}
