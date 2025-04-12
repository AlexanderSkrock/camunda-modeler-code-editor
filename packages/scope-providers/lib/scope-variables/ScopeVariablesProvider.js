import { getVariableNamesForScope, SCOPE_VARIABLES_SEGMENT } from './utils';

const ScopeVariablesProvider = (element) => async (scope) => {
  const variables = await getVariableNamesForScope(element);

  return {
    ...scope,
    [SCOPE_VARIABLES_SEGMENT]: variables,
  };
};

ScopeVariablesProvider.id = 'scope-variables-provider';

export default ScopeVariablesProvider;

