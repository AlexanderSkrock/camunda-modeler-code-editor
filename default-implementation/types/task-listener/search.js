import { getTaskListenerScripts } from './utils';

export default (element, search) => {
  const taskListenerScripts = getTaskListenerScripts(element) || [];
  return taskListenerScripts.flatMap(script => search(element, [ script ]));
};
