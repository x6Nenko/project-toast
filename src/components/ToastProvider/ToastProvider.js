import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToastStack([]);
  }, []);

  useEscapeKey('Escape', handleEscape);

  return (
    <ToastContext value={{ toastStack, setToastStack }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
