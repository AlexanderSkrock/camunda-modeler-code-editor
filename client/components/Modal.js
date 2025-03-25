// eslint-disable-next-line no-unused-vars
import React from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';

import { ComposedModal, ModalBody, ModalFooter, ModalHeader } from '@carbon/react';

export const Header = ModalHeader || Modal.Header || (({ children }) => <h2>{children}</h2>);
export const Body = ModalBody || Modal.Body || (({ children }) => <div>{children}</div>);
export const Footer = ModalFooter || Modal.Footer || (({ children }) => <div>{children}</div>);

export default ({ children, open = false, onClose }) => open && (
  <Modal>
    <ComposedModal open={ open } onClose={ onClose } isFullWidth size="lg">
      { children }
    </ComposedModal>
  </Modal>
);
