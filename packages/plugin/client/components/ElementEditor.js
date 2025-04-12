import React, { useCallback, useEffect, useMemo, useState } from 'camunda-modeler-plugin-helpers/react';

import { getAccessor, getEditor, getScopeProviders } from '@camunda-modeler-code-editor/api';

import { useChangingValue } from '../hooks/modeler';

const elementModifier = commandStack => (element, moddleElement, properties) => {
  if (commandStack) {
    commandStack.execute('element.updateModdleProperties', {
      element,
      moddleElement,
      properties,
    });
  }
};

const ElementEditor = ({ name, element, moddleElement, type, commandStack }) => {
  const [ elementScope, setElementScope ] = useState({});
  useEffect(() => {
    const boundProviders = getScopeProviders().map(provider => provider(element, moddleElement, type));
    const scopeResult = boundProviders.reduce((prevPromise, provider) => {
      return prevPromise.then(prevResult => provider(prevResult));
    }, Promise.resolve({}));

    scopeResult.then(result => setElementScope(result));
  }, [ element, moddleElement, type ]);

  const language = getAccessor(moddleElement).getLanguage(moddleElement);

  const propagateValue = useCallback(newValue => {
    const modifier = elementModifier(commandStack);
    getAccessor(moddleElement).setValue(modifier, element, moddleElement, newValue);
  }, [ commandStack, element, moddleElement ]);

  const [ value, handleValueChange ] = useChangingValue({
    initialValue: getAccessor(moddleElement).getValue(moddleElement),
    onChange: propagateValue,
  });

  const EditorComponent = useMemo(() => getEditor(language), language);

  return (
    <EditorComponent
      name={ name }
      element={ element }
      moddleElement={ moddleElement }
      type={ type }
      scope={ elementScope }
      language={ language }
      value={ value }
      onValueChange={ handleValueChange }
    />
  );
};

export default ElementEditor;
