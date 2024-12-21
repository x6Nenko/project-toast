import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastStack, setToastStack } = React.useContext(ToastContext);
  
  return (
    <ol className={styles.wrapper}>
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
