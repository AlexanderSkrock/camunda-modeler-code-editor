import { getOutputScripts } from './utils';

export default (elements, search) => {
  return new Promise((resolve) => {
    const searchables = elements.flatMap(element => {
      const outputScripts = getOutputScripts(element) || [];
      return outputScripts.map(script => ({ element, moddleElement: script }));
    });
    resolve(search(searchables));
  });
};
