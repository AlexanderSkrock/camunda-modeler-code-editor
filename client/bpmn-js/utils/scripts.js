import { is } from 'bpmn-js/lib/util/ModelUtil';

export function isScript(element) {
  return is(element, 'camunda:Script');
}

export function getScriptProperty(element) {
  return isScript(element) ? 'value' : 'script';
}
