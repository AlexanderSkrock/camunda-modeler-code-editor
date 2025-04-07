import { getConditionalEventCondition } from './utils';

export default (element, search) => {
  const conditionalEventCondition = getConditionalEventCondition(element);
  return conditionalEventCondition ? search(element, [ conditionalEventCondition ]) : [];
};
