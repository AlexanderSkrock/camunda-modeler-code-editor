import { getEditableTypes } from '../../lib';

export default class CodePropertiesProvider {

  constructor(propertiesPanel) {
    propertiesPanel.registerProvider(200, this);
  }

  getGroups(element) {
    return groups => {
      const typeProperties = Object.values(getEditableTypes()).map(type => type.properties).filter(p => !!p);

      typeProperties.forEach(({ entrySelector, entryDecorator }) => {
        const entries = entrySelector(element, groups);
        entries.forEach(entry => entryDecorator(element, entry));
      });

      return groups;
    };
  }
}

CodePropertiesProvider.$inject = [ 'propertiesPanel' ];
