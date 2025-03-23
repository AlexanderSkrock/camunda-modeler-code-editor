import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';
import { useCallback, useEffect } from '@bpmn-io/properties-panel/preact/hooks';
import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { TextFieldEntry } from '@bpmn-io/properties-panel';
import { useService } from 'bpmn-js-properties-panel';

import { useCodeEditorEvents } from '../../../lib';

import { isSameElement } from '../../utils/elements';

export function ConditionalScript(props) {
  const {
    element
  } = props;

  const eventBus = useService('eventBus');
  const commandStack = useService('commandStack');
  const translate = useService('translate');
  const debounce = useService('debounceInput');

  const getValue = () => {
    return getConditionExpression(element).get('body');
  };

  const setValue = value => {
    commandStack.execute('element.updateModdleProperties', {
      element: element,
      moddleElement: getConditionExpression(element),
      properties: {
        'body': value || ''
      }
    });
  };

  const [ openEditor ] = useCodeEditorEvents({
    eventBus,
    priority: 10000,
    closeFilter: ({ element: evtElement }) => isSameElement(element, evtElement),
    onClose: ({ value }) => setValue(value),
    useCallback,
    useEffect,
  });

  return jsxs('div', {
    onClick: () => {
      openEditor({
        element,
        language: getScriptLanguage(element),
        value: getValue(),
      });
    },
    children: [
      TextFieldEntry({
        element,
        id: 'conditionScriptValue',
        label: translate('Script'),
        disabled: true,
        getValue,
        setValue,
        debounce,
        description: translate('Click to edit script')
      })
    ]
  });
}

export function getScriptType(element) {
  const conditionExpression = getConditionExpression(element);
  if (conditionExpression) {
    const resource = conditionExpression.get('camunda:resource');

    if (typeof resource !== 'undefined') {
      return 'resource';
    } else {
      return 'script';
    }
  }
}

export function getScriptLanguage(element) {
  return getConditionExpression(element).get('language');
}

function getConditionExpression(element) {
  const businessObject = getBusinessObject(element);

  if (is(businessObject, 'bpmn:SequenceFlow')) {
    return businessObject.get('conditionExpression');
  } else if (getConditionalEventDefinition(businessObject)) {
    return getConditionalEventDefinition(businessObject).get('condition');
  }
}

function getConditionalEventDefinition(element) {
  if (!is(element, 'bpmn:Event')) {
    return false;
  }

  return getEventDefinition(element, 'bpmn:ConditionalEventDefinition');
}

function getEventDefinition(element, eventType) {
  const businessObject = getBusinessObject(element);
  const eventDefinitions = businessObject.get('eventDefinitions') || [];
  return eventDefinitions.find(definition => is(definition, eventType));
}
