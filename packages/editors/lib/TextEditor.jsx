import React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-searchbox';

const DefaultEditor = ({ name, value, onValueChange }) => (
  <AceEditor
    name={ `${name}-text` }
    mode="text"
    theme="github"
    width="100%"
    height="100%"
    defaultValue={ value }
    onChange={ onValueChange }
  />
);

export default DefaultEditor;
