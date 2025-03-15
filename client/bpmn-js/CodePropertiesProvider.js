import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { isTextFieldEntryEdited } from '@bpmn-io/properties-panel';

import { Script, getScriptType, getScriptFormat } from './props/ScriptProps';

import {
  ConditionalScript,
  getScriptLanguage,
  getScriptType as getConditionalScriptType
} from './props/ConditionalProps';

const SUPPORTED_LANGUAGES = [ 'js', 'JavaScript', 'javascript' ];

export default class CodePropertiesProvider {

  constructor(propertiesPanel, injector) {
    propertiesPanel.registerProvider(200, this);

    this.injector = injector;
  }

  /**
     * Return the groups provided for the given element.
     *
     * @param element
     *
     * @return groups middleware
     */
  getGroups(element) {
    return groups => {

      const businessObject = getBusinessObject(element);
      const scriptGroup = groups.find(entry => entry.id === 'CamundaPlatform__Script');
      if (scriptGroup && getScriptType(element) === 'script' && SUPPORTED_LANGUAGES.includes(getScriptFormat(businessObject))) {
        let script = scriptGroup.entries.find(entry => entry.id === 'scriptValue');

        script.component = Script;
        script.isEdited = isTextFieldEntryEdited;
      }

      let conditionGroup = groups.find(entry => entry.id === 'CamundaPlatform__Condition');
      if (conditionGroup && getConditionalScriptType(element) === 'script' && SUPPORTED_LANGUAGES.includes(getScriptLanguage(businessObject))) {
        let script = conditionGroup.entries.find(entry => entry.id === 'conditionScriptValue');

        script.component = ConditionalScript;
        script.isEdited = isTextFieldEntryEdited;
      }

      let taskListenerGroup = groups.find(entry => entry.id === 'CamundaPlatform__TaskListener');
      if (taskListenerGroup) {
        decorateGroup(taskListenerGroup);
      }
      let execListenerGroup = groups.find(entry => entry.id === 'CamundaPlatform__ExecutionListener');
      if (execListenerGroup) {
        decorateGroup(execListenerGroup);
      }

      // I/O Params
      let inputGroup = groups.find(entry => entry.id === 'CamundaPlatform__Input');
      if (inputGroup) {
        decorateGroup(inputGroup);
      }
      let outputGroup = groups.find(entry => entry.id === 'CamundaPlatform__Output');
      if (outputGroup) {
        decorateGroup(outputGroup);
      }

      return groups;
    };
  }

}

function decorateGroup(group) {
  group.items.map(item => {
    let scriptValue = item.entries.find(entry => entry.id.endsWith('scriptValue'));

    if (scriptValue) {
      let scriptObject = scriptValue.script;
      let scriptFormat = scriptObject.get('scriptFormat');

      if (SUPPORTED_LANGUAGES.includes(scriptFormat)) {
        scriptValue.component = Script;
        scriptValue.isEdited = isTextFieldEntryEdited;
      }
    }
  });
}

CodePropertiesProvider.$inject = [ 'propertiesPanel', 'injector' ];
