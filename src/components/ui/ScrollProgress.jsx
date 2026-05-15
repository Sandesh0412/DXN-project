import { motion, useScroll, useSpring } from "motion/react";

// A 2px champagne-gradient bar pinned to the top of the viewport that
// tracks document scroll progress. Spring-smoothed so it never feels
// like a jittery indicator — closer to Linear's reading progress feel.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-ember-500 via-champagne to-ember-400 shadow-[0_0_12px_rgba(212,175,55,0.55)]"
    />
  );
}
