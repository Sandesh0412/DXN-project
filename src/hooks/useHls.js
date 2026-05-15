import { useEffect } from "react";
import Hls from "hls.js";

// Attaches an HLS stream to a <video> element with native fallback for
// Safari (which plays HLS natively). Used by the Hero for the 4K
// Himalayan-mist loop. Falls back gracefully if src is null/empty.
export function useHls(videoRef, src) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hls;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari path — let the browser handle HLS natively.
      video.src = src;
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(src);
      hls.attachMedia(video);
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [videoRef, src]);
}
