import { cn } from "@/lib/cn.js";

// Ambient, slow-drifting gradient blobs — the soft "aurora" that sits
// behind most sections. Pure CSS (blur + the `drift` keyframe), no JS
// per frame, so it costs nothing on the main thread. `aria-hidden`
// because it is purely decorative.
export default function BlobField({ className, density = "normal" }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Heritage-red blob, upper-left */}
      <div className="absolute -left-32 -top-24 h-[420px] w-[420px] animate-drift rounded-full bg-ember-500/15 blur-[120px]" />
      {/* Brushed-gold blob, lower-right */}
      <div
        className="absolute -bottom-32 -right-24 h-[460px] w-[460px] animate-drift rounded-full bg-champagne/10 blur-[130px]"
        style={{ animationDelay: "-7s" }}
      />
      {density === "rich" && (
        <div
          className="absolute left-1/2 top-1/3 h-[320px] w-[320px] animate-drift rounded-full bg-ember-400/10 blur-[110px]"
          style={{ animationDelay: "-13s" }}
        />
      )}
    </div>
  );
}
