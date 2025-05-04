import React, { useMemo } from 'camunda-modeler-plugin-helpers/react';

import { getLabel } from 'bpmn-js/lib/util/LabelUtil';

import { getAccessor, getEditableType } from '@camunda-modeler-code-editor/api';

import { Button, StructuredListCell, StructuredListRow } from '../../vendor/@carbon/react';
import { Add } from '../../vendor/@carbon/icons-react';

const ElementSearchResultItem = ({ item: { element, moddleElement, type }, onSelect, disabled }) => {
  const label = useMemo(() => getLabel(element) || element.id, [ element ]);
  const language = useMemo(() => getAccessor(moddleElement).getLanguage(moddleElement), [ moddleElement ]);
  const typeName = useMemo(() => getEditableType(type).name, [ type ]);
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

export default ElementSearchResultItem;
