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

export default ({ modeler, services }) => {
  return useMemo(() => {
    return services.map(service => safeServiceGetter(modeler, service));
  }, [ modeler, services ]);
};
