import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';

export default {
  supportsElement: element => {
    const businessObject = getBusinessObject(element);
    return is(businessObject, 'bpmn:ScriptTask');
  },
  getLanguage: (element) => {
    const businessObject = getBusinessObject(element);
    return businessObject.get('scriptFormat');
  },
  getValue: (element) => {
    const businessObject = getBusinessObject(element);
    return businessObject.get('script');
  },
  setValue: (elementModifier, element, moddleElement, value) => {
    elementModifier(element, moddleElement, {
      script: value || ''
    });
  },
};
