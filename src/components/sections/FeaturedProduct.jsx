import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import Badge from "@/components/ui/Badge.jsx";
import MagneticButton from "@/components/ui/MagneticButton.jsx";
import NoiseOverlay from "@/components/ui/NoiseOverlay.jsx";
import { ROUTES } from "@/data/content.js";

// Apple-style single-product spotlight. The Boutique tells you DXN has
// categories; this section makes the catalog feel real by picking the
// flagship — Lingzhi Black Coffee — and treating it like a hero product.
// The "bottle" is rendered in pure CSS/SVG so it never depends on assets.

const SPECS = [
  ["Origin", "Pahang, Malaysia"],
  ["Active", "Ganoderma extract 6:1"],
  ["Process", "Spray-dried · low-temp"],
  ["Caffeine", "Single dose · arabica"],
  ["Cert.", "ISO · GMP · Halal · Kosher"],
];

const NOTES = [
  "Adaptogenic calm without the jitter",
  "Polysaccharides + triterpenes preserved",
  "Sealed sachet — three-month shelf",
  "Brews in 80°C water · zero residue",
];

// Pure-SVG product visual. A poster-style "sachet" rendered with depth
// from gradient and a metallic foil seam. Subtle parallax on scroll.
function ProductVisual({ y }) {
  return (
    <motion.div
      style={{ y }}
      className="relative mx-auto aspect-[3/4] w-full max-w-md"
    >
      {/* Halo behind product — champagne radial */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.30),transparent_55%)] blur-2xl" />

      <svg
        viewBox="0 0 300 400"
        className="h-full w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
      >
        <defs>
          {/* sachet body — graphite gradient */}
          <linearGradient id="sachet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="50%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          {/* metallic foil — champagne sheen */}
          <linearGradient id="foil" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7a5e2a" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#7a5e2a" />
          </linearGradient>
          {/* specular highlight */}
          <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Sachet body */}
        <rect
          x="40"
          y="30"
          width="220"
          height="340"
          rx="14"
          fill="url(#sachet)"
          stroke="rgba(255,255,255,0.08)"
        />
        {/* Crimped top */}
        <path
          d="M40 60 L260 60 L255 45 L45 45 Z"
          fill="url(#foil)"
          opacity="0.85"
        />
        {/* Crimped bottom */}
        <path
          d="M40 355 L260 355 L255 370 L45 370 Z"
          fill="url(#foil)"
          opacity="0.85"
        />
        {/* Specular vertical highlight */}
        <rect x="60" y="60" width="14" height="295" fill="url(#shine)" />

        {/* Wordmark — Switzer-feel */}
        <text
          x="150"
          y="155"
          textAnchor="middle"
          fontSize="22"
          fontWeight="800"
          letterSpacing="-1"
          fill="#D4AF37"
          fontFamily="Switzer, sans-serif"
        >
          DXN
        </text>
        <text
          x="150"
          y="190"
          textAnchor="middle"
          fontSize="11"
          letterSpacing="3"
          fill="rgba(255,255,255,0.65)"
          fontFamily="Switzer, sans-serif"
        >
          LINGZHI · BLACK
        </text>
        {/* Hairline divider */}
        <line
          x1="80"
          y1="210"
          x2="220"
          y2="210"
          stroke="rgba(212,175,55,0.4)"
          strokeWidth="0.5"
        />
        <text
          x="150"
          y="240"
          textAnchor="middle"
          fontSize="9"
          letterSpacing="2"
          fill="rgba(255,255,255,0.5)"
          fontFamily="Switzer, sans-serif"
        >
          GANODERMA COFFEE
        </text>
        <text
          x="150"
          y="290"
          textAnchor="middle"
          fontSize="34"
          fontWeight="800"
          letterSpacing="-2"
          fill="#ffffff"
          fontFamily="Switzer, sans-serif"
        >
          Nº 01
        </text>
        <text
          x="150"
          y="332"
          textAnchor="middle"
          fontSize="8"
          letterSpacing="3"
          fill="rgba(255,255,255,0.4)"
          fontFamily="Switzer, sans-serif"
        >
          NET WT. 4.5 G · 20 SACHETS
        </text>
      </svg>
    </motion.div>
  );
}

export default function FeaturedProduct() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Slow parallax — product floats opposite the page direction
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      id="featured-product"
      className="relative isolate overflow-hidden py-28 sm:py-40"
    >
      {/* Section bed — warm graphite radial, anchors the visual */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_20%_30%,rgba(212,175,55,0.10),transparent_60%),radial-gradient(ellipse_60%_40%_at_85%_70%,rgba(214,40,40,0.10),transparent_60%),linear-gradient(180deg,#070707,#050505)]" />
      <NoiseOverlay opacity={0.04} />

      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-24">
          {/* Visual side */}
          <ProductVisual y={y} />

          {/* Detail side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <Badge glow>
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                Flagship · Bestseller in 47 countries
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-bold leading-[1.02] tracking-tightest sm:text-5xl lg:text-6xl"
            >
              Lingzhi Black Coffee.
              <br />
              <span className="text-gradient-champagne">A single, perfect ritual.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Black arabica, full-bodied, married with a 6:1 Ganoderma lucidum extract.
              The same sachet has anchored DXN's catalogue for three decades — because
              every variable in it is grown, measured, and made by DXN itself.
            </motion.p>

            {/* Tasting notes / benefits list */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
            >
              {NOTES.map((n) => (
                <li
                  key={n}
                  className="flex items-start gap-2.5 text-sm leading-snug text-white/75"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-champagne"
                    strokeWidth={2.5}
                  />
                  {n}
                </li>
              ))}
            </motion.ul>

            {/* Spec table — apple.com "Tech Specs" rhythm */}
            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-10 divide-y divide-hairline border-y border-hairline"
            >
              {SPECS.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[120px_1fr] gap-4 py-3 text-sm"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                    {k}
                  </dt>
                  <dd className="text-white/85">{v}</dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                intent="primary"
                size="lg"
                as={Link}
                to={ROUTES.contact}
                className="shadow-ember"
              >
                Ask Us About This Product
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
              </MagneticButton>
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                Fulfilled through DXN · ships to 180+ countries
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
