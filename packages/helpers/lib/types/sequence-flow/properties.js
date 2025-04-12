import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getAccessor } from '@camunda-modeler-code-editor/api';

import { getSequenceFlowConditonExpression } from './utils';
import { entryIdSelector, groupIdSelector } from '../utils';

export default (element, openElementInEditor) => {
  if (!getSequenceFlowConditonExpression(element)) {
    return groups => groups;
  }

  return groups => {
    const group = groupIdSelector('CamundaPlatform__Condition')(groups);
    if (group) {
      const entry = entryIdSelector('conditionScriptValue')(group.entries);
      if (entry) {
        entry.component = SequenceFlowConditionExpression;
        entry.isEdited = isTextFieldEntryEdited;
        entry.openElementInEditor = openElementInEditor;
      }
    }
    return groups;
  };
};

function SequenceFlowConditionExpression({ element, openElementInEditor }) {
  const translate = useService('translate');
  const conditionExpression = getSequenceFlowConditonExpression(element);

  return jsxs('div', {
    onClick: () => openElementInEditor(element, conditionExpression),
    children: [
      TextFieldEntry({
        element,
        id: 'conditionScriptValue',
        label: translate('Script'),
        disabled: true,
        getValue: () => getAccessor(conditionExpression).getValue(conditionExpression),
        setValue: () => {},
        debounce: func => func,
        description: translate('Click to edit')
      })
    ]
  });
}
