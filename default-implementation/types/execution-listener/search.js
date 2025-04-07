import { getExecutionListenerScripts } from './utils';

export default (element, search) => {
  const executionListenerScripts = getExecutionListenerScripts(element) || [];
  return search(element, executionListenerScripts);
};
