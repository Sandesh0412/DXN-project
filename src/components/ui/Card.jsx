import { cn } from "@/lib/cn.js";

// The default "elevated" surface in the system — used for product tiles,
// stat blocks, pillar cards. Glass + hairline border. No heavy shadow:
// premium depth comes from contrast against #050505, not drop-shadows.
export default function Card({ className, children, ...rest }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-surface-elevated/70",
        "border border-hairline",
        "transition-all duration-500 ease-apple",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
