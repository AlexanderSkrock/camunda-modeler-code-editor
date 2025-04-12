import { getSequenceFlowConditonExpression } from './utils';

export default (elements, search) => {
  return new Promise((resolve) => {
    const searchables = elements.flatMap(element => {
      const sequenceFlowConditionExpression = getSequenceFlowConditonExpression(element);
      return sequenceFlowConditionExpression
        ? [ { element, moddleElement: sequenceFlowConditionExpression } ]
        : [];
    });
    resolve(search(searchables));
  });
};
