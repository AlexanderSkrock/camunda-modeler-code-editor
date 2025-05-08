import { getConfigValue, setConfigValue } from './config';

const SCOPE_PROVIDERS_CONFIG_PROPERTY = 'scopeProviders';

export function getScopeProvider(identifier) {
  return getConfigValue(SCOPE_PROVIDERS_CONFIG_PROPERTY, {})[identifier];
}

export function getScopeProviders() {
  return Object.values(getConfigValue(SCOPE_PROVIDERS_CONFIG_PROPERTY, {}));
}

export function registerScopeProvider(provider) {
  setConfigValue(SCOPE_PROVIDERS_CONFIG_PROPERTY, (currentProviders) => ({
    ...currentProviders,
    [provider.id]: provider,
  }));
}

export function registerScopeProviders(providers) {
  providers.forEach(registerScopeProvider);
}
