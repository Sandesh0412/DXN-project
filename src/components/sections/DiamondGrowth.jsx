import { motion } from "motion/react";
import { Users, Globe, UserPlus } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import { useCountUp } from "@/hooks/useCountUp.js";
import { STATS } from "@/data/content.js";

// "How the network is shaped" — a structural visual of DXN's
// One World One Market model. It explains *structure*, not earnings:
// there are deliberately no currency figures anywhere in this section.

function Stat({ value, suffix, label, delay = 0 }) {
  const { ref, value: v } = useCountUp(value, { duration: 1800 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="border-l border-hairline pl-6"
    >
      <div className="font-display text-4xl font-bold tracking-tightest text-white sm:text-5xl">
        {v}
        <span className="text-gradient-champagne">{suffix}</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">
        {label}
      </p>
    </motion.div>
  );
}

function MapNode({ icon: Icon, title, sub, accent = "champagne", className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`glass relative flex items-center gap-3 rounded-2xl px-5 py-4 ${className}`}
    >
      <div
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
          accent === "ember"
            ? "border-ember-500/40 bg-ember-500/10 text-ember-400"
            : "border-champagne/40 bg-champagne/10 text-champagne"
        }`}
      >
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div>
        <p className="font-display text-sm font-bold tracking-tight">{title}</p>
        <p className="text-xs text-muted">{sub}</p>
      </div>
    </motion.div>
  );
}

export default function DiamondGrowth() {
  return (
    <section className="relative py-28 sm:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="One World, One Market"
              title={
                <>
                  A global platform you can{" "}
                  <span className="text-gradient-champagne">grow into</span>.
                </>
              }
              description="DXN's 'One World One Market' system means a member you introduce — whether in Pokhara or Paraguay — belongs to the same global structure. This visual shows how a network is shaped. It is not a depiction of income."
            />

            <dl className="mt-14 grid grid-cols-3 gap-6">
              {STATS.map((s, i) => (
                <Stat key={s.label} {...s} delay={i * 0.12} />
              ))}
            </dl>
          </div>

          {/* Structural map — glassmorphism flowchart, no figures */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.10),transparent_70%)] blur-2xl" />

            <div className="glass relative overflow-hidden rounded-[28px] p-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/50">
                  Network Structure
                </p>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Illustrative
                </span>
              </div>

              <div className="flex flex-col items-center gap-5">
                <MapNode
                  icon={UserPlus}
                  title="You"
                  sub="Free DXN membership"
                  accent="ember"
                  className="w-full max-w-xs"
                />

                <svg width="220" height="60" viewBox="0 0 220 60" className="text-champagne/40">
                  <path
                    d="M110 0 L110 30 M30 60 L30 40 Q30 30 50 30 L170 30 Q190 30 190 40 L190 60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                </svg>

                <div className="grid w-full grid-cols-2 gap-4">
                  <MapNode icon={Users} title="People You Mentor" sub="Your immediate team" />
                  <MapNode icon={Users} title="Their Teams" sub="Growth through mentorship" />
                </div>

                <svg width="220" height="40" viewBox="0 0 220 40" className="text-champagne/40">
                  <path
                    d="M110 0 L110 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                </svg>

                <MapNode
                  icon={Globe}
                  title="One World One Market"
                  sub="180+ countries, one system"
                  className="w-full max-w-sm"
                />
              </div>

              <p className="mt-8 text-center text-xs leading-relaxed text-white/40">
                A structural illustration only. It does not represent earnings
                or guarantee any result.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
