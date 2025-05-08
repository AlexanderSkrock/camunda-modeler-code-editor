import { getConfigValue, setConfigValue, resetConfig } from './config';

describe('config', () => {
  afterEach(resetConfig);

  test('should return undefined for unknown key', () => {
    const value = getConfigValue('unknown key');
    expect(value).toBeUndefined();
  });

  test('returns undefined after reset', () => {
    setConfigValue('known key', 'value');
    resetConfig();

    const value = getConfigValue('known key');
    expect(value).toBeUndefined();
  });

  test('should return default value for unknown key', () => {
    const value = getConfigValue('unknown key', 'default value');
    expect(value).toBe('default value');
  });

  test('should return value for known key', () => {
    setConfigValue('known key', 'value');

    const value = getConfigValue('known key');
    expect(value).toBe('value');
  });

  test('should ignore default value for known key', () => {
    setConfigValue('known key', 'value');

    const value = getConfigValue('known key', 'default value');
    expect(value).toBe('value');
  });

  test('should return most recent value for known key', () => {
    setConfigValue('known key', 'value');
    setConfigValue('known key', 'new value');

    const value = getConfigValue('known key');
    expect(value).toBe('new value');
  });

  test('should allow modification functions as value', () => {
    setConfigValue('known key', (current = []) => [ ...current, 'A' ]);
    setConfigValue('known key', (current = []) => [ ...current, 'B' ]);

    const value = getConfigValue('known key', 'default value');
    expect(value).toContain('A');
    expect(value).toContain('B');
  });
});