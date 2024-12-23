import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';
import useEscapeKey from '../../hooks/useEscapeKey';

function ToastShelf() {
  const { toastStack, setToastStack } = React.useContext(ToastContext);
  useEscapeKey("Escape");
  
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toastStack.length > 0 && toastStack.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} dismissToast={() => setToastStack(toastStack.filter((toast) => toast.id !== id))}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
