import { getConditionalEventCondition, getSequenceFlowConditonExpression } from './utils';

export const toSearchables = (element) => {
  const searchable = [];

  const sequenceFlowConditionExpression = getSequenceFlowConditonExpression(element);
  if (sequenceFlowConditionExpression) {
    searchable.push(sequenceFlowConditionExpression);
  }

  const conditionalEventCondition = getConditionalEventCondition(element);
  if (conditionalEventCondition) {
    searchable.push(conditionalEventCondition);
  }
  return searchable;
};
