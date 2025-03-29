import { getConditionalEventCondition, getSequenceFlowConditonExpression } from './utils';

export const toSearchables = (element) => {
  const sequenceFlowConditionExpression = getSequenceFlowConditonExpression(element);
  if (sequenceFlowConditionExpression) {
    return [ sequenceFlowConditionExpression ];
  }

  const conditionalEventCondition = getConditionalEventCondition(element);
  if (conditionalEventCondition) {
    return [ conditionalEventCondition ];
  }

  return [];
};
