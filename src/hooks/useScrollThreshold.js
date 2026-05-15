import { useEffect, useState } from "react";

// Returns true once the user has scrolled past `threshold` pixels.
// Used by the Navbar to swap from transparent → glassmorphic blur.
export function useScrollThreshold(threshold = 24) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setPassed(window.scrollY > threshold);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return passed;
}
