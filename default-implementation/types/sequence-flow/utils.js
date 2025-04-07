import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export function getSequenceFlowConditonExpression(element) {
  if (is(element, 'bpmn:SequenceFlow')) {
    const businessObject = getBusinessObject(element);
    const conditionExpression = businessObject.get('conditionExpression');

    if (conditionExpression) {
      const language = conditionExpression.get('language');
      if (typeof language !== 'undefined') {
        const resource = conditionExpression.get('camunda:resource');
        if (typeof resource === 'undefined') {
          return conditionExpression;
        }
      }
    }
  }
  return null;
}
