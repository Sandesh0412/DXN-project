import { forwardRef } from "react";
import { cn } from "@/lib/cn.js";

// Three intents: primary (brand gradient), ghost (glass), and link.
// Sizes match Apple's HIG-ish rhythm — 44px tap target on `md`+.
const intents = {
  primary:
    "bg-gradient-ember text-white shadow-ember hover:shadow-[0_14px_40px_-12px_rgba(214,40,40,0.7)]",
  ghost:
    "glass text-white/90 hover:text-white hover:bg-white/[0.06]",
  outline:
    "border border-hairline text-white/90 hover:border-white/30 hover:text-white",
  link:
    "text-champagne hover:text-white underline-offset-4 hover:underline",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-12 px-7 text-base",
};

const Button = forwardRef(function Button(
  {
    intent = "primary",
    size = "md",
    className,
    children,
    as: Tag = "button",
    ...rest
  },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight",
        "transition-all duration-500 ease-apple",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        "disabled:opacity-50 disabled:pointer-events-none",
        intents[intent],
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Button;
