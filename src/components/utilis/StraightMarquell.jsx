import { useId, useRef } from "react";
import { useViewportWidth } from "../utilis/windowsWidth";
import { useLoopShift } from "../utilis/UseLoopShift";

const REPEATS = 6;
const H = 300;

const [p0, p1, p2, p3] = [
  [0, 0.4],
  [0.6, 0.8],
  [0.6, -0.2],
  [1, 0.4],
];

export function CurvedMarquee({ text }) {
  const pathRef = useRef(null);
  const textPathRef = useRef(null);

  const vw = useViewportWidth();
  const W = Math.min(1200, Math.max(500, vw));

  const shift = useLoopShift({
    textPathRef,
    pathRef,
    repeats: REPEATS,
    W,
    text,
  });

  const d = `M ${p0[0] * W},${p0[1] * H}
             C ${p1[0] * W},${p1[1] * H}
               ${p2[0] * W},${p2[1] * H}
               ${p3[0] * W},${p3[1] * H}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }}>
      <path ref={pathRef} id="curve" d={d} fill="none" />
      <text className="text-animated" xmlSpace="preserve">
        <textPath href="#curve" ref={textPathRef}>
          {text.repeat(REPEATS)}
          <animate
            attributeName="startOffset"
            from="0%"
            to={`-${shift}%`}
            dur="10s"
            repeatCount="indefinite"
          />
        </textPath>
      </text>
    </svg>
  );
}