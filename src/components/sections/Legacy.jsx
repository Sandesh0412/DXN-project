import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import NoiseOverlay from "@/components/ui/NoiseOverlay.jsx";

// "Father → Son" narrative arc. Two large portrait cards face each other
// with an arrow between them — the visual metaphor of legacy transfer.
// Side text fades in on scroll for a "long-form magazine" cadence.
export default function Legacy() {
  return (
    <section id="legacy" className="relative py-28 sm:py-40">
      <Container>
        <SectionHeader
          eyebrow="The Legacy Arc"
          title={
            <>
              From a father's <span className="text-gradient-champagne">mastery</span>,
              <br className="hidden sm:block" />
              to a son's <span className="italic font-display">atelier</span>.
            </>
          }
          description="Surya spent three decades earning DXN's Triple Diamond rank the patient way — handshakes, home visits, honest guidance. Sandesh carries the same values forward with modern tools, sharing them more clearly and to more people, wherever DXN's network reaches."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          {/* Surya — the patriarch card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="relative h-full">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.22),transparent_60%),linear-gradient(180deg,#1a1410,#050505)]" />
                <NoiseOverlay opacity={0.08} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-champagne/80">
                    01 · The Patriarch
                  </span>
                  <h3 className="mt-3 font-display text-4xl font-bold tracking-tightest sm:text-5xl">
                    Surya
                  </h3>
                  <p className="mt-2 text-sm text-white/55">
                    Triple Diamond · 30+ years · 4 continents
                  </p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[15px] leading-relaxed text-white/65">
                  "I built this business one cup of coffee at a time. The
                  product is the proof. The relationships are the legacy."
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Arrow / hand-off — desktop only, hairline rule on mobile */}
          <div className="hidden items-center justify-center lg:flex">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-champagne/30 bg-champagne/[0.06]"
            >
              <ArrowRight className="h-5 w-5 text-champagne" />
            </motion.div>
          </div>

          {/* Sandesh — the heir card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <Card className="relative h-full">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,40,40,0.20),transparent_60%),linear-gradient(180deg,#1a1010,#050505)]" />
                <NoiseOverlay opacity={0.06} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-ember-400">
                    02 · The Atelier
                  </span>
                  <h3 className="mt-3 font-display text-4xl font-bold tracking-tightest sm:text-5xl">
                    Sandesh
                  </h3>
                  <p className="mt-2 text-sm text-white/55">
                    Digital systems · honest mentorship · modern tools
                  </p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[15px] leading-relaxed text-white/65">
                  "Same product. Same principles. New infrastructure — so the
                  next generation of distributors moves at internet speed."
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
