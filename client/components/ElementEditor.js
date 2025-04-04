// eslint-disable-next-line no-unused-vars
import React, { useMemo } from 'camunda-modeler-plugin-helpers/react';

import { getEditor } from '../../lib';

export default ({ element, moddleElement, language, scope, value, onChange }) => {
  const EditorComponent = useMemo(() => getEditor(language), language);

  return (
    <EditorComponent
      element={ element }
      moddleElement={ moddleElement }
      language={ language }
      scope={ scope }
      value={ value }
      onChange={ onChange }
    />
  );
};
