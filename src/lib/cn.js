import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// `cn` — the canonical className merger. clsx handles conditionals,
// twMerge resolves Tailwind conflicts (last-write-wins per utility group).
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
