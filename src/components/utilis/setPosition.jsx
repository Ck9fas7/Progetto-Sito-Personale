import { Draggable } from "./useDragg";
import { useState, useEffect } from "react";

export function setPosition() {
    const p = Math.max(0, Math.min(100, percent));   
    box.style.setProperty("--pos", p + "%");
    e.currentTarget.setPointerCapture(e.pointerId); 
    start.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
}

