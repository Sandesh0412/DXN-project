import { motion } from "motion/react";
import Container from "@/components/ui/Container.jsx";
import Badge from "@/components/ui/Badge.jsx";
import BlobField from "@/components/ui/BlobField.jsx";
import NoiseOverlay from "@/components/ui/NoiseOverlay.jsx";

// Shared hero for the inner pages (About DXN, Products, etc.). Compact
// — roughly half-viewport — so the page's real content surfaces fast.
// The full-screen cinematic treatment is reserved for the Home hero.
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <BlobField density="rich" />
      <NoiseOverlay opacity={0.04} />

      <Container>
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5"
          >
            <Badge>{eyebrow}</Badge>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
