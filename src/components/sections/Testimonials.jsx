import { motion } from "motion/react";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import Card from "@/components/ui/Card.jsx";
import { TESTIMONIALS } from "@/data/content.js";

// Quiet, generous testimonials — set them like pull-quotes in a print
// magazine. No avatars: text is the moat. Three columns on desktop,
// stacked on mobile. Subtle bottom badge for the source.
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative border-y border-hairline py-28 sm:py-40"
    >
      <Container>
        <SectionHeader
          eyebrow="Voices from the Network"
          title={
            <>
              Trust, in the words of the{" "}
              <span className="text-gradient-champagne">people who built it</span>.
            </>
          }
          align="center"
          description="Engineers, doctors, parents, students. The shape of a DXN business looks different for each — the underlying system does not."
          className="text-center mx-auto"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="flex h-full flex-col p-8">
                <Quote className="h-6 w-6 text-champagne/70" />
                <p className="mt-5 flex-1 font-display text-lg leading-snug tracking-tight text-white/90">
                  "{t.quote}"
                </p>
                <div className="mt-6 border-t border-hairline pt-4">
                  <p className="font-display text-sm font-bold tracking-tight">
                    {t.author}
                  </p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-white/45">
                    {t.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
