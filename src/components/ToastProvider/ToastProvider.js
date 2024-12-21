import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  return (
    <ToastContext value={{ toastStack, setToastStack }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
