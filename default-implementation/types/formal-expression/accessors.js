import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';

export const getLanguage = (element) => {
  const businessObject = getBusinessObject(element);
  return businessObject.get('language');
};

export const getValue = (element) => {
  const businessObject = getBusinessObject(element);
  return businessObject.get('body');
};

export const setValue = (elementModifier, element, moddleElement, value) => {
  elementModifier(element, moddleElement, {
    body: value || ''
  });
};
