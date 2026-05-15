import { motion } from "motion/react";
import { GraduationCap, HeartHandshake, Globe2 } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import { ORG_MISSION } from "@/data/content.js";

// "About the Organization" — establishes, early and clearly, what
// SuryaSandesh Enterprises actually is: an INDEPENDENT DXN organization
// whose product is education and mentorship, not manufacturing.
const ICONS = [GraduationCap, HeartHandshake, Globe2];

export default function OrgIntro() {
  return (
    <section className="relative py-28 sm:py-40">
      <Container>
        <SectionHeader
          eyebrow={ORG_MISSION.eyebrow}
          title={ORG_MISSION.title}
          description={ORG_MISSION.body}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ORG_MISSION.points.map((point, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="group h-full p-8 hover:border-white/20">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-hairline bg-surface text-champagne transition-colors duration-500 group-hover:border-champagne/40 group-hover:bg-champagne/10">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tightest">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {point.body}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
