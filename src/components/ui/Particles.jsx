import { useMemo } from "react";
import { motion } from "motion/react";

// Subtle floating particles for the cinematic Hero — faint gold motes
// that drift upward, like dust in a shaft of light. Count is kept low
// (deliberately) so the effect reads as "atmosphere", not "snow".
export default function Particles({ count = 18 }) {
  // Generate once — positions/durations are stable across re-renders.
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 8,
        duration: 9 + Math.random() * 12,
        drift: (Math.random() - 0.5) * 40,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    [count]
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {motes.map((m) => (
        <motion.span
          key={m.id}
          className="absolute rounded-full bg-champagne"
          style={{
            left: `${m.left}%`,
            width: m.size,
            height: m.size,
            bottom: -10,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [-20, -window.innerHeight - 40],
            x: [0, m.drift],
            opacity: [0, m.opacity, m.opacity, 0],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
