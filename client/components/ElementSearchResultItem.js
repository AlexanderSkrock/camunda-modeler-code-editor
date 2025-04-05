// eslint-disable-next-line no-unused-vars
import React, { useMemo } from 'camunda-modeler-plugin-helpers/react';

import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

import {
  Button,
  StructuredListCell,
  StructuredListRow,
} from '@carbon/react';
import { Add } from '@carbon/icons-react';

import { getEditableType } from '../../lib';

import { getType } from '../utils/elements';

export default ({ item: { element, moddleElement }, onSelect, disabled }) => {
  const label = useMemo(() => getLabel(element) || element.id, [ element ]);
  const typeName = useMemo(() => getType(moddleElement), [ moddleElement ]);
  const language = useMemo(() => {
    const type = getEditableType(typeName);
    return type.accessors.getLanguage(moddleElement);
  }, [ typeName, moddleElement ]);
  return (
    <StructuredListRow>
      <StructuredListCell>
        { label }
      </StructuredListCell>
      <StructuredListCell>
        { typeName }
      </StructuredListCell>
      <StructuredListCell>
        { language }
      </StructuredListCell>
      <StructuredListCell>
        <Button renderIcon={ Add } hasIconOnly disabled={ disabled } onClick={ onSelect } />
      </StructuredListCell>
    </StructuredListRow>
  );
};