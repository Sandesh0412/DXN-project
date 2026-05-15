import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import MagneticButton from "@/components/ui/MagneticButton.jsx";
import Button from "@/components/ui/Button.jsx";
import Badge from "@/components/ui/Badge.jsx";
import NoiseOverlay from "@/components/ui/NoiseOverlay.jsx";
import Particles from "@/components/ui/Particles.jsx";
import { useHls } from "@/hooks/useHls.js";
import { HERO, ROUTES } from "@/data/content.js";

// "Cinematic Dark" Hero — full-screen, with background-video support,
// a filmic grain overlay, floating gold particles, and a glowing
// gradient CTA. Copy is taken verbatim from the brand brief.
//
// HLS_SRC: drop a 4K HLS playlist URL here for the video bed. Empty by
// default — a layered gradient + particles fallback carries the scene.
const HLS_SRC = ""; // e.g. "https://stream.suryasandesh.com/hero/master.m3u8"

export default function Hero() {
  const videoRef = useRef(null);
  useHls(videoRef, HLS_SRC);

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Video / fallback bed */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-60"
        />
        {/* Atmospheric fallback — Himalayan dawn over a warm valley */}
        <div className="absolute inset-0 animate-drift bg-[radial-gradient(ellipse_120%_70%_at_50%_25%,rgba(212,175,55,0.16),transparent_55%),radial-gradient(ellipse_80%_50%_at_72%_82%,rgba(214,40,40,0.14),transparent_60%),linear-gradient(180deg,#070707_0%,#0a0a0a_50%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-surface/55 to-surface" />
      </div>

      {/* Floating particles + filmic grain */}
      <Particles count={20} />
      <NoiseOverlay opacity={0.05} />

      <Container className="relative pt-32 pb-24 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <Badge glow>
            <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
            Independent DXN Organization · Nepal
          </Badge>
        </motion.div>

        {/* Headline — verbatim from the brief, set in oversize Switzer */}
        <h1 className="max-w-[18ch] font-display text-[2.6rem] font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-[5.25rem]">
          {["Empowering Wellness", "& Entrepreneurship", "Through DXN"].map(
            (line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05 + i * 0.12,
                }}
                className="block"
              >
                {i === 2 ? (
                  <>
                    Through <span className="text-gradient-champagne">DXN</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            )
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {HERO.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.56 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Glowing gradient, magnetic primary CTA */}
          <MagneticButton
            intent="primary"
            size="lg"
            as={Link}
            to={ROUTES.opportunity}
            className="shadow-ember"
          >
            Explore the Opportunity
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </MagneticButton>

          <Button intent="ghost" size="lg" as={Link} to={ROUTES.aboutDxn}>
            <Play className="h-4 w-4" strokeWidth={2.25} />
            Discover DXN
          </Button>
        </motion.div>

        {/* Quiet trust facts — all DXN-network facts, no claims */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.78 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-hairline pt-6 text-sm"
        >
          {[
            ["180+", "Countries in the DXN network"],
            ["1993", "Year DXN was founded"],
            ["Triple Diamond", "Leadership guiding us"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="font-display text-xl font-bold tracking-tightest text-white sm:text-2xl">
                {v}
              </dt>
              <dd className="mt-1 text-xs leading-snug text-white/45">{l}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/35">
          Scroll
        </span>
      </div>
    </section>
  );
}
