import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getValue } from './accessors';
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

export const entryDecorator = (element, entry, openElement) => {
  if (getSequenceFlowConditonExpression(element)) {
    entry.component = SequenceFlowConditionExpression;
    entry.isEdited = isTextFieldEntryEdited;
    entry.openElement = openElement;
  } else if (getConditionalEventCondition(element)) {
    entry.component = ConditionalEventCondition;
    entry.isEdited = isTextFieldEntryEdited;
    entry.openElement = openElement;
  }
};

function SequenceFlowConditionExpression({ element, openElement }) {
  const translate = useService('translate');
  const conditionExpression = getSequenceFlowConditonExpression(element);

  return jsxs('div', {
    onClick: () => openElement(element, conditionExpression),
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

function getSequenceFlowConditonExpression(element) {
  if (is(element, 'bpmn:SequenceFlow')) {
    const businessObject = getBusinessObject(element);
    const conditionExpression = businessObject.get('conditionExpression');

    if (conditionExpression) {
      const resource = conditionExpression.get('camunda:resource');
      if (typeof resource === 'undefined') {
        return conditionExpression;
      }
    }
  }
  return null;
}

function getConditionalEventCondition(element) {
  if (is(element, 'bpmn:Event')) {
    const businessObject = getBusinessObject(element);
    const eventDefinitions = businessObject.get('eventDefinitions') || [];
    const conditionalEventDefinition = eventDefinitions.find(definition => is(definition, 'bpmn:ConditionalEventDefinition'));
    if (conditionalEventDefinition) {
      const condition = conditionalEventDefinition.get('condition');
      const resource = condition.get('camunda:resource');
      if (typeof resource === 'undefined') {
        return condition;
      }
    }
  }
  return null;
}