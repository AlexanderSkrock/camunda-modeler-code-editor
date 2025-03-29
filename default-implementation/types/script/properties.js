import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getScripts } from './utils';
import { getValue } from './accessors';
import { groupIdSelector, entryIdSuffixSelector } from '../utils';

export const entrySelector = (element, groups) => {
  const scripts = getScripts(element);
  if (scripts && scripts.length > 0) {
    const group = groupIdSelector('CamundaPlatform__ExecutionListener')(groups);

    return group.items.flatMap(item => {
      return entryIdSuffixSelector('scriptValue')(item.entries);
    });
  }
  return [];
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
