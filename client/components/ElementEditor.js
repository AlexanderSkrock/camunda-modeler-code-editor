// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';
import { useDebouncedCallback } from 'use-debounce';

import { getAccessor, getEditor, getScopeProviders } from '../../lib';

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
  const language = useMemo(() => getAccessor(moddleElement).getLanguage(moddleElement), [ moddleElement ]);
  const value = useMemo(() => getAccessor(moddleElement).getValue(moddleElement), [ moddleElement ]);

  const [ elementScope, setElementScope ] = useState({});
  useEffect(() => {
    const scopeProviders = getScopeProviders();
    Promise.all(scopeProviders.map(provider => provider(element))).then(results => {
      const mergedResult = results.reduce((prev, cur) => ({ ...cur, ...prev }), {});
      setElementScope(mergedResult);
    });
  }, [ element ]);

  const handleChange = useCallback((newValue) => {
    const modifier = elementModifier(commandStack);
    getAccessor(moddleElement).setValue(modifier, element, moddleElement, newValue);
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
