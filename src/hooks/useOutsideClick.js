import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listeCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listeCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listeCapturing);
    },
    [handler, listeCapturing]
  );
  return ref;
}
