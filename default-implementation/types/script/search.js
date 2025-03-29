import { getExecutionListenerScripts, getTaskListenerScripts } from './utils';

export const toSearchables = (element) => {
  const scripts = [];
 
  const executionListenerScripts = getExecutionListenerScripts(element);
  if (executionListenerScripts && executionListenerScripts.length > 0) {
    scripts.push(...executionListenerScripts);
  }

  const taskListenerScripts = getTaskListenerScripts(element);
  if (taskListenerScripts && taskListenerScripts.length > 0) {
    scripts.push(...taskListenerScripts);
  }

  return scripts;
};
