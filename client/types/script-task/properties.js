import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getValue } from './accessors';
import { entryIdSelector, groupIdSelector } from '../utils';

export const entrySelector = (element, groups) => {
  const businessObject = getBusinessObject(element);
  const scriptValue = businessObject.get('script');
  if (typeof scriptValue === 'undefined') {

    // no inline script but a resource
    return [];
  }

  const group = groupIdSelector('CamundaPlatform__Script')(groups);
  const script = entryIdSelector('scriptValue')(group.entries);
  return [ script ];
};

export const entryDecorator = (element, entry, openElement) => {
  entry.component = Script;
  entry.isEdited = isTextFieldEntryEdited;
  entry.openElement = openElement;
};

function Script({ element, idPrefix, openElement }) {
  const translate = useService('translate');
  const businessObject = getBusinessObject(element);

  return jsxs('div', {
    onClick: () => openElement(element, businessObject),
    children: [
      TextFieldEntry({
        element,
        id: idPrefix + 'scriptValue',
        label: translate('Script'),
        disabled: true,
        getValue: () => getValue(businessObject),
        setValue: () => {},
        debounce: func => func,
        description: translate('Click to edit')
      })
    ]
  });

}
