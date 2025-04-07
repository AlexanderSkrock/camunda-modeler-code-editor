import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export function getConditionalEventCondition(element) {
  if (is(element, 'bpmn:Event')) {
    const businessObject = getBusinessObject(element);
    const eventDefinitions = businessObject.get('eventDefinitions') || [];
    const conditionalEventDefinition = eventDefinitions.find(definition => is(definition, 'bpmn:ConditionalEventDefinition'));
    if (conditionalEventDefinition) {
      const condition = conditionalEventDefinition.get('condition');
      const resource = condition.get('camunda:resource');
      if (typeof resource === 'undefined') {
        return condition;
      }
    }
  }
  return null;
}
