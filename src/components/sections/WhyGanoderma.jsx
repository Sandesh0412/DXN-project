import { motion } from "motion/react";
import { Leaf, Info } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import NoiseOverlay from "@/components/ui/NoiseOverlay.jsx";
import { GANODERMA } from "@/data/content.js";

// "Why Ganoderma" — purely educational. It explains the ingredient and
// is careful to stay on the right side of wellness-claim language: the
// closing notes explicitly flag this as information, not medical advice.
export default function WhyGanoderma() {
  return (
    <section className="relative overflow-hidden border-y border-hairline py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_70%_15%,rgba(16,120,80,0.10),transparent_60%)]" />
      <NoiseOverlay opacity={0.04} />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeader
              eyebrow={GANODERMA.eyebrow}
              title={GANODERMA.title}
              description={GANODERMA.body}
            />

            {/* Educational disclaimer notes */}
            <div className="mt-8 space-y-2.5">
              {GANODERMA.notes.map((note) => (
                <p
                  key={note}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-white/45"
                >
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/35" />
                  {note}
                </p>
              ))}
            </div>
          </div>

          {/* Educational fact panels */}
          <div className="grid gap-4">
            {GANODERMA.facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass flex items-center gap-6 rounded-2xl p-6"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/30 bg-champagne/[0.07] text-champagne">
                  <Leaf className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl font-bold tracking-tightest text-white">
                      {fact.stat}
                    </span>
                    <span className="text-sm font-medium text-white/80">
                      {fact.label}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {fact.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
