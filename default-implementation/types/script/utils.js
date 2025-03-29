import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export function getScripts(element) {
  const businessObject = getBusinessObject(element);
  const extensionElements = businessObject.get('extensionElements');

  if (extensionElements && extensionElements.values) {
    return extensionElements.values
      .filter(e => is(e, 'camunda:ExecutionListener'))
      .map(executionListener => executionListener.get('script'))
      .filter(script => {
        const resource = script.get('camunda:resource');
        return typeof resource === 'undefined';
      });
  }

  return [];
}