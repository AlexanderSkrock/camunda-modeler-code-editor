import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export function getExecutionListenerScripts(element) {
  return getExtensionElements(element)
  .filter(e => is(e, 'camunda:ExecutionListener'))
  .filter(taskListener => typeof taskListener.get('script') !== 'undefined')
  .map(executionListener => executionListener.get('script'))
  .filter(script => typeof script.get('value') !== 'undefined');
}

export function getTaskListenerScripts(element) {
  return getExtensionElements(element)
  .filter(e => is(e, 'camunda:TaskListener'))
  .filter(taskListener => typeof taskListener.get('script') !== 'undefined')
  .map(taskListener => taskListener.get('script'))
  .filter(script => typeof script.get('value') !== 'undefined');
}

function getExtensionElements(element) {
  const businessObject = getBusinessObject(element);
  const extensionElements = businessObject.get('extensionElements');

  if (extensionElements && extensionElements.values) {
    return extensionElements.values;
  } else {
    return [];
  }
}