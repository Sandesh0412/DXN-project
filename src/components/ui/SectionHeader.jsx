import { motion } from "motion/react";
import Badge from "./Badge.jsx";
import { cn } from "@/lib/cn.js";

// Standard section "intro" pattern: tiny eyebrow → display heading →
// optional supporting line. Animates in on viewport entry — once.
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn("mb-5", align === "center" && "flex justify-center")}
        >
          <Badge>{eyebrow}</Badge>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="font-display text-4xl leading-[1.05] tracking-tightest text-white sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
