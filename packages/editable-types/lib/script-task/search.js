import { getScript } from './utils';

export default (elements, search) => {
  return new Promise((resolve) => {
    const searchables = elements.flatMap(element => {
      const script = getScript(element);
      return script
        ? [ { element, moddleElement: script } ]
        : [];
    });
    resolve(search(searchables));
  });
};
