import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';

export const getLanguage = (element) => {
  const businessObject = getBusinessObject(element);
  return businessObject.get('scriptFormat');
};

export const getValue = (element) => {
  const businessObject = getBusinessObject(element);
  return businessObject.get('script');
};

export const setValue = (elementModifier, value) => {
  elementModifier({
    script: value || ''
  });
};
