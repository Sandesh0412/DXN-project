import PageTransition from "@/components/ui/PageTransition.jsx";
import Seo from "@/components/ui/Seo.jsx";
import PageHero from "@/components/sections/PageHero.jsx";
import DXNHeritage from "@/components/sections/DXNHeritage.jsx";
import OneDragon from "@/components/sections/OneDragon.jsx";
import WhyGanoderma from "@/components/sections/WhyGanoderma.jsx";
import FinalCTA from "@/components/sections/FinalCTA.jsx";
import { ROUTES } from "@/data/content.js";

// ABOUT DXN — the corporate heritage page. Establishes the facts that
// SuryaSandesh, as an independent organization, builds its trust upon:
// DXN's founder, founding year, the One Dragon model, and Ganoderma.
export default function AboutDXN() {
  return (
    <PageTransition>
      <Seo
        title="About DXN — Founded 1993 in Malaysia"
        description="DXN was founded in 1993 in Malaysia by Datuk Dr. Lim Siow Jin. Learn about its One Dragon vertical integration, organic Ganoderma farming, and global manufacturing."
        path={ROUTES.aboutDxn}
      />
      <PageHero
        eyebrow="About DXN"
        title={
          <>
            The company behind the products{" "}
            <span className="text-gradient-champagne">we represent</span>.
          </>
        }
        description="SuryaSandesh Enterprises is an independent organization within the DXN network. We do not own DXN — but we know its story well, and we think you should too."
      />
      <DXNHeritage />
      <OneDragon />
      <WhyGanoderma />
      <FinalCTA
        eyebrow="Curious to learn more?"
        title={
          <>
            Have questions about DXN?{" "}
            <span className="text-gradient-champagne">Ask us anything.</span>
          </>
        }
        body="We are happy to walk you through DXN's history, products, and model — patiently, and with no obligation."
        ctaLabel="Get in Touch"
      />
    </PageTransition>
  );
}
