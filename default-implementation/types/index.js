import ScriptTask, { type as scriptTaskType } from './script-task';
import FormalExpression, { type as formalExpressionType } from './formal-expression';

export default {
  [scriptTaskType]: ScriptTask,
  [formalExpressionType]: FormalExpression,
};
