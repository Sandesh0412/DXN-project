import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import { FOOTER_LINKS, LEGAL_NOTE, ROUTES, ORG } from "@/data/content.js";

// Footer — quiet, generous, hairline-divided. Crucially carries the
// LEGAL_NOTE: a plain-language statement that SuryaSandesh is an
// INDEPENDENT DXN organization, not DXN itself.
export default function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-surface">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              to={ROUTES.home}
              className="inline-flex items-center gap-2 font-display text-[15px] font-bold tracking-tightest"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-ember">
                <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
              </span>
              Surya<span className="text-champagne">Sandesh</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              An independent DXN organization based in {ORG.base}. We focus on
              wellness education, leadership mentorship, and helping people
              explore the DXN business opportunity — honestly.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-white/65 transition-all duration-300 hover:border-white/30 hover:text-white"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                {heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline-divider mt-16" />

        {/* Brand-accuracy / legal note — kept prominent, not buried. */}
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/40">
          {LEGAL_NOTE}
        </p>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {ORG.name}. {ORG.base}.
          </p>
          <p className="font-mono tracking-wide">
            Independent DXN Organization
          </p>
        </div>
      </Container>

      {/* Oversize "signature" wordmark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <div className="bg-gradient-to-b from-white/[0.04] to-transparent bg-clip-text text-center font-display text-[18vw] font-black leading-none tracking-tightest text-transparent">
          SuryaSandesh
        </div>
      </div>
    </footer>
  );
}
