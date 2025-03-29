import { getExecutionListenerScripts, getInputScripts, getTaskListenerScripts } from './utils';

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

  const inputScripts = getInputScripts(element);
  if (inputScripts && inputScripts.length > 0) {
    scripts.push(...inputScripts);
  }

  return scripts;
};
