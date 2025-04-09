// eslint-disable-next-line no-unused-vars
import React from 'camunda-modeler-plugin-helpers/react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-searchbox';

export default ({ key, value, onValueChange }) => (
  <AceEditor
    name={ `default-code-editor-${key}` }
    mode="text"
    theme="github"
    width="100%"
    height="100%"
    defaultValue={ value }
    onChange={ onValueChange }
  />
);
