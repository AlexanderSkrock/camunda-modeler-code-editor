import { getInputScripts } from './utils';

export default (element, search) => {
  const inputScripts = getInputScripts(element) || [];
  return search(element, inputScripts);
};
