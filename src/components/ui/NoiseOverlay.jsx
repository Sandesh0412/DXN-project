import { cn } from "@/lib/cn.js";

// Filmic SVG-noise overlay. The `grain` utility (in index.css) renders
// fractal noise via a tiny inline SVG — no PNG asset, no extra request.
// Default 0.05 opacity for the "legacy film" texture called out in the brief.
export default function NoiseOverlay({ className, opacity = 0.05 }) {
  return (
    <div
      aria-hidden
      className={cn("grain absolute inset-0 pointer-events-none", className)}
      style={{ "--noise-opacity": opacity }}
    />
  );
}
