import { UPDATE_SCRIPT } from '../utils/events';
import { getConditionExpression, isConditionElement } from './utils/conditions';
import { getScriptProperty } from './utils/scripts';

export default class ScriptValueUpdater {

  static $inject = [
    'commandStack',
    'eventBus',
  ];

  constructor(commandStack, eventBus) {
    this._commandStack = commandStack;
    eventBus.on(UPDATE_SCRIPT, ({ element, moddleElement, value }) => {
      if (isConditionElement(element)) {
        this.updateConditionalScript({ element, value });
      } else {
        this.updateScript({ element, moddleElement, value });
      }
    });
  }

  updateConditionalScript = ({ element, value }) => {
    this._commandStack.execute('element.updateModdleProperties', {
      element,
      moddleElement: getConditionExpression(element),
      properties: {
        body: value || ''
      }
    });
  };

  updateScript = ({ element, moddleElement, value }) => {
    const scriptProperty = getScriptProperty(moddleElement);

    this._commandStack.execute('element.updateModdleProperties', {
      element,
      moddleElement,
      properties: {
        [scriptProperty]: value || ''
      }
    });
  };
}
