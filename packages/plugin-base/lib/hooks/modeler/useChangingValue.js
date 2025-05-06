import { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default ({ initialValue, onChange, debounceTime = 500 }) => {
  const [ currentValue, setCurrentValue ] = useState(initialValue);
  useEffect(() => {
    setCurrentValue(initialValue);
  }, [ initialValue, setCurrentValue ]);

  const debouncedPropagateValue = useDebouncedCallback(onChange, debounceTime);
  useEffect(() => {

    // on unmount we need to flush all pending changes
    return () => debouncedPropagateValue.flush();
  }, [ debouncedPropagateValue ]);

  const handleChange = useCallback((newValue) => {
    setCurrentValue(newValue);
    debouncedPropagateValue(newValue);
  }, [ setCurrentValue, debouncedPropagateValue ]);

  return [ currentValue, handleChange ];
};