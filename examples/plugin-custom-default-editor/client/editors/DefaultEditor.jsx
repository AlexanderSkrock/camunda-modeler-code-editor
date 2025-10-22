import React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-chaos';
import 'ace-builds/src-noconflict/ext-searchbox';

export default ({ key, value, onValueChange }) => (
  <AceEditor
    name={ `default-editor-${key}` }
    width="100%"
    height="100%"
    mode="text"
    theme="chaos"
    defaultValue={ value }
    onChange={ onValueChange }
  />
);