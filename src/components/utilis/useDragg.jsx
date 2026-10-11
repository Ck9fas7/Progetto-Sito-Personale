import { useState, useRef } from 'react';

const clamp = (n) => Math.min(100, Math.max(0, n));

export function Draggable() {
  const [pos, setPos] = useState(50);
  const box = useRef(null);
  const dragging = useRef(false);

  const moveTo = (clientX) => {
    const rect = box.current.getBoundingClientRect();
    const next = clamp(((clientX - rect.left) / rect.width) * 100);
    setPos(next);
  };

  const stop = (e) => {
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const bind = {
    onPointerDown: (e) => {
      dragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      moveTo(e.clientX);
    },
    onPointerMove: (e) => {
      if (!dragging.current) return;
      moveTo(e.clientX);
    },
    onPointerUp: stop,
    onPointerCancel: stop,
  };

  return { pos, bind, ref: box };
}