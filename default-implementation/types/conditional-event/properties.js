import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getAccessor } from '../../../lib';

import { getConditionalEventCondition } from './utils';
import { entryIdSelector, groupIdSelector } from '../utils';

export default (element, openElementInEditor) => {
  if (!getConditionalEventCondition(element)) {
    return groups => groups;
  }

  return groups => {
    const group = groupIdSelector('CamundaPlatform__Condition')(groups);
    if (group) {
      const entry = entryIdSelector('conditionScriptValue')(group.entries);
      if (entry) {
        entry.component = ConditionalEventCondition;
        entry.isEdited = isTextFieldEntryEdited;
        entry.openElementInEditor = openElementInEditor;
      }
    }
    return groups;
  };
};

function ConditionalEventCondition({ element, openElement }) {
  const translate = useService('translate');
  const condition = getConditionalEventCondition(element);

  return jsxs('div', {
    onClick: () => openElement(element, condition),
    children: [
      TextFieldEntry({
        element,
        id: 'conditionScriptValue',
        label: translate('Script'),
        disabled: true,
        getValue: () => getAccessor(condition).getValue(condition),
        setValue: () => {},
        debounce: func => func,
        description: translate('Click to edit')
      })
    ]
  });
}
