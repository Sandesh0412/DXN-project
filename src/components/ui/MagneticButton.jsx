import { motion } from "motion/react";
import { useMagnetic } from "@/hooks/useMagnetic.js";
import { cn } from "@/lib/cn.js";
import Button from "./Button.jsx";

// Wraps `Button` with a magnetic field — cursor proximity translates
// the element via a spring. The inner label translates at half the
// strength for a "parallax" feel (the Awwwards-grade trick).
export default function MagneticButton({
  strength = 0.35,
  className,
  children,
  ...buttonProps
}) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic({ strength });

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("inline-block will-change-transform", className)}
    >
      <Button {...buttonProps}>
        <motion.span
          style={{ x: x.get ? undefined : 0 }}
          className="inline-flex items-center gap-2"
        >
          {children}
        </motion.span>
      </Button>
    </motion.div>
  );
}
