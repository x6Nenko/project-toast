import React from "react";
import { ToastContext } from "../components/ToastProvider/ToastProvider";

export default function useEscapeKey(onEscape) {
  const { toastStack, setToastStack } = React.useContext(ToastContext);
  
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === onEscape) {
        setToastStack([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toastStack, setToastStack, onEscape]);
}