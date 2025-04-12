import { getExecutionListenerScripts } from './utils';

export default (elements, search) => {
  return new Promise((resolve) => {
    const searchables = elements.flatMap(element => {
      const executionListenerScripts = getExecutionListenerScripts(element) || [];
      return executionListenerScripts.map(script => ({ element, moddleElement: script }));
    });
    resolve(search(searchables));
  });
};
