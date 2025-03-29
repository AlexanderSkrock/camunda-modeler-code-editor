import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getValue } from './accessors';
import { getConditionalEventCondition, getSequenceFlowConditonExpression } from './utils';
import { entryIdSelector, groupIdSelector } from '../utils';

export const entrySelector = (element, groups) => {
  if (getSequenceFlowConditonExpression(element)) {
    const group = groupIdSelector('CamundaPlatform__Condition')(groups);
    const entry = entryIdSelector('conditionScriptValue')(group.entries);
    return [ entry ];
  }

  if (getConditionalEventCondition(element)) {
    const group = groupIdSelector('CamundaPlatform__Condition')(groups);
    const entry = entryIdSelector('conditionScriptValue')(group.entries);
    return [ entry ];
  }

  return [];
};

export const entryDecorator = (element, entry, openElementInEditor) => {
  if (getSequenceFlowConditonExpression(element)) {
    entry.component = SequenceFlowConditionExpression;
    entry.isEdited = isTextFieldEntryEdited;
    entry.openElementInEditor = openElementInEditor;
  } else if (getConditionalEventCondition(element)) {
    entry.component = ConditionalEventCondition;
    entry.isEdited = isTextFieldEntryEdited;
    entry.openElementInEditor = openElementInEditor;
  }
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
        getValue: () => getValue(conditionExpression),
        setValue: () => {},
        debounce: func => func,
        description: translate('Click to edit')
      })
    ]
  });
}

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
        getValue: () => getValue(condition),
        setValue: () => {},
        debounce: func => func,
        description: translate('Click to edit')
      })
    ]
  });
}