import { cn } from "@/lib/cn.js";

// Apple-style: generous side gutters on desktop, near-edge on mobile.
// The 1280px max keeps line lengths readable for body copy.
export default function Container({ as: Tag = "div", className, children, ...rest }) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
