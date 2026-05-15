import PageTransition from "@/components/ui/PageTransition.jsx";
import Seo from "@/components/ui/Seo.jsx";
import PageHero from "@/components/sections/PageHero.jsx";
import ContactForm from "@/components/sections/ContactForm.jsx";
import FAQ from "@/components/sections/FAQ.jsx";
import { ROUTES } from "@/data/content.js";

// CONTACT — the form, WhatsApp CTA, social links, and the Join the
// Team module all live inside ContactForm. The FAQ closes the page so
// common questions are answered right where people decide to reach out.
export default function Contact() {
  return (
    <PageTransition>
      <Seo
        title="Contact & Join the Team"
        description="Get in touch with SuryaSandesh Enterprises — WhatsApp, email, or our contact form. Ask about DXN products, the business opportunity, or mentorship."
        path={ROUTES.contact}
      />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            We'd genuinely love to{" "}
            <span className="text-gradient-champagne">hear from you</span>.
          </>
        }
        description="Whether you're curious about a product, the opportunity, or simply want to ask a question — reach out. A real person will reply."
      />
      <ContactForm />
      <FAQ />
    </PageTransition>
  );
}
