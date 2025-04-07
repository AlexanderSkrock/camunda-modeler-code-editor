import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export function getTaskListenerScripts(element) {
  return getExtensionElements(element)
    .filter(e => is(e, 'camunda:TaskListener'))
    .filter(taskListener => typeof taskListener.get('script') !== 'undefined')
    .map(taskListener => taskListener.get('script'))
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

export class getExecutionListenerScripts {
}
