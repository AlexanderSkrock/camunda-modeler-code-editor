// eslint-disable-next-line no-unused-vars
import React from 'camunda-modeler-plugin-helpers/react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-searchbox';

export default ({ value, onChange }) => (
  <AceEditor
    name="default-code-editor"
    mode="text"
    theme="github"
    width="100%"
    height="100%"
    value={ value }
    onChange={ onChange }
  />
);
