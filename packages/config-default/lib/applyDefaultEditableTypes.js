import { registerEditableTypes } from '@camunda-modeler-code-editor/api';
import { ConditionalEvent, ExecutionListener, InputParameter, OutputParameter, ScriptTask, SequenceFlow, TaskListener } from '@camunda-modeler-code-editor/editable-types';

export default () => {
  registerEditableTypes([
    ConditionalEvent,
    ExecutionListener,
    InputParameter,
    OutputParameter,
    ScriptTask,
    SequenceFlow,
    TaskListener,
  ]);
};