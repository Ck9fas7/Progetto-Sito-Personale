import { useState, useLayoutEffect } from "react";

export function useLoopShift({ textPathRef, pathRef, repeats, W, text }) {
  const [shift, setShift] = useState(50);

  useLayoutEffect(() => {
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled) return;

      const textPath = textPathRef.current;
      const path = pathRef.current;
      if (!textPath || !path) return;

      const textLen = textPath.getComputedTextLength();
      const pathLen = path.getTotalLength();
      setShift((textLen / repeats / pathLen) * 100);
    });

    return () => {
      cancelled = true;
    };
  }, [textPathRef, pathRef, repeats, W, text]);

  return shift;
}