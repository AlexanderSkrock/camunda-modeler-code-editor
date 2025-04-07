import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getAccessor } from '../../../lib';

import { getTaskListenerScripts } from './utils';
import { groupIdSelector, entryIdSuffixSelector } from '../utils';

export default (element, openElementInEditor) => {
  const taskListenerScripts = getTaskListenerScripts(element);
  if (!taskListenerScripts && taskListenerScripts.length <= 0) {
    return groups => groups;
  }

  return groups => {
    const group = groupIdSelector('CamundaPlatform__TaskListener')(groups);
    if (group) {
      const entries = group.items.flatMap(item => {
        return entryIdSuffixSelector('scriptValue')(item.entries);
      });
      entries.forEach(entry => {
        entry.component = Script;
        entry.isEdited = isTextFieldEntryEdited;
        entry.openElementInEditor = openElementInEditor;
      });
    }
    return groups;
  };
};

function Script({ element, idPrefix, script, openElementInEditor }) {
  const translate = useService('translate');

  return jsxs('div', {
    onClick: () => openElementInEditor(element, script),
    children: [
      TextFieldEntry({
        element,
        id: idPrefix + 'scriptValue',
        label: translate('Script'),
        disabled: true,
        getValue: () => getAccessor(script).getValue(script),
        setValue: () => {},
        debounce: func => func,
        description: translate('Click to edit')
      })
    ]
  });

}
