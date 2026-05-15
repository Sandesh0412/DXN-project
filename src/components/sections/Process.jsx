import { motion } from "motion/react";
import { Phone, UserPlus, GraduationCap, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import { PROCESS_STEPS } from "@/data/content.js";

// The onboarding ladder — four steps, monospace numerals, hairline
// connectors. Visual rhyme with the One Dragon strip, but stacked
// vertically so the reader settles into a slower, decision-making cadence.
const STEP_ICONS = [Phone, UserPlus, GraduationCap, TrendingUp];

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-40">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          title={
            <>
              Four calm steps from{" "}
              <span className="text-gradient-ember">curious</span> to confident.
            </>
          }
          description="No high-pressure dinners. No mandatory inventory. We treat joining as an apprenticeship — at your pace, with honest guidance throughout."
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="group h-full p-7">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.32em] text-white/40">
                      {s.step}
                    </span>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface text-champagne transition-all duration-500 group-hover:border-champagne/40 group-hover:bg-champagne/10">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tightest">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {s.body}
                  </p>
                </Card>
              </motion.li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
