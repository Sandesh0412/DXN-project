import PageTransition from "@/components/ui/PageTransition.jsx";
import Seo from "@/components/ui/Seo.jsx";
import PageHero from "@/components/sections/PageHero.jsx";
import OpportunitySection from "@/components/sections/OpportunitySection.jsx";
import DiamondGrowth from "@/components/sections/DiamondGrowth.jsx";
import Simulator from "@/components/sections/Simulator.jsx";
import Process from "@/components/sections/Process.jsx";
import FinalCTA from "@/components/sections/FinalCTA.jsx";
import { ROUTES } from "@/data/content.js";

// BUSINESS OPPORTUNITY — explains the independent DXN model with
// interactive, structural visuals. Every compensation concept here is
// deliberately free of currency figures and income guarantees.
export default function Opportunity() {
  return (
    <PageTransition>
      <Seo
        title="The Independent DXN Business Opportunity"
        description="Understand the independent DXN business model — mentorship, teamwork, and global reach through One World One Market. No income guarantees, ever."
        path={ROUTES.opportunity}
      />
      <PageHero
        eyebrow="The Opportunity"
        title={
          <>
            An independent business,{" "}
            <span className="text-gradient-champagne">built on mentorship</span>.
          </>
        }
        description="DXN provides the global platform. SuryaSandesh provides the coaching. What follows explains how the model works — honestly, and with no promises of income."
      />
      <OpportunitySection withCta={false} />
      <DiamondGrowth />
      <Simulator />
      <Process />
      <FinalCTA
        eyebrow="Ready to look closer?"
        title={
          <>
            Let's talk it through,{" "}
            <span className="text-gradient-champagne">step by step.</span>
          </>
        }
        body="Book a relaxed call with our mentorship team. We'll answer every question and help you decide if this is right for you — with zero pressure."
        ctaLabel="Speak With a Mentor"
      />
    </PageTransition>
  );
}
