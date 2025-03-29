import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getExecutionListenerScripts, getTaskListenerScripts } from './utils';
import { getValue } from './accessors';
import { groupIdSelector, entryIdSuffixSelector } from '../utils';

export const entrySelector = (element, groups) => {
  const entries = [];

  const executionListenerScripts = getExecutionListenerScripts(element);
  if (executionListenerScripts && executionListenerScripts.length > 0) {
    const group = groupIdSelector('CamundaPlatform__ExecutionListener')(groups);
    const scriptEntries = group.items.flatMap(item => {
      return entryIdSuffixSelector('scriptValue')(item.entries);
    });
    entries.push(...scriptEntries);
  }

  const taskListenerScripts = getTaskListenerScripts(element);
  if (taskListenerScripts && taskListenerScripts.length > 0) {
    const group = groupIdSelector('CamundaPlatform__TaskListener')(groups);
    const scriptEntries = group.items.flatMap(item => {
      return entryIdSuffixSelector('scriptValue')(item.entries);
    });
    entries.push(...scriptEntries);
  }

  return entries;
};

export const entryDecorator = (element, entry, openElementInEditor) => {
  entry.component = Script;
  entry.isEdited = isTextFieldEntryEdited;
  entry.openElementInEditor = openElementInEditor;
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
        getValue: () => getValue(script),
        setValue: () => {},
        debounce: func => func,
        description: translate('Click to edit')
      })
    ]
  });

}
