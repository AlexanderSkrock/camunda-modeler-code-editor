import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export default {
  id: 'bpmn:FormalExpression',
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
