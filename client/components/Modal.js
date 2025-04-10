import React from 'camunda-modeler-plugin-helpers/react';
import { Modal as ModelerModal } from 'camunda-modeler-plugin-helpers/components';

import { ComposedModal, ModalBody, ModalFooter, ModalHeader } from '../../vendor/@carbon/react';

import { selectClass } from '../utils/css';

import * as styles from './Modal.module.scss';

export const Header = ModalHeader;
export const Body = ModalBody;
export const Footer = ModalFooter;

const Modal = ({ children, open = false, onClose, selectorPrimaryFocus, containerClassName }) => open && (
  <ModelerModal className={ styles.modal }>
    <ComposedModal containerClassName={ containerClassName } open={ open } onClose={ onClose } isFullWidth selectorsFloatingMenus={ [ selectClass(styles.modal) ] } selectorPrimaryFocus={ selectorPrimaryFocus }>
      { children }
    </ComposedModal>
  </ModelerModal>
);

export default Modal;