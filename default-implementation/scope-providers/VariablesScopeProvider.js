import { getBusinessObject, is } from 'bpmn-js/lib/util/ModelUtil';
import { getVariablesForScope } from '@bpmn-io/extract-process-variables';

export default (element) => async (scope) => {
  const variables = await getScopeVariables(element);
  const mergedVariables = scope.variables ? [ ...variables, ...scope.variables ] : variables;

  return {
    ...scope,
    variables: unique(mergedVariables),
  };
};

async function getScopeVariables(element) {

  // implementation reference: https://github.com/bpmn-io/bpmn-js-properties-panel/blob/main/src/provider/camunda-platform/properties/ProcessVariablesProps.js
  const businessObject = getBusinessObject(element);
  const rootElement = getRootElement(businessObject);
  const scope = getScope(element);

  const variables = await getVariablesForScope(scope, rootElement);
  return variables.map(variable => variable.name);
}

function getRootElement(element) {
  const businessObject = getBusinessObject(element);

  if (is(businessObject, 'bpmn:Participant')) {
    return businessObject.processRef;
  }

  if (is(businessObject, 'bpmn:Process')) {
    return businessObject;
  }

  let parent = businessObject;

  while (parent.$parent && !is(parent, 'bpmn:Process')) {
    parent = parent.$parent;
  }

  return parent;
}

function getScope(element) {
  const bo = getBusinessObject(element);

  if (is(element, 'bpmn:Participant')) {
    return bo.processRef.id;
  }

  return bo.id;
}

function unique(array) {
  return [ ...new Set(array) ];
}