import { getBusinessObject, getDi } from 'bpmn-js/lib/util/ModelUtil';

export function isSameElement(elementA, elementB) {
  if (!elementA || !elementB) {
    return false;
  }
  return getDi(elementA).id === getDi(elementB).id;
}

export function getType(element) {
  const businessObject = getBusinessObject(element);
  if (businessObject) {
    const descriptor = businessObject.$descriptor;
    if (descriptor) {
      return descriptor.name;
    }
  }
  console.warn('unable to find the model descriptor');
}