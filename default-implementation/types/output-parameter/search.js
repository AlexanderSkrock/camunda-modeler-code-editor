import { getOutputScripts } from './utils';

export default (element, search) => {
  const outputScripts = getOutputScripts(element) || [];
  return search(element, outputScripts);
};
