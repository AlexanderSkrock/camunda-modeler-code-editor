import { ensureConfig } from './config';


export function getScopeProvider(identifier) {
  return ensureConfig().scopeProviders[identifier];
}

export function getScopeProviders() {
  return [
    ...Object.values(ensureConfig().scopeProviders),
  ];
}

export function registerScopeProvider(identifier, provider) {
  ensureConfig().scopeProviders[identifier] = provider;
}

export function registerScopeProviders(identifierToProviders) {
  Object.entries(identifierToProviders).forEach(([ identifier, provider ]) => {
    registerScopeProvider(identifier, provider);
  });
}
