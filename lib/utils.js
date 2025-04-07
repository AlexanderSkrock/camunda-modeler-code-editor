import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';

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
