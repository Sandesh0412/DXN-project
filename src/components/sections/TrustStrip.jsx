import { motion } from "motion/react";
import Container from "@/components/ui/Container.jsx";

// A subtle "as featured / accredited by" rail — quiet rhythm right after
// the hero. Set in mono uppercase to feel like a credit card on a film.
const MARKS = [
  "ISO 9001:2015",
  "GMP Certified",
  "Halal · Kosher",
  "Pesticide-Free",
  "DXN Global",
  "Triple Diamond",
];

export default function TrustStrip() {
  return (
    <section aria-label="Trust marks" className="relative border-y border-hairline bg-surface/80 py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:justify-between"
        >
          {MARKS.map((mark) => (
            <span
              key={mark}
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/45"
            >
              {mark}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
