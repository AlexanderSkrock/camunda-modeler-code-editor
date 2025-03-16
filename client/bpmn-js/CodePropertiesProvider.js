import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { isTextFieldEntryEdited } from '@bpmn-io/properties-panel';

import { Script, getScriptType, getScriptFormat } from './props/ScriptProps';

import { ConditionalScript, getScriptLanguage, getScriptType as getConditionalScriptType } from './props/ConditionalProps';

export default class CodePropertiesProvider {

  constructor(propertiesPanel) {
    propertiesPanel.registerProvider(200, this);
  }

  getGroups(element) {
    return groups => {
      decorateGroup(groups, 'CamundaPlatform__Script', scriptGroup => decorateScriptGroup(scriptGroup, element));
      decorateGroup(groups, 'CamundaPlatform__Condition', scriptGroup => decorateConditionGroup(scriptGroup, element));
      decorateGroup(groups, 'CamundaPlatform__TaskListener', decorateScriptLikeGroup);
      decorateGroup(groups, 'CamundaPlatform__ExecutionListener', decorateScriptLikeGroup);
      decorateGroup(groups, 'CamundaPlatform__Input', decorateScriptLikeGroup);
      decorateGroup(groups, 'CamundaPlatform__Output', decorateScriptLikeGroup);
      return groups;
    };
  }
}

function decorateGroup(groups, groupId, decorator) {
  const group = groups.find(entry => entry.id === groupId);
  if (group) {
    decorator(group);
  }
}

function decorateConditionGroup(group, element) {
  if (getConditionalScriptType(element) !== 'script') {
    return;
  }

  const businessObject = getBusinessObject(element);
  const scriptLanguage = getScriptLanguage(businessObject);
  if (SUPPORTED_LANGUAGES.includes(scriptLanguage)) {
    const script = group.entries.find(entry => entry.id === 'conditionScriptValue');
    decorateConditionalScript(script);
  }
}

function decorateScriptGroup(group, element) {
  if (getScriptType(element) !== 'script') {
    return;
  }

  const businessObject = getBusinessObject(element);
  const scriptFormat = getScriptFormat(businessObject);
  if (isScriptFormatSupported(scriptFormat)) {
    const script = group.entries.find(entry => entry.id === 'scriptValue');
    decorateScript(script);
  }
}

function decorateScriptLikeGroup(group) {
  group.items.map(item => {
    const scriptValue = item.entries.find(entry => entry.id.endsWith('scriptValue'));

    if (scriptValue) {
      const scriptObject = scriptValue.script;
      const scriptFormat = scriptObject.get('scriptFormat');

      if (isScriptFormatSupported(scriptFormat)) {
        decorateScript(scriptValue);
      }
    }
  });
}

function decorateScript(script) {
  script.component = Script;
  script.isEdited = isTextFieldEntryEdited;
}

function decorateConditionalScript(script) {
  script.component = ConditionalScript;
  script.isEdited = isTextFieldEntryEdited;
}

function isScriptFormatSupported(format) {
    return true;
}

CodePropertiesProvider.$inject = [ 'propertiesPanel' ];
