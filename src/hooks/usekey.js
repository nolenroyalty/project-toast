import React from "react";

function useKey(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === key) {
        callback(e);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
}

export default useKey;
