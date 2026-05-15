import { motion } from "motion/react";

// Wraps every routed page with a mount-time enter animation — a soft
// fade + lift on Apple's spring curve. Each page mounts fresh on
// navigation (React swaps the route element), so this replays per page.
// Enter-only by design: it composes cleanly with React.lazy code-
// splitting, where exit animations would deadlock against suspense.
const variants = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0 },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
