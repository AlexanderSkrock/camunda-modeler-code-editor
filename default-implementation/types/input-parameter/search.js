import { getInputScripts } from './utils';

export default (elements, search) => {
  return new Promise((resolve) => {
    const searchables = elements.flatMap(element => {
      const inputScripts = getInputScripts(element) || [];
      return inputScripts.map(script => ({ element, moddleElement: script }));
    });
    resolve(search(searchables));
  });
};
