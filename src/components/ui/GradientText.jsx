import { cn } from "@/lib/cn.js";

// Inline gradient text. Two variants: ember (CTAs, intensity) and
// champagne (prestige). Use champagne for the legacy/diamond moments.
export default function GradientText({
  variant = "champagne",
  className,
  children,
  ...rest
}) {
  return (
    <span
      className={cn(
        variant === "ember" && "text-gradient-ember",
        variant === "champagne" &&
          "text-gradient-champagne animate-shimmer",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
