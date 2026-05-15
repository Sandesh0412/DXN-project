import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

// Counts up to `target` when the element enters the viewport. Uses
// requestAnimationFrame with an exponential-out curve to feel "Apple-soft"
// rather than a linear marquee count.
export function useCountUp(target, { duration = 1600, once = true } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "0px 0px -10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return { ref, value, inView };
}
