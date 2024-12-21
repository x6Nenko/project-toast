import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ stack, setStack }) {
  
  return (
    <ol className={styles.wrapper}>
      {stack.length > 0 && stack.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} dismissToast={() => setStack(stack.filter((toast) => toast.id !== id))}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
