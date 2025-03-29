import { getExecutionListenerScripts, getInputScripts, getOutputScripts, getTaskListenerScripts } from './utils';

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

  const outputScripts = getOutputScripts(element);
  if (outputScripts && outputScripts.length > 0) {
    scripts.push(...outputScripts);
  }

  return scripts;
};
