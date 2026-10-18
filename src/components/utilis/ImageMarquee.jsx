import { useId, useRef } from "react";
import { useViewportWidth } from "./windowsWidth";
import { usePathLength } from "../utilis/usePathLenght";


const DURATION = 20;
const GAP = 275;


const [p0, p1, p2, p3] = [
  [-0.1, 0.4],
  [0.3, 1.0],
  [0.7, 1.0],
  [1.1, 0.4],
];

export function ImageMarquee({ images }) {
  console.log(images)
  const pathId = `curve-${useId().replace(/:/g, "")}`;
  const pathRef = useRef(null);

  const vw = useViewportWidth();
  const W = Math.min(1200, Math.max(500, vw));
  const IMG_SIZE = Math.min(40, Math.max(50, W * 0.1));
  const H = IMG_SIZE * 1.2;

  const Y = H / 2;
  const d = `M ${-0.1 * W},${Y} L ${1.1 * W},${Y}`;

  const pathLen = usePathLength(pathRef, W);
  const count = Math.ceil(pathLen / GAP) + 1;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }}>
      <path ref={pathRef} id={pathId} d={d} fill="none" />

      {Array.from({ length: count }, (_, i) => (
        <image
          className="logo_im"
          key={i}
          href={images[i % images.length]}
          width={IMG_SIZE}
          height={IMG_SIZE}
          x={-H / 2}
          y={-H / 2}
        >
          <animateMotion
            dur={`${DURATION}s`}
            begin={`-${(DURATION / count) * i}s`}
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="1;0"
            keyTimes="0;1"
            calcMode="linear"
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </image>
      ))}
    </svg>
  );
}