// eslint-disable-next-line no-unused-vars
import React from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';

import { ComposedModal, ModalBody, ModalFooter, ModalHeader } from '../../vendor/@carbon/react';

import { selectClass } from '../utils/css';

import * as styles from './Modal.module.scss';

export const Header = ModalHeader || Modal.Header || (({ children }) => <h2>{children}</h2>);
export const Body = ModalBody || Modal.Body || (({ children }) => <div>{children}</div>);
export const Footer = ModalFooter || Modal.Footer || (({ children }) => <div>{children}</div>);

export default ({ children, open = false, onClose, selectorPrimaryFocus, containerClassName }) => open && (
  <Modal className={ styles.modal }>
    <ComposedModal containerClassName={ containerClassName } open={ open } onClose={ onClose } isFullWidth selectorsFloatingMenus={ [ selectClass(styles.modal) ] } selectorPrimaryFocus={ selectorPrimaryFocus }>
      { children }
    </ComposedModal>
  </Modal>
);
