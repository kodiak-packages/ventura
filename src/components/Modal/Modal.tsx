import React from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Modal.module.css';

type Props = {
  title: string;
};

const Modal: React.FC<Props> = ({ title }: Props) => {
  const mergedClassNames = classNames(cssReset.ventura, styles.modal);
  return (
    <ReactModal isOpen overlayClassName={styles.overlay} className={mergedClassNames}>
      <article>
        <h1 className={styles.title}>{title}</h1>
      </article>
    </ReactModal>
  );
};

export default Modal;
