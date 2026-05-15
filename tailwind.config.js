/** @type {import('tailwindcss').Config} */
// "Cinematic Dark" design system for SuryaSandesh Enterprises — an
// independent DXN leadership organization. Restraint over decoration:
// hierarchy comes from typography and motion, not a loud palette.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surface tokens — Obsidian black canvas, charcoal elevation
        surface: {
          DEFAULT: "#050505", // Obsidian Black — primary canvas
          elevated: "#121212", // Elevated Charcoal — cards / panels
          raised: "#1A1A1A", // Modals / popovers
        },
        // Primary action — DXN Heritage Red → Ember Orange
        ember: {
          50: "#FCEAEA",
          400: "#EE7926", // Ember Orange (gradient end)
          500: "#D62828", // DXN Heritage Red (gradient start)
          600: "#B51F1F",
        },
        // Accent — Brushed Gold, reserved for Triple Diamond highlights.
        // (Token name kept as "champagne" for system continuity; the
        //  rendered value is the brief's #D4AF37 Brushed Gold.)
        champagne: {
          DEFAULT: "#D4AF37",
          soft: "#E4CE86",
        },
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#E4CE86",
        },
        // Muted body text
        muted: "#A1A1AA",
        // Glass hairline — 1px white/5 borders for glassmorphism
        hairline: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        // Switzer = display (tight, bold). Geist = body (clean, readable).
        display: ["Switzer", "Inter", "ui-sans-serif", "system-ui"],
        sans: ["Geist", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular"],
      },
      letterSpacing: {
        tightest: "-0.045em", // Heading default — Apple "Headline" feel
        tighter: "-0.03em",
      },
      backgroundImage: {
        // Primary CTA gradient — Heritage Red → Ember Orange
        "gradient-ember":
          "linear-gradient(135deg, #D62828 0%, #EE7926 100%)",
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "grid-fade":
          "linear-gradient(180deg, transparent, rgba(0,0,0,1) 80%)",
      },
      boxShadow: {
        // Soft, multi-layered shadows — premium "lifted card" feel
        glow: "0 0 0 1px rgba(212,175,55,0.25), 0 8px 40px -8px rgba(212,175,55,0.35)",
        ember:
          "0 10px 30px -10px rgba(214,40,40,0.55), 0 4px 12px -4px rgba(238,121,38,0.35)",
        glass:
          "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        // "glow" — used on Triple Diamond badges and CTA halos
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 0 0 rgba(212,175,55,0.45), 0 0 20px 0 rgba(212,175,55,0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 0 8px rgba(212,175,55,0), 0 0 40px 4px rgba(212,175,55,0.35)",
          },
        },
        // "drift" — slow background mist / blob movement
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1.05)" },
          "50%": { transform: "translate3d(-2%,1%,0) scale(1.08)" },
          "100%": { transform: "translate3d(0,0,0) scale(1.05)" },
        },
        // "float" — gentle vertical bob for ambient particles
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        // "shimmer" — gradient sweep on accent text
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // "rise" — generic entry for hero text on mount
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        glow: "glow 3.6s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
        float: "float 9s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        rise: "rise 900ms cubic-bezier(0.16,1,0.3,1) both",
      },
      transitionTimingFunction: {
        // Apple's "spring" easing — used for almost every motion default
        apple: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
