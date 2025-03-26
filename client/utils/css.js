const PREFIX = 'code-editor';
export const MODAL_CLASS_NAME = PREFIX + '-modal';
export const SEARCH_CLASS_NAME = PREFIX + '-search';

export const selectId = id => `#${id}`;
export const selectClass = className => `.${className}`;
export const selectNested = (...selectors) => selectors.join(' > ');
