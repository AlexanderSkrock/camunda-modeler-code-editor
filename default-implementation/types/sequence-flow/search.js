import { getSequenceFlowConditonExpression } from './utils';

export default (element, search) => {
  const sequenceFlowConditionExpression = getSequenceFlowConditonExpression(element);
  return sequenceFlowConditionExpression ? search(element, [ sequenceFlowConditionExpression ]) : [];
};
