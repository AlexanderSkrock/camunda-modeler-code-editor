import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export function getExecutionListenerScripts(element) {
  return getExtensionElements(element)
    .filter(e => is(e, 'camunda:ExecutionListener'))
    .filter(taskListener => typeof taskListener.get('script') !== 'undefined')
    .map(executionListener => executionListener.get('script'))
    .filter(script => typeof script.get('camunda:resource') === 'undefined');
}

function getExtensionElements(element) {
  const businessObject = getBusinessObject(element);
  const extensionElements = businessObject.get('extensionElements');

  if (extensionElements) {
    return extensionElements.get('values') || [];
  } else {
    return [];
  }
}
