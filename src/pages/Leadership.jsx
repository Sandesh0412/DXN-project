import PageTransition from "@/components/ui/PageTransition.jsx";
import Seo from "@/components/ui/Seo.jsx";
import PageHero from "@/components/sections/PageHero.jsx";
import Legacy from "@/components/sections/Legacy.jsx";
import LeadershipImpact from "@/components/sections/LeadershipImpact.jsx";
import Manifesto from "@/components/sections/Manifesto.jsx";
import FinalCTA from "@/components/sections/FinalCTA.jsx";
import { ROUTES } from "@/data/content.js";

// LEADERSHIP & VISION — the SuryaSandesh story: the family, the
// Triple Diamond rank, the values, and the mentorship philosophy.
export default function Leadership() {
  return (
    <PageTransition>
      <Seo
        title="Leadership & Vision"
        description="The SuryaSandesh story — a family-led DXN organization in Nepal, a Triple Diamond leader, and a mentorship philosophy grounded in honesty and community."
        path={ROUTES.leadership}
      />
      <PageHero
        eyebrow="Leadership & Vision"
        title={
          <>
            A family that leads by{" "}
            <span className="text-gradient-champagne">example</span>.
          </>
        }
        description="SuryaSandesh Enterprises is led by a family whose senior leader has earned DXN's Triple Diamond rank — and whose next generation is widening the door, the honest way."
      />
      <Legacy />
      <LeadershipImpact showValues />
      <Manifesto />
      <FinalCTA
        eyebrow="Grow with us"
        title={
          <>
            Find a mentor who{" "}
            <span className="text-gradient-champagne">means it</span>.
          </>
        }
        body="If our way of working resonates with you, we would love to talk. Mentorship, here, is a long-term relationship — not a sales call."
        ctaLabel="Meet the Team"
      />
    </PageTransition>
  );
}
