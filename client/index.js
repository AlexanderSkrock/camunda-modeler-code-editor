import {
    registerBpmnJSPlugin,
    registerClientExtension,
} from 'camunda-modeler-plugin-helpers';

import CodeEditorExtension from './CodeEditorExtension';
import BpmnJsExtension from "./bpmn-js/BpmnJsExtension";

registerBpmnJSPlugin(BpmnJsExtension)
registerClientExtension(CodeEditorExtension);
