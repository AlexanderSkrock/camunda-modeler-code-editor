import { getScript } from './utils';

export const toSearchables = (element) => {
  const script = getScript(element);
  if (script) {
    return [ script ];
  }
  return [];
};
