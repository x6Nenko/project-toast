import React from "react";

export default function useEscapeKey(escapeKey, callback) {    
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === escapeKey) {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [escapeKey, callback]);
}