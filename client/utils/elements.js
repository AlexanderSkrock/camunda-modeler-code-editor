import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

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

export function getRootElement(element) {
  const businessObject = getBusinessObject(element);

  if (is(businessObject, 'bpmn:Participant')) {
    return businessObject.processRef;
  }

  if (is(businessObject, 'bpmn:Process')) {
    return businessObject;
  }

  let parent = businessObject;

  while (parent.$parent && !is(parent, 'bpmn:Process')) {
    parent = parent.$parent;
  }

  return parent;
}

export function getScope(element) {
  const bo = getBusinessObject(element);

  if (is(element, 'bpmn:Participant')) {
    return bo.processRef.id;
  }

  return bo.id;
}
