import { registerAccessors, registerDefaultEditor, registerEditableTypes, registerScopeProviders } from '../lib';
import { defaultAccessors, defaultEditor, defaultScopeProviders, defaultTypes } from '../default-implementation';

export default function() {
  registerAccessors(defaultAccessors);
  registerDefaultEditor(defaultEditor);
  registerEditableTypes(defaultTypes);
  registerScopeProviders(defaultScopeProviders);
}
