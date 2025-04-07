import { getScript } from './utils';

export default (element, search) => {
  const script = getScript(element);
  return script ? search(element, [ script ]) : [];
};
