import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import MagneticButton from "@/components/ui/MagneticButton.jsx";
import NoiseOverlay from "@/components/ui/NoiseOverlay.jsx";
import { ROUTES } from "@/data/content.js";

// The closing invitation. Reusable across pages via props — every page
// ends on the same calm, no-pressure note. Copy avoids any promise of
// outcome; it offers a conversation, nothing more.
export default function FinalCTA({
  eyebrow = "The Invitation",
  title = (
    <>
      Start with a conversation,{" "}
      <span className="text-gradient-champagne">not a commitment.</span>
    </>
  ),
  body = "A relaxed, no-pressure chat about Ganoderma, the DXN products, and whether the opportunity fits your life. We will explain honestly — and leave the decision entirely with you.",
  ctaLabel = "Talk to Our Team",
  ctaTo = ROUTES.contact,
  note = "We usually reply within 24 hours · Kathmandu time",
}) {
  return (
    <section className="relative isolate overflow-hidden py-32 sm:py-48">
      <div className="absolute inset-0 -z-10 animate-drift bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,rgba(214,40,40,0.20),transparent_60%),radial-gradient(ellipse_50%_40%_at_50%_80%,rgba(212,175,55,0.16),transparent_60%),linear-gradient(180deg,#080605,#050505)]" />
      <NoiseOverlay opacity={0.06} />

      <Container className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] uppercase tracking-[0.36em] text-champagne"
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.0] tracking-tightest sm:text-6xl lg:text-[80px]"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <MagneticButton
            intent="primary"
            size="lg"
            as={Link}
            to={ctaTo}
            strength={0.45}
            className="shadow-ember"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 text-xs uppercase tracking-[0.28em] text-white/35"
        >
          {note}
        </motion.p>
      </Container>
    </section>
  );
}
