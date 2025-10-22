import React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-clojure';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-searchbox';

export default ({ key, value, onValueChange }) => (
  <AceEditor
    name={ `colure-editor-${key}` }
    width="100%"
    height="100%"
    mode="clojure"
    theme="chaos"
    defaultValue={ value }
    onChange={ onValueChange }
  />
);