import * as publicApi from './index';

const {
    getAccessor,
    registerAccessor,
    registerAccessors,
    getEditor,
    registerEditor,
    registerDefaultEditor,
    getScopeProvider,
    getScopeProviders,
    registerScopeProvider,
    registerScopeProviders,
    getEditableType,
    getEditableTypes,
    registerEditableType,
    registerEditableTypes,
    ...additionalExports
} = publicApi;


describe('index', () => {

    it('should expose getAccessor', () => {
        expect(getAccessor).toBeInstanceOf(Function);
    });

    it('should expose registerAccessor', () => {
        expect(registerAccessor).toBeInstanceOf(Function);
    });

    it('should expose registerAccessors', () => {
        expect(registerAccessors).toBeInstanceOf(Function);
    });

    it('should expose getEditor', () => {
        expect(getEditor).toBeInstanceOf(Function);
    });

    it('should expose registerEditor', () => {
        expect(registerEditor).toBeInstanceOf(Function);
    });

    it('should expose registerDefaultEditor', () => {
        expect(registerDefaultEditor).toBeInstanceOf(Function);
    });

    it('should expose getScopeProvider', () => {
        expect(getScopeProvider).toBeInstanceOf(Function);
    });

    it('should expose getScopeProviders', () => {
        expect(getScopeProviders).toBeInstanceOf(Function);
    });

    it('should expose registerScopeProvider', () => {
        expect(registerScopeProvider).toBeInstanceOf(Function);
    });

    it('should expose registerScopeProviders', () => {
        expect(registerScopeProviders).toBeInstanceOf(Function);
    });

    it('should expose getEditableType', () => {
        expect(getEditableType).toBeInstanceOf(Function);
    });

    it('should expose getEditableTypes', () => {
        expect(getEditableTypes).toBeInstanceOf(Function);
    });

    it('should expose registerEditableType', () => {
        expect(registerEditableType).toBeInstanceOf(Function);
    });

    it('should expose registerEditableTypes', () => {
        expect(registerEditableTypes).toBeInstanceOf(Function);
    });

    it('should not expose additional objects', () => {
        const additionalExportNames = Object.keys(additionalExports);
        expect(additionalExportNames).toHaveLength(0);
    })
});
