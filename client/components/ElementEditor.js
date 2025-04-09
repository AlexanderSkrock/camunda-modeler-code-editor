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
  const language = getAccessor(moddleElement).getLanguage(moddleElement);

  const elementValue = getAccessor(moddleElement).getValue(moddleElement);
  const [ value, setValue ] = useState(elementValue);
  useEffect(() => {
    setValue(elementValue);
  }, [ elementValue ]);

  const [ elementScope, setElementScope ] = useState({});
  useEffect(() => {
    const boundProviders = getScopeProviders().map(provider => provider(element, moddleElement, type));
    const scopeResult = boundProviders.reduce((prevPromise, provider) => {
      return prevPromise.then(prevResult => provider(prevResult));
    }, Promise.resolve({}));

    scopeResult.then(result => setElementScope(result));
  }, [ element, moddleElement, type ]);

  const debouncedPropagateValue = useDebouncedCallback(newValue => {
    const modifier = elementModifier(commandStack);
    getAccessor(moddleElement).setValue(modifier, element, moddleElement, newValue);
  }, 500);

  useEffect(() => {

    // on unmount we need to flush all pending changes
    return () => debouncedPropagateValue.flush();
  }, [ debouncedPropagateValue ]);

  const handleChange = useCallback((newValue) => {
    setValue(newValue);
    debouncedPropagateValue(newValue);
  }, [ debouncedPropagateValue, setValue ]);

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
      onChange={ handleChange }
    />
  );
};
