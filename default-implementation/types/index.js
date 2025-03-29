import Script, { type as scriptType } from './script';
import ScriptTask, { type as scriptTaskType } from './script-task';
import FormalExpression, { type as formalExpressionType } from './formal-expression';

export default {
  [scriptType]: Script,
  [scriptTaskType]: ScriptTask,
  [formalExpressionType]: FormalExpression,
};
