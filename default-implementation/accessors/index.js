import FormalExpressionAccessor from './formal-expression';
import ScriptAccessor from './script';
import ScriptTaskAccessor from './script-task';

export default {
  'bpmn:FormalExpression': FormalExpressionAccessor,
  'camunda:Script': ScriptAccessor,
  'bpmn:ScriptTask': ScriptTaskAccessor,
};
