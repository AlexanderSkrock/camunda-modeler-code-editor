import { ensureConfig } from './config';

export function getScopeProvider() {
  return ensureConfig().scopeProvider;
}

export function registerScopeProvider(provider) {
  ensureConfig().scopeProvider = provider;
}
