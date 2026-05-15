import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useLenis } from "@/hooks/useLenis.js";
import { useScrollTop } from "@/hooks/useScrollTop.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollProgress from "@/components/ui/ScrollProgress.jsx";
import BackToTop from "@/components/ui/BackToTop.jsx";
import { ROUTES } from "@/data/content.js";

// Code-splitting: each page is its own chunk, loaded on demand. This
// keeps the initial bundle small — the Home route is all most visitors
// download up front.
const Home = lazy(() => import("@/pages/Home.jsx"));
const AboutDXN = lazy(() => import("@/pages/AboutDXN.jsx"));
const Products = lazy(() => import("@/pages/Products.jsx"));
const Opportunity = lazy(() => import("@/pages/Opportunity.jsx"));
const Leadership = lazy(() => import("@/pages/Leadership.jsx"));
const Contact = lazy(() => import("@/pages/Contact.jsx"));
const NotFound = lazy(() => import("@/pages/NotFound.jsx"));

// Quiet fallback while a route chunk loads — a single pulsing gold dot,
// vertically centred. Deliberately minimal so it never flashes loudly.
function RouteFallback() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <span className="h-2.5 w-2.5 animate-glow rounded-full bg-champagne" />
    </div>
  );
}

// RootLayout owns the global chrome and the routed page outlet.
//
// NOTE ON PAGE TRANSITIONS: pages animate in via <PageTransition> (a
// mount-time enter animation). We deliberately do NOT wrap <Routes> in
// AnimatePresence with mode="wait" — that pattern deadlocks against
// React.lazy: a route that suspends mid-exit-animation never resolves.
// Enter-only transitions are smooth AND reliable with code-splitting.
export default function RootLayout() {
  useLenis(); // buttery smooth-scroll for the whole app
  useScrollTop(); // reset scroll on every navigation

  return (
    <div id="top" className="relative isolate min-h-screen bg-surface">
      <ScrollProgress />
      <Navbar />

      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.aboutDxn} element={<AboutDXN />} />
            <Route path={ROUTES.products} element={<Products />} />
            <Route path={ROUTES.opportunity} element={<Opportunity />} />
            <Route path={ROUTES.leadership} element={<Leadership />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
