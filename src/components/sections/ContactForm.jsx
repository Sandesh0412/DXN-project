import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import Card from "@/components/ui/Card.jsx";
import Button from "@/components/ui/Button.jsx";
import Badge from "@/components/ui/Badge.jsx";
import { ORG, ROUTES, PROCESS_STEPS } from "@/data/content.js";
import { cn } from "@/lib/cn.js";

// Contact section — form, WhatsApp CTA, social links, and a compact
// "Join the Team" module. The form is intentionally front-end only:
// it validates and confirms locally. Wire `onSubmit` to a real
// endpoint (Formspree, a serverless function, etc.) before launch.

const INTERESTS = [
  "Wellness products",
  "Business opportunity",
  "Mentorship",
  "General enquiry",
];

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-white/55">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-300 focus:border-champagne/50";

function ContactDetails() {
  const waLink = `https://wa.me/${ORG.whatsapp.replace(/[^0-9]/g, "")}`;
  return (
    <div className="space-y-4">
      {/* WhatsApp — primary, fastest channel */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5 transition-colors duration-300 hover:border-emerald-400/50"
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
          <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className="flex-1">
          <p className="font-display text-sm font-bold tracking-tight">
            Chat on WhatsApp
          </p>
          <p className="text-xs text-muted">Usually the quickest way to reach us</p>
        </div>
        <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      <a
        href={`mailto:${ORG.email}`}
        className="group flex items-center gap-4 rounded-2xl border border-hairline bg-surface-elevated/60 p-5 transition-colors duration-300 hover:border-white/20"
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface text-champagne">
          <Mail className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className="flex-1">
          <p className="font-display text-sm font-bold tracking-tight">Email us</p>
          <p className="text-xs text-muted">{ORG.email}</p>
        </div>
      </a>

      <div className="flex items-center gap-4 rounded-2xl border border-hairline bg-surface-elevated/60 p-5">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface text-champagne">
          <MapPin className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className="flex-1">
          <p className="font-display text-sm font-bold tracking-tight">Based in</p>
          <p className="text-xs text-muted">{ORG.base}</p>
        </div>
      </div>

      {/* Socials */}
      <div className="flex items-center gap-2 pt-1">
        {[Instagram, Facebook, Youtube].map((Icon, i) => (
          <a
            key={i}
            href="#"
            aria-label="social link"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

function JoinTeam() {
  return (
    <Card className="overflow-hidden p-8">
      <Badge glow>Join the Team</Badge>
      <h3 className="mt-4 font-display text-2xl font-bold tracking-tightest">
        A mentored start — at your own pace.
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Joining is free and never rushed. Here is the calm, four-step path
        we walk with everyone.
      </p>
      <ol className="mt-6 space-y-3">
        {PROCESS_STEPS.map((step) => (
          <li key={step.step} className="flex items-start gap-3">
            <span className="mt-0.5 font-mono text-xs text-champagne">
              {step.step}
            </span>
            <div>
              <p className="font-display text-sm font-bold tracking-tight">
                {step.title}
              </p>
              <p className="text-xs leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <Button
        as={Link}
        to={ROUTES.opportunity}
        intent="outline"
        size="md"
        className="mt-7 w-full"
      >
        Learn how the opportunity works
      </Button>
    </Card>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: INTERESTS[0],
    message: "",
  });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulated submission. Replace with a real endpoint before launch.
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          {/* The form */}
          <Card className="p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tightest">
                    Thank you — message received.
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    A member of our team will reach out personally, usually
                    within 24 hours. No automated funnels, we promise.
                  </p>
                  <Button
                    intent="ghost"
                    size="md"
                    className="mt-7"
                    onClick={() => {
                      setStatus("idle");
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        interest: INTERESTS[0],
                        message: "",
                      });
                    }}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <Badge>Send a Message</Badge>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tightest sm:text-4xl">
                      Let's start a conversation.
                    </h2>
                    <p className="mt-2 text-sm text-muted">
                      Tell us a little about what you're looking for — we'll
                      take it from there.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name">
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your name"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@example.com"
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone / WhatsApp">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+977 ..."
                        className={inputCls}
                      />
                    </Field>
                    <Field label="I'm interested in">
                      <select
                        value={form.interest}
                        onChange={update("interest")}
                        className={cn(inputCls, "appearance-none")}
                      >
                        {INTERESTS.map((opt) => (
                          <option key={opt} value={opt} className="bg-surface">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message">
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="How can we help?"
                      className={cn(inputCls, "resize-none")}
                    />
                  </Field>

                  <Button
                    type="submit"
                    intent="primary"
                    size="lg"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" strokeWidth={2.25} />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-white/35">
                    We never share your details. No spam, no aggressive
                    follow-ups — ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </Card>

          {/* Contact methods + Join the Team */}
          <div className="space-y-8">
            <ContactDetails />
            <JoinTeam />
          </div>
        </div>
      </Container>
    </section>
  );
}
