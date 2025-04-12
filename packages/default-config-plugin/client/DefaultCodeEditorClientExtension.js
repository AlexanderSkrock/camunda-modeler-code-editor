import { useEffect } from 'camunda-modeler-plugin-helpers/react';

import { registerAccessors, registerDefaultEditor, registerEditableTypes, registerScopeProvider } from '@camunda-modeler-code-editor/api';
import { FormalExpressionAccessor, ScriptAccessor, ScriptTaskAccessor } from '@camunda-modeler-code-editor/accessors';
import { ConditionalEvent, ExecutionListener, InputParameter, OutputParameter, ScriptTask, SequenceFlow, TaskListener } from '@camunda-modeler-code-editor/editable-types';
import { TextEditor } from '@camunda-modeler-code-editor/editors';
import { ScopeVariablesProvider } from '@camunda-modeler-code-editor/scope-providers';

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
