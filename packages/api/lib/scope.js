import { ensureConfig } from './config';


export function getScopeProvider(identifier) {
  return ensureConfig().scopeProviders[identifier];
}

export function getScopeProviders() {
  return [
    ...Object.values(ensureConfig().scopeProviders),
  ];
}

export function registerScopeProvider(provider) {
  ensureConfig().scopeProviders[provider.id] = provider;
}

export function registerScopeProviders(providers) {
  providers.forEach(registerScopeProvider);
}
