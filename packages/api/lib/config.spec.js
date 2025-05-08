import { ensureConfig, resetConfig } from './config';

describe('config', () => {
  afterEach(() => {
    resetConfig();
  });

  describe('ensureConfig', () => {
    test('initially matches default', () => {
      expect(ensureConfig()).toMatchObject({
        defaultEditor: null,
        editors: {},
        accessors: {},
        types: {},
        scopeProviders: {}
      });
    });

    test('persists modifications', () => {
      const dummyEditor = () => null;

      const config = ensureConfig();
      config.defaultEditor = dummyEditor;

      expect(ensureConfig().defaultEditor).toBe(dummyEditor);
    });
  });

  describe('ensureConfig', () => {
    test('reset reverts modifications', () => {
      const initialConfig = { ...ensureConfig() };

      const config = ensureConfig();
      config.defaultEditor = () => null;

      resetConfig();
      expect(ensureConfig()).toMatchObject(initialConfig);
    });
  });
});