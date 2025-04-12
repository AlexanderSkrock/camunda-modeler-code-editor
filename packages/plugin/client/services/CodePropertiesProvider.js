import { getEditableTypes } from '@camunda-modeler-code-editor/api';

import { OPEN_ELEMENT } from '../utils/events';

export default class CodePropertiesProvider {

  constructor(propertiesPanel, eventBus) {
    this._eventBus = eventBus;
    propertiesPanel.registerProvider(200, this);
  }

  getGroups(element) {
    const openElement = (element, moddleElement, type) => this._eventBus.fire(OPEN_ELEMENT, { element, moddleElement, elementType: type });

    const contextBoundProviders = Object.values(getEditableTypes())
      .filter(type => type.properties)
      .map(type => {
        const openTypeElement = (element, moddleElement) => openElement(element, moddleElement, type.id);
        return type.properties(element, openTypeElement);
      });

    return groups => contextBoundProviders.reduce((groups, provider) => provider(groups), groups);
  }
}

CodePropertiesProvider.$inject = [ 'propertiesPanel', 'eventBus' ];
