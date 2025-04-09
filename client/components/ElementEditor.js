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

export default ({ key, element, moddleElement, type, commandStack }) => {
  const language = useMemo(() => getAccessor(moddleElement).getLanguage(moddleElement), [ moddleElement ]);
  const value = useMemo(() => getAccessor(moddleElement).getValue(moddleElement), [ moddleElement ]);

  const [ elementScope, setElementScope ] = useState({});
  useEffect(() => {
    const boundProviders = getScopeProviders().map(provider => provider(element, moddleElement, type));
    const scopeResult = boundProviders.reduce((prevPromise, provider) => {
      return prevPromise.then(prevResult => provider(prevResult));
    }, Promise.resolve({}));

    scopeResult.then(result => setElementScope(result));
  }, [ element, moddleElement, type ]);

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
      key={ key }
      element={ element }
      moddleElement={ moddleElement }
      type={ type }
      language={ language }
      scope={ elementScope }
      value={ value }
      onChange={ debouncedHandleChange }
    />
  );
};
