import { getTaskListenerScripts } from './utils';

export default (elements, search) => {
  return new Promise((resolve) => {
    const searchables = elements.flatMap(element => {
      const taskListenerScripts = getTaskListenerScripts(element) || [];
      return taskListenerScripts.map(script => ({ element, moddleElement: script }));
    });
    resolve(search(searchables));
  });
};
