import { motion } from "motion/react";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import Badge from "@/components/ui/Badge.jsx";
import NoiseOverlay from "@/components/ui/NoiseOverlay.jsx";
import { DXN_HERITAGE } from "@/data/content.js";

// DXN corporate heritage — the founder and the timeline. This section
// is FACTUAL and clearly attributes the company to Datuk Dr. Lim Siow Jin
// and the year 1993. SuryaSandesh is never implied as the founder.
export default function DXNHeritage() {
  return (
    <section className="relative py-28 sm:py-40">
      <Container>
        <SectionHeader
          eyebrow="Corporate Heritage"
          title={
            <>
              Founded in 1993 by{" "}
              <span className="text-gradient-champagne">Datuk Dr. Lim Siow Jin</span>.
            </>
          }
          description="The brand we represent has a real and verifiable history. Knowing it is the first step to trusting it."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="relative h-full overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.20),transparent_60%),linear-gradient(180deg,#161310,#050505)]" />
                <NoiseOverlay opacity={0.07} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <Badge>The Founder of DXN</Badge>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-tightest sm:text-4xl">
                    {DXN_HERITAGE.founder}
                  </h3>
                  <p className="mt-1 text-sm text-white/55">
                    Founded DXN · {DXN_HERITAGE.founded} · {DXN_HERITAGE.origin}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <Quote className="h-6 w-6 text-champagne/70" />
                <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                  {DXN_HERITAGE.founderBio}
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute bottom-2 left-[15px] top-2 w-px bg-gradient-to-b from-champagne/40 via-hairline to-transparent" />
            <ol className="space-y-8">
              {DXN_HERITAGE.timeline.map((item, i) => (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-champagne/30 bg-surface-elevated">
                    <span className="h-2 w-2 rounded-full bg-champagne" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-champagne">
                    {item.year}
                  </p>
                  <h4 className="mt-1.5 font-display text-xl font-bold tracking-tightest">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
