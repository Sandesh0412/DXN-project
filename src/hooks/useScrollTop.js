import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// On every route change, jump the viewport back to the top. Without this,
// React Router preserves scroll position across navigations — which feels
// broken when moving between full-length marketing pages.
export function useScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // `instant` so it doesn't fight the page-transition animation.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
}
