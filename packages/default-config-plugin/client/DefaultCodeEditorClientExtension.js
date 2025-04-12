import { useEffect } from 'camunda-modeler-plugin-helpers/react';

import { registerAccessors, registerDefaultEditor, registerEditableTypes, registerScopeProvider } from '@camunda-modeler-code-editor/api';
import { FormalExpressionAccessor, ScriptAccessor, ScriptTaskAccessor, TextEditor, ScopeVariablesProvider, ConditionalEvent, ExecutionListener, InputParameter, OutputParameter, ScriptTask, SequenceFlow, TaskListener } from '@camunda-modeler-code-editor/helpers';

export default () => {
  useEffect(() => {
    registerAccessors([
      FormalExpressionAccessor,
      ScriptAccessor,
      ScriptTaskAccessor,
    ]);

    registerEditableTypes([
        ConditionalEvent,
        ExecutionListener,
        InputParameter,
        OutputParameter,
        ScriptTask,
        SequenceFlow,
        TaskListener,
    ]);

    registerScopeProvider(ScopeVariablesProvider);

    registerDefaultEditor(TextEditor);
  }, []);

  return null;
};
