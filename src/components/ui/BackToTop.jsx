import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useScrollThreshold } from "@/hooks/useScrollThreshold.js";

// Floating glass pill, bottom-right. Appears after 800px scroll. Click
// scrolls smoothly to top — Lenis handles the easing for us.
export default function BackToTop() {
  const visible = useScrollThreshold(800);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="bttop"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="glass fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full text-white/85 transition-all duration-500 ease-apple hover:scale-105 hover:border-champagne/40 hover:text-champagne"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
