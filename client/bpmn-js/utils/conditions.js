import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export function getConditionExpression(element) {
  if (isSequenceFlow(element)) {
    const businessObject = getBusinessObject(element);
    return businessObject.get('conditionExpression');
  } else if (isConditionalEvent(element)) {
    const businessObject = getBusinessObject(element);
    const eventDefinitions = businessObject.get('eventDefinitions') || [];
    const definition = eventDefinitions.find(definition => is(definition, 'bpmn:ConditionalEventDefinition'));

    if (definition) {
      return definition.get('condition');
    }
  }
}

export function isConditionElement(element) {
  return isSequenceFlow(element) || isConditionalEvent(element);
}

function isSequenceFlow(element) {
  const businessObject = getBusinessObject(element);
  return is(businessObject, 'bpmn:SequenceFlow');
}

function isConditionalEvent(element) {
  const businessObject = getBusinessObject(element);
  if (!is(businessObject, 'bpmn:Event')) {
    return false;
  }
  const eventDefinitions = businessObject.get('eventDefinitions') || [];
  return eventDefinitions.some(definition => is(definition, 'bpmn:ConditionalEventDefinition'));
}
