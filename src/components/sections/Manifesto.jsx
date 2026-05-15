import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Container from "@/components/ui/Container.jsx";

// Scroll-revealed brand creed. Each line brightens as it crosses the
// viewport. The copy is deliberately honest about the relationship:
// SuryaSandesh represents DXN — it does not own or manufacture it.
const LINES = [
  "We are not the makers of DXN.",
  "We are its students — and, for those who ask, its teachers.",
  "Our work is to explain Ganoderma clearly and to mentor honestly,",
  "opening a global door for anyone in Nepal ready to walk through it.",
  "We promise effort and guidance. Never a shortcut. Never a number.",
];

function Line({ text, progress, start, end }) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [12, 0]);
  return (
    <motion.span style={{ opacity, y }} className="block">
      {text}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });

  return (
    <section ref={ref} className="relative overflow-hidden py-32 sm:py-48">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(212,175,55,0.06),transparent_70%)]" />

      <Container>
        <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.32em] text-white/45">
          What We Believe
        </p>

        <h2 className="max-w-5xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.08]">
          {LINES.map((line, i) => (
            <Line
              key={i}
              text={line}
              progress={scrollYProgress}
              start={i / LINES.length}
              end={(i + 1) / LINES.length}
            />
          ))}
        </h2>
      </Container>
    </section>
  );
}
