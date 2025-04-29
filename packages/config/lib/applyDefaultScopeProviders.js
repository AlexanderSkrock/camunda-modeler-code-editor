import { registerScopeProvider } from '@camunda-modeler-code-editor/api';
import { ScopeVariablesProvider } from '@camunda-modeler-code-editor/scope-providers';

export default () => {
  registerScopeProvider(ScopeVariablesProvider);
};