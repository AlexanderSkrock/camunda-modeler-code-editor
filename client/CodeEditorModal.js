import React, { useCallback, useEffect, useState } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-searchbox";

const Title = Modal.Title || (({ children }) => <h2>{children}</h2>);
const Body = Modal.Body || (({ children }) => <div>{children}</div>);
const Footer = Modal.Footer || (({ children }) => <div>{children}</div>);

export default ({ code, title, onClose, onChange }) => {
    const [currentCode, setCurrentCode] = useState(code);
    useEffect(() => {
        setCurrentCode(code);
    }, [code, setCurrentCode]);

    const handleChange = useCallback((text) => {
        setCurrentCode(text);
        onChange?.({ value: text });
    }, [setCurrentCode, onChange]);

    return <Modal onClose= { onClose }>
        <Title>{ title }</Title>
        <Body>
            <AceEditor
                name="codeEditor"
                mode="javascript"
                theme="github"
                value={ currentCode }
                onChange={ handleChange }
              />
        </Body>
        <Footer>
            <button onClick={ onClose } >Close</button>
        </Footer>
    </Modal>;
};
