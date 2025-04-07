import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';

export default {
  getLanguage: (element) => {
    const businessObject = getBusinessObject(element);
    return businessObject.get('scriptFormat');
  },
  getValue: (element) => {
    const businessObject = getBusinessObject(element);
    return businessObject.get('value');
  },
  setValue: (elementModifier, element, moddleElement, value) => {
    elementModifier(element, moddleElement, {
      value: value || ''
    });
  },
};
