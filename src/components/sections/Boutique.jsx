import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import { CATEGORIES, ROUTES } from "@/data/content.js";
import { cn } from "@/lib/cn.js";

// Bento-box product grid. On hover, each card tilts in 3D toward the
// cursor (subtle — max ~6°) and reveals the primary benefit chip. The
// tilt math runs entirely on motion values to keep React out of the
// render path — 60fps even on a packed grid.
function BentoCard({ category, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 220,
    damping: 20,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 220,
    damping: 20,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-hairline bg-surface-elevated/70 p-7",
        "transition-colors duration-500 hover:border-white/20",
        category.span
      )}
    >
      {/* Color-tinted bed — gives each tile a quiet personality */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-80",
          category.accent
        )}
      />
      {/* Specular sheen — moves opposite the tilt for a glassy feel */}
      <motion.div
        aria-hidden
        style={{
          x: useTransform(x, [-0.5, 0.5], [40, -40]),
          y: useTransform(y, [-0.5, 0.5], [40, -40]),
        }}
        className="pointer-events-none absolute -inset-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]"
      />

      <div className="relative flex h-full min-h-[260px] flex-col justify-between">
        <header className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/45">
            Category 0{index + 1}
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-white/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
            strokeWidth={1.75}
          />
        </header>

        <div>
          <h3 className="font-display text-3xl font-bold tracking-tightest sm:text-4xl">
            {category.name}
          </h3>
          <p className="mt-2 text-sm text-white/55">{category.tagline}</p>

          {/* The "benefit chip" reveal — hidden until hover */}
          <div className="mt-5 flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-champagne/30 bg-champagne/[0.08] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-champagne",
                "translate-y-2 opacity-0 transition-all duration-500 ease-apple",
                "group-hover:translate-y-0 group-hover:opacity-100"
              )}
            >
              <span className="h-1 w-1 rounded-full bg-champagne" />
              {category.benefit}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Boutique() {
  return (
    <section id="boutique" className="relative py-28 sm:py-40">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="The Wellness Boutique"
            title={
              <>
                Four DXN categories,{" "}
                <span className="text-gradient-champagne">one through-line</span>.
              </>
            }
            description="Coffee, supplements, personal care, food & beverage — every DXN category traces back to Ganoderma. We help you understand each one; DXN makes them."
            className="max-w-xl"
          />
          <Link
            to={ROUTES.products}
            className="group inline-flex items-center gap-2 text-sm font-medium text-champagne transition-colors hover:text-white"
          >
            View full catalog
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <BentoCard key={c.name} category={c} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
