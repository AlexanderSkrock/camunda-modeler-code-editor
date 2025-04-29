import { registerAccessors } from '@camunda-modeler-code-editor/api';
import { FormalExpressionAccessor, ScriptAccessor, ScriptTaskAccessor } from '@camunda-modeler-code-editor/accessors';

export default () => {
  registerAccessors([
    FormalExpressionAccessor,
    ScriptAccessor,
    ScriptTaskAccessor,
  ]);
};