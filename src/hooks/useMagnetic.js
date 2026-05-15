import { useRef } from "react";
import { useMotionValue, useSpring } from "motion/react";

// The "magnetic" hover effect — the cursor lightly pulls the element
// toward it, then releases on leave. A defining micro-interaction of
// premium portfolio sites (Awwwards, Lusion). `strength` is the
// fraction of cursor offset applied (0.35 = subtle, 0.6 = strong).
export function useMagnetic({ strength = 0.35, stiffness = 220, damping = 18 } = {}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness, damping });
  const springY = useSpring(y, { stiffness, damping });

  const onMouseMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, onMouseMove, onMouseLeave };
}
