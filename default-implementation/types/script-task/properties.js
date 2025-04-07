import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getAccessor } from '../../../lib';

import { entryIdSelector, groupIdSelector } from '../utils';
import { getScript } from './utils';

export default (element, openElementInEditor) => {
  if (!getScript(element)) {
    return groups => groups;
  }

  return groups => {
    const group = groupIdSelector('CamundaPlatform__Script')(groups);
    if (group) {
      const entry = entryIdSelector('scriptValue')(group.entries);
      if (entry) {
        entry.component = Script;
        entry.isEdited = isTextFieldEntryEdited;
        entry.openElementInEditor = openElementInEditor;
      }
    }
    return groups;
  };
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
        getValue: () => getAccessor(businessObject).getValue(businessObject),
        setValue: () => {},
        debounce: func => func,
        description: translate('Click to edit')
      })
    ]
  });

}
