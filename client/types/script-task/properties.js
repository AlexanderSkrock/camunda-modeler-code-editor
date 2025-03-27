import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { isTextFieldEntryEdited } from '@bpmn-io/properties-panel';

import { Script } from '../../bpmn-js/props/ScriptProps';
import { entryIdSelector, groupIdSelector } from '../utils/properties';

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

export const entryDecorator = entry => {
  entry.component = Script;
  entry.isEdited = isTextFieldEntryEdited;
};
