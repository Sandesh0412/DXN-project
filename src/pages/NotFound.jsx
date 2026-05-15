import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition.jsx";
import Seo from "@/components/ui/Seo.jsx";
import Container from "@/components/ui/Container.jsx";
import Button from "@/components/ui/Button.jsx";
import BlobField from "@/components/ui/BlobField.jsx";
import NoiseOverlay from "@/components/ui/NoiseOverlay.jsx";
import { ROUTES } from "@/data/content.js";

// 404 — keeps the cinematic dark aesthetic rather than dumping the user
// onto a bare error page.
export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="Page Not Found" path="/404" />
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        <BlobField density="rich" />
        <NoiseOverlay opacity={0.05} />
        <Container className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] uppercase tracking-[0.36em] text-champagne"
          >
            Error 404
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="mx-auto mt-5 max-w-2xl font-display text-5xl font-bold tracking-tightest sm:text-7xl"
          >
            This page took a{" "}
            <span className="text-gradient-champagne">different path</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
            className="mx-auto mt-5 max-w-md text-base text-muted"
          >
            The link may be old or mistyped. Let's get you back to somewhere
            familiar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
            className="mt-10 flex justify-center"
          >
            <Button intent="primary" size="lg" as={Link} to={ROUTES.home}>
              <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
              Back to Home
            </Button>
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  );
}
