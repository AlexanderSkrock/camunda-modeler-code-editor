// eslint-disable-next-line no-unused-vars
import React from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';

import { ComposedModal, ModalBody, ModalFooter, ModalHeader } from '@carbon/react';
import { MODAL_CLASS_NAME, selectClass } from '../utils/css';

export const Header = ModalHeader || Modal.Header || (({ children }) => <h2>{children}</h2>);
export const Body = ModalBody || Modal.Body || (({ children }) => <div>{children}</div>);
export const Footer = ModalFooter || Modal.Footer || (({ children }) => <div>{children}</div>);

const FLOATING_MENUS_SELECTORS = [ selectClass(MODAL_CLASS_NAME) ];

export default ({ children, open = false, onClose, selectorPrimaryFocus }) => open && (
  <Modal className={ MODAL_CLASS_NAME }>
    <ComposedModal open={ open } onClose={ onClose } isFullWidth size="lg" selectorsFloatingMenus={ FLOATING_MENUS_SELECTORS } selectorPrimaryFocus={ selectorPrimaryFocus }>
      { children }
    </ComposedModal>
  </Modal>
);
