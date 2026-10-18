import { useState, useLayoutEffect } from "react";

export function usePathLength(pathRef, W) {
  const [len, setLen] = useState(1500);

  useLayoutEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
  }, [pathRef, W]);

  return len;
}