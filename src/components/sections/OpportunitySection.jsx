import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Compass, Users, Globe2, PackageCheck, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import Button from "@/components/ui/Button.jsx";
import { OPPORTUNITY, ROUTES } from "@/data/content.js";

// "The Independent Business Opportunity" — explains the model in calm,
// grounded language. Crucially it ends with OPPORTUNITY.disclaimer:
// an explicit, plain statement that there are NO income guarantees.
const ICONS = [Compass, Users, Globe2, PackageCheck];

export default function OpportunitySection({ withCta = true }) {
  return (
    <section className="relative py-28 sm:py-40">
      <Container>
        <SectionHeader
          eyebrow={OPPORTUNITY.eyebrow}
          title={OPPORTUNITY.title}
          description={OPPORTUNITY.body}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OPPORTUNITY.pillars.map((pillar, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="group h-full p-7 hover:border-white/20">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-surface text-champagne transition-colors duration-500 group-hover:border-champagne/40 group-hover:bg-champagne/10">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Mandatory, prominent no-income-guarantee disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 rounded-2xl border border-hairline bg-surface-elevated/60 p-6"
        >
          <p className="text-xs leading-relaxed text-white/50">
            <span className="font-semibold uppercase tracking-[0.18em] text-white/70">
              Please note —{" "}
            </span>
            {OPPORTUNITY.disclaimer}
          </p>
        </motion.div>

        {withCta && (
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button intent="primary" size="lg" as={Link} to={ROUTES.opportunity}>
              See How the Model Works
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
            </Button>
            <Button intent="outline" size="lg" as={Link} to={ROUTES.contact}>
              Speak With a Mentor
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
