import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getValue } from './accessors';
import { entryIdSelector, groupIdSelector } from '../utils';

export const entrySelector = (element, groups) => {
    if (is(element, 'bpmn:SequenceFlow')) {
        const businessObject = getBusinessObject(element);
        const conditionExpression = businessObject.get('conditionExpression');

        if (conditionExpression) {
          const resource = conditionExpression.get('camunda:resource');
          if (typeof resource === 'undefined') {

            // no inline script but a resource
            const group = groupIdSelector('CamundaPlatform__Condition')(groups);
            const entry = entryIdSelector('conditionScriptValue')(group.entries);
            return [ entry ];
          }
        }
    }

    return [];
};

export const entryDecorator = (element, entry, openElement) => {
    entry.component = FormalExpression;
    entry.isEdited = isTextFieldEntryEdited;
    entry.openElement = openElement;
};

function FormalExpression({ element, openElement }) {
  const translate = useService('translate');
  const businessObject = getBusinessObject(element)
  const conditionExpression = businessObject.get('conditionExpression');;

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
