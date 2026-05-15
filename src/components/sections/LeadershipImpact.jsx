import { motion } from "motion/react";
import { Gem, ShieldCheck, BookOpen, Users } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import Badge from "@/components/ui/Badge.jsx";
import { useCountUp } from "@/hooks/useCountUp.js";
import { STATS, LEADERSHIP } from "@/data/content.js";

// "Leadership Impact" — pairs the DXN-network stat counters with the
// SuryaSandesh leadership values. Used on the Home page and (in full)
// on the Leadership page.
const VALUE_ICONS = [ShieldCheck, BookOpen, Users];

function Stat({ value, suffix, label, delay }) {
  const { ref, value: v } = useCountUp(value, { duration: 1700 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-hairline bg-surface-elevated/60 p-7"
    >
      <div className="font-display text-4xl font-bold tracking-tightest text-white sm:text-5xl">
        {v}
        <span className="text-gradient-champagne">{suffix}</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">
        {label}
      </p>
    </motion.div>
  );
}

export default function LeadershipImpact({ showValues = true }) {
  return (
    <section className="relative py-28 sm:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Leadership Impact"
              title={
                <>
                  Earned slowly.{" "}
                  <span className="text-gradient-champagne">Shared generously.</span>
                </>
              }
              description="Our senior leader holds DXN's Triple Diamond rank — a milestone reached only through years of consistent, ethical network growth. That experience is what every person we mentor draws on."
            />

            {/* Triple Diamond explainer */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex items-start gap-4 rounded-2xl border border-champagne/20 bg-champagne/[0.04] p-6"
            >
              <span className="inline-flex h-11 w-11 shrink-0 animate-glow items-center justify-center rounded-full border border-champagne/40 bg-champagne/10 text-champagne">
                <Gem className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <Badge>{LEADERSHIP.diamond.rank}</Badge>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {LEADERSHIP.diamond.body}
                </p>
              </div>
            </motion.div>
          </div>

          {/* DXN-network stat counters */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {STATS.map((s, i) => (
              <Stat key={s.label} {...s} delay={i * 0.12} />
            ))}
          </div>
        </div>

        {/* Leadership values */}
        {showValues && (
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {LEADERSHIP.values.map((value, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Card className="h-full p-7">
                    <Icon className="h-6 w-6 text-champagne" strokeWidth={1.6} />
                    <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {value.body}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
