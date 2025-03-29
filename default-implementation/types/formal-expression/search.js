import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export const toSearchables = (element) => {
  if (is(element, 'bpmn:SequenceFlow')) {
    const businessObject = getBusinessObject(element);
    const conditionExpression = businessObject.get('conditionExpression');
    if (conditionExpression) {
      const resource = conditionExpression.get('camunda:resource');
      if (typeof resource === 'undefined') {

        // inline script
        return [ conditionExpression ];
      }
    }
  }
  return [];
};
