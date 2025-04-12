import { getConditionalEventCondition } from './utils';

export default (elements, search) => {
  return new Promise((resolve) => {
    const searchables = elements.flatMap(element => {
      const conditionalEventCondition = getConditionalEventCondition(element);
      return conditionalEventCondition
        ? [ { element, moddleElement: conditionalEventCondition } ]
        : [];
    });
    resolve(search(searchables));
  });
};
