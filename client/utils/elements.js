import { getDi } from 'bpmn-js/lib/util/ModelUtil';

export function isSameElement(elementA, elementB) {
  if (!elementA || !elementB) {
    return false;
  }
  return getDi(elementA).id === getDi(elementB).id;
}
