import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export default {
  supportsElement: element => {
    const businessObject = getBusinessObject(element);
    return is(businessObject, 'bpmn:FormalExpression');
  },
  getLanguage: (element) => {
    const businessObject = getBusinessObject(element);
    return businessObject.get('language');
  },
  getValue: (element) => {
    const businessObject = getBusinessObject(element);
    return businessObject.get('body');
  },
  setValue: (elementModifier, element, moddleElement, value) => {
    elementModifier(element, moddleElement, {
      body: value || ''
    });
  },
};
