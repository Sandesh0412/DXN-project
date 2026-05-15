import { cn } from "@/lib/cn.js";

// Small "champagne" pill — reserved for prestige cues (Diamond status,
// "Featured", launch labels). Used sparingly to keep its weight.
export default function Badge({ className, children, glow = false, ...rest }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full",
        "px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]",
        "border border-champagne/30 bg-champagne/[0.06] text-champagne",
        glow && "animate-glow",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
