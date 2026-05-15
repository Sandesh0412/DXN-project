import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import { FAQ_ITEMS } from "@/data/content.js";
import { cn } from "@/lib/cn.js";

// Accordion FAQ — answers the honest questions directly, including the
// crucial one: "Is SuryaSandesh the same as DXN?" (it is not). Copy
// lives in content.js so the brand guardrails stay in one place.
function Row({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-hairline"
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
          {item.q}
        </span>
        <span
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline transition-all duration-500 ease-apple",
            isOpen
              ? "rotate-45 border-champagne/50 bg-champagne/10 text-champagne"
              : "text-white/60 group-hover:border-white/30 group-hover:text-white"
          )}
        >
          <Plus className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-[15px] leading-relaxed text-muted">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-28 sm:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeader
            eyebrow="Frequently Asked"
            title={
              <>
                Questions, answered{" "}
                <span className="italic font-display">directly</span>.
              </>
            }
            description="No marketing varnish — including an honest answer on how we relate to DXN."
          />

          <div>
            {FAQ_ITEMS.map((item, i) => (
              <Row
                key={item.q}
                index={i}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
