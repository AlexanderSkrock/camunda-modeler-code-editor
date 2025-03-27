import { jsxs } from '@bpmn-io/properties-panel/preact/jsx-runtime';
import { useService } from 'bpmn-js-properties-panel';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { isTextFieldEntryEdited, TextFieldEntry } from '@bpmn-io/properties-panel';

import { getValue } from './accessors';
import { entryIdSelector, groupIdSelector } from '../utils';
import { OPEN_SCRIPT } from '../../utils/events';

export const entrySelector = (element, groups) => {
  const businessObject = getBusinessObject(element);
  const scriptValue = businessObject.get('script');
  if (typeof scriptValue === 'undefined') {

    // no inline script but a resource
    return [];
  }

  const group = groupIdSelector('CamundaPlatform__Script')(groups);
  const script = entryIdSelector('scriptValue')(group.entries);
  return [ script ];
};

export const entryDecorator = (element, entry) => {
  entry.component = Script;
  entry.isEdited = isTextFieldEntryEdited;
};

function Script({ element, idPrefix }) {
  const eventBus = useService('eventBus');
  const translate = useService('translate');

  const businessObject = getBusinessObject(element);

  const onClick = () => {

    // we need to have open script available in the api surface
    eventBus.fire(OPEN_SCRIPT, {
      element,
      moddleElement: businessObject,
    });
  };

  return jsxs('div', {
    onClick,
    children: [
      TextFieldEntry({
        element,
        id: idPrefix + 'scriptValue',
        label: translate('Script'),
        disabled: true,
        getValue: () => getValue(businessObject),
        setValue: () => {},
        debounce: func => func,
        description: translate('Click to edit')
      })
    ]
  });

}
