import { getScripts } from './utils';

export const toSearchables = (element) => {
  const scripts = getScripts(element);
  if (scripts && scripts.length > 0) {
    return scripts;
  }
  return [];
};
