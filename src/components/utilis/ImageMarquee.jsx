import { useId, useRef } from "react";
import { useViewportWidth } from "./windowsWidth";
import { usePathLength } from "../utilis/usePathLenght";
import {useMediaQuery} from "./useMediaQuery"


const DURATION = 20;
let ratio = 0.1;
let pithc = 2;


const [p0, p1, p2, p3] = [
  [-0.1, 0.4],
  [0.3, 1.0],
  [0.7, 1.0],
  [1.1, 0.4],
];

export function ImageMarquee({ images }) {
  const isMobile = useMediaQuery("(max-width: 440px)");
  if (!isMobile) {
    ratio=0.05;
    pithc=3;
  }
  const pathId = `curve-${useId().replace(/:/g, "")}`;
  const pathRef = useRef(null);

  const vw = useViewportWidth();
  const W = Math.min(1200,  vw);
  const IMG_SIZE = W * ratio;
  
  const H = IMG_SIZE * 1.1;

  const d = `M ${-0.1 * W},${H/2} L ${1.1 * W},${H/2}`;

  const pathLen = 1.2 * W;  
  const GAP = IMG_SIZE * pithc;
  const count = Math.max(1, Math.round(pathLen / GAP));

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
          preserveAspectRatio="xMidYMid meet"
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