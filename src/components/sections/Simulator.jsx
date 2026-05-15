import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Users, Repeat, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import SectionHeader from "@/components/ui/SectionHeader.jsx";
import Badge from "@/components/ui/Badge.jsx";
import { cn } from "@/lib/cn.js";

// Network Growth Visualizer.
//
// This is an EDUCATIONAL, STRUCTURAL tool — it deliberately shows NO
// money. The sliders illustrate how network *reach* and *activity*
// scale with team size and engagement. Output is:
//   - reach   : how many people the network touches
//   - activity: combined "points" (DXN measures volume in PV, not cash)
//   - milestone: which DXN rank-name that activity broadly aligns with
// None of this represents or predicts income. A disclaimer says so.

const MILESTONES = [
  { from: 0, name: "Getting Started" },
  { from: 600, name: "Active Builder" },
  { from: 2000, name: "Team Leader" },
  { from: 6000, name: "Senior Leader" },
  { from: 15000, name: "Diamond-Track" },
];

function milestoneFor(points) {
  return [...MILESTONES].reverse().find((m) => points >= m.from) ?? MILESTONES[0];
}

function Slider({ label, value, min, max, step, onChange, suffix, icon: Icon }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm text-white/75">
          <Icon className="h-4 w-4 text-champagne" strokeWidth={1.75} />
          {label}
        </span>
        <span className="font-display text-lg font-bold tracking-tight text-white">
          {value}
          <span className="ml-1 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
            {suffix}
          </span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cn(
          "h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/[0.08]",
          "accent-champagne",
          "[&::-webkit-slider-thumb]:appearance-none",
          "[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4",
          "[&::-webkit-slider-thumb]:rounded-full",
          "[&::-webkit-slider-thumb]:bg-champagne",
          "[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(212,175,55,0.18)]",
          "[&::-webkit-slider-thumb]:transition-shadow",
          "[&::-webkit-slider-thumb]:hover:shadow-[0_0_0_6px_rgba(212,175,55,0.25)]",
          "[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4",
          "[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0",
          "[&::-moz-range-thumb]:bg-champagne"
        )}
      />
    </div>
  );
}

export default function Simulator() {
  const [team, setTeam] = useState(12);
  const [depth, setDepth] = useState(2);
  const [activity, setActivity] = useState(4);

  // Reach: a simple branching estimate. Activity: abstract "points".
  // Neither is currency — both are structural illustrations only.
  const { reach, points, milestone } = useMemo(() => {
    let reach = 0;
    for (let level = 1; level <= depth; level += 1) {
      reach += Math.round(team * Math.pow(2.2, level - 1));
    }
    const points = reach * activity * 25;
    return { reach, points, milestone: milestoneFor(points) };
  }, [team, depth, activity]);

  return (
    <section className="relative py-28 sm:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <SectionHeader
            eyebrow="Network Growth Visualizer"
            title={
              <>
                Move the dials.{" "}
                <span className="text-gradient-champagne">See the shape.</span>
              </>
            }
            description="An educational tool for understanding how a network's reach and activity scale. It shows structure and effort — never money, and never a promise."
          />

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.10),transparent_60%)] blur-2xl" />

            <div className="glass rounded-[28px] p-8 sm:p-10">
              <div className="mb-8 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/50">
                  Visualizer · Educational
                </p>
                <Badge>{milestone.name}</Badge>
              </div>

              <div className="space-y-7">
                <Slider
                  label="People you directly mentor"
                  value={team}
                  min={0}
                  max={60}
                  step={1}
                  suffix="people"
                  icon={Users}
                  onChange={setTeam}
                />
                <Slider
                  label="Levels of mentorship depth"
                  value={depth}
                  min={1}
                  max={4}
                  step={1}
                  suffix="levels"
                  icon={Sparkles}
                  onChange={setDepth}
                />
                <Slider
                  label="Average monthly engagement"
                  value={activity}
                  min={1}
                  max={10}
                  step={1}
                  suffix="/ 10"
                  icon={Repeat}
                  onChange={setActivity}
                />
              </div>

              <div className="hairline-divider mt-10" />

              <motion.div
                key={`${reach}-${points}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 grid grid-cols-3 gap-6"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                    Network reach
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold tracking-tightest text-white sm:text-3xl">
                    {reach.toLocaleString()}
                    <span className="ml-1 text-sm font-medium text-white/45">
                      people
                    </span>
                  </p>
                </div>
                <div className="border-l border-hairline pl-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                    Combined activity
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold tracking-tightest sm:text-3xl">
                    <span className="text-gradient-champagne">
                      {points.toLocaleString()}
                    </span>
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-white/40">
                    activity points (not currency)
                  </p>
                </div>
                <div className="border-l border-hairline pl-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                    Illustrative stage
                  </p>
                  <p className="mt-2 font-display text-xl font-bold tracking-tightest text-white sm:text-2xl">
                    {milestone.name}
                  </p>
                </div>
              </motion.div>

              <p className="mt-8 max-w-md text-xs leading-relaxed text-white/40">
                This visualizer is illustrative and educational. It does not
                show, predict, or guarantee income. Real results in any
                independent business depend on individual effort, consistency,
                and time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
