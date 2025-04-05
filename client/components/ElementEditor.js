// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';
import { useDebouncedCallback } from 'use-debounce';

import { getEditableType, getEditor, getScopeProvider } from '../../lib';

import { getType } from '../utils/elements';

const elementModifier = commandStack => (element, moddleElement, properties) => {
  if (commandStack) {
    commandStack.execute('element.updateModdleProperties', {
      element,
      moddleElement,
      properties,
    });
  }
};

export default ({ element, moddleElement, commandStack }) => {
  const typeDefinition = useMemo(() => getEditableType(getType(moddleElement)), [ moddleElement ]);

  const language = useMemo(() => typeDefinition.accessors.getLanguage(moddleElement), [ typeDefinition, moddleElement ]);
  const value = useMemo(() => typeDefinition.accessors.getValue(moddleElement), [ typeDefinition, moddleElement ]);

  const [ elementScope, setElementScope ] = useState({});
  useEffect(() => {
    const scopeProvider = getScopeProvider();
    scopeProvider(element).then(setElementScope);
  }, [ element, getScopeProvider() ]);

  const handleChange = useCallback((newValue) => {
    const modifier = elementModifier(commandStack);
    typeDefinition.accessors.setValue(modifier, element, moddleElement, newValue);
  }, [ commandStack, element, moddleElement ]);

  const debouncedHandleChange = useDebouncedCallback(handleChange, 500);

  useEffect(() => {

    // on unmount we need to flush all pending changes
    return () => debouncedHandleChange.flush();
  }, [ debouncedHandleChange ]);

  const EditorComponent = useMemo(() => getEditor(language), language);

  return (
    <EditorComponent
      element={ element }
      moddleElement={ moddleElement }
      language={ language }
      scope={ elementScope }
      value={ value }
      onChange={ debouncedHandleChange }
    />
  );
};
