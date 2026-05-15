import PageTransition from "@/components/ui/PageTransition.jsx";
import Seo from "@/components/ui/Seo.jsx";
import Hero from "@/components/sections/Hero.jsx";
import OrgIntro from "@/components/sections/OrgIntro.jsx";
import WhyGanoderma from "@/components/sections/WhyGanoderma.jsx";
import Boutique from "@/components/sections/Boutique.jsx";
import OpportunitySection from "@/components/sections/OpportunitySection.jsx";
import LeadershipImpact from "@/components/sections/LeadershipImpact.jsx";
import Testimonials from "@/components/sections/Testimonials.jsx";
import FAQ from "@/components/sections/FAQ.jsx";
import FinalCTA from "@/components/sections/FinalCTA.jsx";
import { ROUTES } from "@/data/content.js";

// HOME — the cinematic narrative, sequenced per the brand brief:
//   Hero → About the Organization → Why Ganoderma →
//   Featured Product Bento Grid → Independent Business Opportunity →
//   Leadership Impact → Testimonials & FAQ.
export default function Home() {
  return (
    <PageTransition>
      <Seo
        title="Independent DXN Organization in Nepal"
        description="SuryaSandesh Enterprises is a Nepal-based independent DXN organization helping individuals discover premium wellness products, leadership development, and global business opportunities."
        path={ROUTES.home}
      />
      <Hero />
      <OrgIntro />
      <WhyGanoderma />
      <Boutique />
      <OpportunitySection />
      <LeadershipImpact showValues={false} />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </PageTransition>
  );
}
