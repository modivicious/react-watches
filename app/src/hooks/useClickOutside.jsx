import { useRef, useEffect } from "react";

const useClickOutside = (onTriggered) => {
  const domNode = useRef();
  useEffect(() => {
    const triggered = (e) => {
      if (!domNode.current?.contains(e.target)) onTriggered();
    };

    document.addEventListener("mousedown", triggered);

    return () => document.removeEventListener("mousedown", triggered);
  });

  return domNode;
};

export default useClickOutside;
