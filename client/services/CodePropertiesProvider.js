import { getEditableTypes } from '../../lib';

import { OPEN_ELEMENT } from '../utils/events';

export default class CodePropertiesProvider {

  constructor(propertiesPanel, eventBus) {
    this._eventBus = eventBus;
    propertiesPanel.registerProvider(200, this);
  }

  getGroups(element) {
    return groups => {
      const typeProperties = Object.values(getEditableTypes()).map(type => type.properties).filter(p => !!p);

      const openElement = (element, moddleElement) => this._eventBus.fire(OPEN_ELEMENT, { element, moddleElement });

      typeProperties.forEach(({ entrySelector, entryDecorator }) => {
        const entries = entrySelector(element, groups);
        entries.forEach(entry => entryDecorator(element, entry, openElement));
      });

      return groups;
    };
  }
}

CodePropertiesProvider.$inject = [ 'propertiesPanel', 'eventBus' ];
