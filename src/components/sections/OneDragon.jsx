import { motion } from "motion/react";
import { Sprout, FlaskConical, Factory, Globe2 } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import { ONE_DRAGON } from "@/data/content.js";

// DXN's "One Dragon" philosophy — DXN's vertical integration, NOT
// SuryaSandesh's. The section header copy makes the ownership explicit:
// this is the reason an independent organization can represent the
// products with confidence.
const ICONS = [Sprout, FlaskConical, Factory, Globe2];

export default function OneDragon() {
  return (
    <section className="relative overflow-hidden border-y border-hairline py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,175,55,0.07),transparent_60%)]" />

      <Container>
        <SectionHeader
          eyebrow={ONE_DRAGON.eyebrow}
          align="center"
          title={
            <>
              {ONE_DRAGON.title.split(" End")[0]}{" "}
              <span className="block text-gradient-champagne">End to end.</span>
            </>
          }
          description={ONE_DRAGON.body}
          className="mx-auto text-center"
        />

        <div className="relative mt-20">
          {/* Connecting spine */}
          <div className="absolute inset-x-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent md:block" />

          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {ONE_DRAGON.pillars.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.1,
                  }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full border border-hairline bg-surface-elevated">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)]" />
                    <Icon className="relative h-9 w-9 text-champagne" strokeWidth={1.5} />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/40">
                    DXN · Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tightest">
                    {p.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[230px] text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
