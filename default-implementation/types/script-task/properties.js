import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getValue } from './accessors';
import { entryIdSelector, groupIdSelector } from '../utils';
import { getScript } from './utils';

export const entrySelector = (element, groups) => {
  if (getScript(element)) {
    const group = groupIdSelector('CamundaPlatform__Script')(groups);
    const script = entryIdSelector('scriptValue')(group.entries);
    return [ script ];
  }
  return [];
};

export const entryDecorator = (element, entry, openElementInEditor) => {
  entry.component = Script;
  entry.isEdited = isTextFieldEntryEdited;
  entry.openElementInEditor = openElementInEditor;
};

function Script({ element, idPrefix, openElementInEditor }) {
  const translate = useService('translate');
  const businessObject = getBusinessObject(element);

  return jsxs('div', {
    onClick: () => openElementInEditor(element, businessObject),
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
