import PageTransition from "@/components/ui/PageTransition.jsx";
import Seo from "@/components/ui/Seo.jsx";
import PageHero from "@/components/sections/PageHero.jsx";
import Boutique from "@/components/sections/Boutique.jsx";
import FeaturedProduct from "@/components/sections/FeaturedProduct.jsx";
import TrustStrip from "@/components/sections/TrustStrip.jsx";
import FinalCTA from "@/components/sections/FinalCTA.jsx";
import { ROUTES } from "@/data/content.js";

// PRODUCTS — the Wellness Boutique. The bento grid covers the four DXN
// categories; the Featured Product spotlight makes the catalogue
// tangible. Copy stays educational — these are DXN's products.
export default function Products() {
  return (
    <PageTransition>
      <Seo
        title="Products — The DXN Wellness Boutique"
        description="Explore DXN's wellness range — Ganoderma coffee, supplements, personal care, and food & beverage. Educational descriptions, honest guidance."
        path={ROUTES.products}
      />
      <PageHero
        eyebrow="The Wellness Boutique"
        title={
          <>
            DXN's catalogue,{" "}
            <span className="text-gradient-champagne">explained simply</span>.
          </>
        }
        description="Every product here is made by DXN and built around Ganoderma. Our role is to help you understand each category and choose what genuinely fits your routine."
      />
      <Boutique />
      <FeaturedProduct />
      <TrustStrip />
      <FinalCTA
        eyebrow="Not sure where to start?"
        title={
          <>
            Tell us your routine —{" "}
            <span className="text-gradient-champagne">we'll guide you</span>.
          </>
        }
        body="No pushy upsells. We'll suggest a sensible first product based on what you actually want, and explain exactly why."
        ctaLabel="Ask for a Recommendation"
      />
    </PageTransition>
  );
}
