import { ensureConfig } from './config';

export function registerEditableType(type, {

  // Options around the properties panel
  properties: {

    // Selector that retrieves all entry from the given groups that should be decorated
    entrySelector,

    // Decorator that can modify the ui component
    // in most cases you'll overwrite the component or the isEdited properties
    entryDecorator,
  },

  // Options around the search implementation
  search: {

    // Determines all searchable moddle elements for a given element
    toSearchables,
  },

  accessors: {

    // A function that takes the moddle element and retrieves the current language
    getLanguage,


    // A function that takes the moddle element and retrieves the current value
    getValue,

    // A function that takes the element, the specific moddle element and the new value.
    // This function will handle updates to the underlying model.
    setValue,
  }
}) {
  ensureConfig().types[type] = {
    accessors: {
      getLanguage,
      getValue,
      setValue,
    },
    properties: {
      entrySelector,
      entryDecorator,
    },
    search: {
      toSearchables,
    },
  };
}
