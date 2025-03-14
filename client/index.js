import {
    registerBpmnJSModdleExtension,
    registerBpmnJSPlugin,
    registerClientExtension,
} from 'camunda-modeler-plugin-helpers';

import CodeEditorExtension from './CodeEditorExtension';
import BpmnJsExtension from "./bpmn-js/BpmnJsExtension";

import dataModdle from './bpmn-js-moddle/data.json';

registerBpmnJSPlugin(BpmnJsExtension)
registerBpmnJSModdleExtension(dataModdle);

registerClientExtension(CodeEditorExtension);
