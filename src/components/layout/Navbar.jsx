import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { useScrollThreshold } from "@/hooks/useScrollThreshold.js";
import { NAV, ROUTES } from "@/data/content.js";
import Container from "@/components/ui/Container.jsx";
import Button from "@/components/ui/Button.jsx";
import { cn } from "@/lib/cn.js";

// Navbar — transparent on load (so the cinematic hero reads cleanly),
// transitions to a frosted-glass blur once the user scrolls. Links use
// React Router NavLink with an animated underline; the active route
// keeps its underline lit.
export default function Navbar() {
  const scrolled = useScrollThreshold(48);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-apple",
        scrolled
          ? "glass-strong border-b border-hairline"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Wordmark */}
        <Link
          to={ROUTES.home}
          className="inline-flex items-center gap-2 font-display text-[15px] font-bold tracking-tightest"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-ember shadow-ember">
            <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          </span>
          <span>
            Surya<span className="text-champagne">Sandesh</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === ROUTES.home}
              className={({ isActive }) =>
                cn(
                  "group relative px-3 py-2 text-[13px] font-medium transition-colors duration-300",
                  isActive ? "text-white" : "text-muted hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-champagne transition-transform duration-500 ease-apple",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button intent="primary" size="sm" as={Link} to={ROUTES.contact}>
            Join the Team
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6 pt-2">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === ROUTES.home}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "bg-white/[0.05] text-white"
                        : "text-white/85 hover:bg-white/[0.04]"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                className="mt-3 w-full"
                intent="primary"
                as={Link}
                to={ROUTES.contact}
                onClick={() => setOpen(false)}
              >
                Join the Team
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
