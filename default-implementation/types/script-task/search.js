import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

import { getValue } from './accessors';

export const toSearchables = (element) => {
  if (is(element, 'bpmn:ScriptTask')) {
    const businessObject = getBusinessObject(element);
    const scriptValue = getValue(businessObject);
    if (typeof scriptValue !== 'undefined') {
      return [ businessObject ];
    }
  }
  return [];
};
