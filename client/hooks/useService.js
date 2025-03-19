import { useMemo } from 'camunda-modeler-plugin-helpers/react';

function safeServiceGetter(modeler, serviceName) {
  if (!modeler || !serviceName) {
    return null;
  }
  if (modeler.get) {
    return modeler.get(serviceName);
  } else {
    return modeler['_' + serviceName];
  }
}

export default ({ modeler, service }) => {
  const modelerService = useMemo(() => safeServiceGetter(modeler, service), [ modeler, service ]);
  return [ modelerService ];
};
