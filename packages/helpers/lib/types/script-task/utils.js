import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export function getScript(element) {
  if (is(element, 'bpmn:ScriptTask')) {
    const businessObject = getBusinessObject(element);
    const scriptValue = businessObject.get('script');
    if (typeof scriptValue !== 'undefined') {
      return businessObject;
    }
  }
  return null;
}
