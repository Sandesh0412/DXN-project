// ====================================================================
//  CONTENT — single source of truth for all marketing copy.
//
//  BRAND ACCURACY GUARDRAILS (read before editing):
//  - SuryaSandesh Enterprises is an INDEPENDENT DXN organization in
//    Nepal. It does NOT own DXN, its farms, or its factories.
//  - DXN is a separate company: founded 1993 in Malaysia by
//    Datuk Dr. Lim Siow Jin. DXN owns the "One Dragon" supply chain.
//  - Never write "our farms / we manufacture / we own". Write
//    "DXN's ..." or "the DXN products we represent".
//  - No income guarantees. No unrealistic earnings claims.
// ====================================================================

// --- Route paths -----------------------------------------------------
export const ROUTES = {
  home: "/",
  aboutDxn: "/about-dxn",
  products: "/products",
  opportunity: "/opportunity",
  leadership: "/leadership",
  contact: "/contact",
};

// --- Primary navigation ---------------------------------------------
export const NAV = [
  { label: "Home", to: ROUTES.home },
  { label: "About DXN", to: ROUTES.aboutDxn },
  { label: "Products", to: ROUTES.products },
  { label: "Opportunity", to: ROUTES.opportunity },
  { label: "Leadership", to: ROUTES.leadership },
  { label: "Contact", to: ROUTES.contact },
];

// --- Organization facts ---------------------------------------------
export const ORG = {
  name: "SuryaSandesh Enterprises",
  role: "Independent DXN Organization",
  base: "Kathmandu, Nepal",
  whatsapp: "+9779800000000",
  email: "hello@suryasandesh.com",
};

// --- Home hero (copy fixed per V2 brief) ----------------------------
export const HERO = {
  headline: "Empowering Wellness & Entrepreneurship Through DXN",
  sub: "SuryaSandesh Enterprises is a Nepal-based independent DXN organization helping individuals discover premium wellness products, leadership development, and global business opportunities.",
};

// --- "About the Organization" — the SuryaSandesh mission ------------
export const ORG_MISSION = {
  eyebrow: "About the Organization",
  title: "An independent DXN organization, built around education.",
  body: "We are a family-led team operating within the global DXN network. Our work is not manufacturing — it is mentorship. We help people in Nepal and beyond understand Ganoderma wellness, use DXN's products with confidence, and, if they choose, build a business on a proven international platform.",
  points: [
    {
      title: "Wellness, explained clearly",
      body: "Honest, educational guidance on Ganoderma and the DXN catalogue — no hype, no pressure.",
    },
    {
      title: "Mentorship that compounds",
      body: "Structured coaching from an experienced DXN Triple Diamond leadership family.",
    },
    {
      title: "A platform, not a pitch",
      body: "We connect people to DXN's established global system and let the model speak for itself.",
    },
  ],
};

// --- "Why Ganoderma" — educational ----------------------------------
export const GANODERMA = {
  eyebrow: "Why Ganoderma",
  title: "A mushroom studied for centuries, made everyday by DXN.",
  body: "Ganoderma lucidum — known as Lingzhi or Reishi — has been valued in traditional wellness systems across Asia for generations. DXN's contribution was access: cultivating it at scale and formulating it into products people actually reach for daily.",
  facts: [
    {
      stat: "2,000+",
      label: "Years in traditional use",
      note: "Documented across East-Asian wellness traditions.",
    },
    {
      stat: "100%",
      label: "Cultivated by DXN",
      note: "Grown on DXN's own organic farms — not wild-harvested.",
    },
    {
      stat: "1 mushroom",
      label: "Across the catalogue",
      note: "From coffee to supplements, Ganoderma is the through-line.",
    },
  ],
  notes: [
    "Educational information only — not medical advice.",
    "Wellness outcomes vary from person to person.",
    "Always consult a qualified professional for health concerns.",
  ],
};

// --- DXN's "One Dragon" vertical integration (DXN-owned) ------------
export const ONE_DRAGON = {
  eyebrow: "DXN's One Dragon Philosophy",
  title: "One company. One supply chain. End to end.",
  body: "DXN — not SuryaSandesh — owns this system. The 'One Dragon' concept means DXN controls every stage in-house, from farm to family. It is the reason an independent organization like ours can represent the products with genuine confidence.",
  pillars: [
    {
      title: "Cultivation",
      body: "DXN grows Ganoderma on its own organic farms under controlled conditions.",
    },
    {
      title: "Extraction",
      body: "DXN's certified facilities process the harvest using consistent, audited methods.",
    },
    {
      title: "Manufacturing",
      body: "DXN's in-house plants produce the finished catalogue — coffee, supplements, care.",
    },
    {
      title: "Distribution",
      body: "DXN ships directly to members in 180+ countries through one global system.",
    },
  ],
};

// --- DXN corporate heritage (for the About DXN page) ----------------
export const DXN_HERITAGE = {
  founder: "Datuk Dr. Lim Siow Jin",
  founded: "1993",
  origin: "Malaysia",
  founderBio: "DXN was founded in 1993 in Malaysia by Datuk Dr. Lim Siow Jin, a graduate of the Indian Institute of Technology. His vision was simple and patient: make the benefits of Ganoderma accessible to ordinary people through a company that controls its own quality from end to end.",
  timeline: [
    { year: "1993", title: "DXN is founded", body: "Datuk Dr. Lim Siow Jin establishes DXN in Malaysia, centred on Ganoderma cultivation." },
    { year: "2000s", title: "Global expansion", body: "DXN extends its 'One World One Market' system across Asia, the Americas, and Africa." },
    { year: "2010s", title: "Vertical integration matures", body: "The 'One Dragon' model — farm, factory, distribution — is fully realised at scale." },
    { year: "Today", title: "180+ countries", body: "DXN operates a worldwide network of members, including independent organizations like SuryaSandesh." },
  ],
};

// --- Shared stats (these are DXN-network facts) ---------------------
export const STATS = [
  { value: 180, suffix: "+", label: "Countries in the DXN network" },
  { value: 30, suffix: "+", label: "Years since DXN was founded" },
  { value: 1, suffix: "", label: "Triple Diamond leader guiding us" },
];

// --- Product categories ---------------------------------------------
export const CATEGORIES = [
  {
    name: "Coffee",
    tagline: "Ganoderma-infused coffee for a calmer daily ritual.",
    benefit: "Everyday Ritual",
    detail: "DXN's signature category — black, 3-in-1, and specialty blends, each carrying a Ganoderma extract.",
    accent: "from-amber-700/30 to-amber-900/10",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Supplements",
    tagline: "Ganoderma and complementary food supplements.",
    benefit: "Daily Wellness",
    detail: "Capsules and powders formulated by DXN around its core Ganoderma philosophy.",
    accent: "from-emerald-700/25 to-emerald-900/10",
    span: "md:col-span-1",
  },
  {
    name: "Personal Care",
    tagline: "Skin, hair, and oral care, the DXN way.",
    benefit: "Gentle Routine",
    detail: "A daily-care range that brings DXN's ingredient philosophy into everyday routines.",
    accent: "from-rose-700/25 to-rose-900/10",
    span: "md:col-span-1",
  },
  {
    name: "Food & Beverage",
    tagline: "Functional food and drink, thoughtfully made.",
    benefit: "Mindful Nutrition",
    detail: "Teas, cereals, and beverages that round out a considered daily wellness routine.",
    accent: "from-sky-700/25 to-sky-900/10",
    span: "md:col-span-2",
  },
];

// --- Independent business opportunity -------------------------------
export const OPPORTUNITY = {
  eyebrow: "The Independent Business Opportunity",
  title: "A business model you can learn — and grow at your own pace.",
  body: "Becoming a DXN member is free, and there is no obligation to build a business. For those who want to, DXN provides an established international platform. SuryaSandesh provides the mentorship. We never promise specific income — results depend entirely on individual effort, consistency, and time.",
  pillars: [
    {
      title: "Independent & flexible",
      body: "You operate as an independent DXN member — part-time or full, on your own schedule.",
    },
    {
      title: "Mentorship-led",
      body: "You are coached directly by an experienced DXN leadership family, not left to guess.",
    },
    {
      title: "One global market",
      body: "DXN's 'One World One Market' system means your network can grow across borders.",
    },
    {
      title: "Built on real products",
      body: "The business is grounded in products people genuinely use — not on recruitment alone.",
    },
  ],
  disclaimer:
    "SuryaSandesh Enterprises makes no income or earnings guarantees. The DXN business is an independent opportunity; outcomes vary and depend on individual effort. Nothing here should be read as a promise of financial return.",
};

// --- Leadership & vision --------------------------------------------
export const LEADERSHIP = {
  eyebrow: "Leadership & Vision",
  title: "From a father's discipline to a son's digital craft.",
  body: "SuryaSandesh Enterprises is led by a family whose senior leader has earned DXN's Triple Diamond rank through decades of consistent, grounded work. The next generation brings modern tools and a calmer, more educational way of sharing the opportunity.",
  values: [
    { title: "Integrity first", body: "We would rather under-promise. Trust is the only asset that compounds." },
    { title: "Educate, never pressure", body: "A confident decision is a lasting one. We inform; you decide." },
    { title: "Community over volume", body: "We measure success by the people who grow with us, not by headcount." },
  ],
  diamond: {
    rank: "Triple Diamond",
    body: "A senior DXN leadership rank, earned over years of sustained network growth and mentorship — not bought, and not quick.",
  },
};

// --- Testimonials (grounded — no income bragging) -------------------
export const TESTIMONIALS = [
  {
    quote:
      "I started simply by drinking the coffee. What kept me was how patiently the SuryaSandesh team explained everything — never a hard sell.",
    author: "Ankit R.",
    role: "DXN member, Lalitpur",
  },
  {
    quote:
      "As a physician I'm cautious about wellness claims. I appreciated that the guidance here was educational and honest about what products are — and aren't.",
    author: "Dr. Maya S.",
    role: "Family physician, Pokhara",
  },
  {
    quote:
      "The mentorship is the real difference. They treat the business like an apprenticeship, with structure and realistic expectations.",
    author: "Bhuwan T.",
    role: "Independent DXN member, Bagmati",
  },
];

// --- FAQ (neutralizes the "is this an MLM" objection honestly) ------
export const FAQ_ITEMS = [
  {
    q: "Is SuryaSandesh Enterprises the same as DXN?",
    a: "No. DXN is a Malaysian wellness company founded in 1993 by Datuk Dr. Lim Siow Jin. SuryaSandesh Enterprises is an independent organization within the DXN network, based in Nepal, focused on education and mentorship.",
  },
  {
    q: "Is this a multi-level marketing business?",
    a: "DXN uses a network distribution model. What sets it apart is vertical integration — DXN owns its farms, factories, and logistics. Our focus is the products and honest education, not aggressive recruitment.",
  },
  {
    q: "Do I have to build a business to join?",
    a: "Not at all. Many DXN members simply use the products. The business opportunity is entirely optional and moves at whatever pace suits you.",
  },
  {
    q: "How much can I earn?",
    a: "We do not make income claims. Earnings in any independent business depend on individual effort, consistency, and time. We can explain how the model works — but we will never promise a number.",
  },
  {
    q: "What does it cost to start?",
    a: "DXN membership is free to register, and there is no mandatory inventory. You can begin simply by trying the products you are interested in.",
  },
];

// --- Onboarding process ---------------------------------------------
export const PROCESS_STEPS = [
  { step: "01", title: "Learn", body: "A relaxed conversation about Ganoderma, the products, and how DXN works. No pressure." },
  { step: "02", title: "Register", body: "Activate a free DXN membership. We share our educational onboarding material." },
  { step: "03", title: "Mentor", body: "Regular coaching from our DXN leadership family — tools, guidance, and honest feedback." },
  { step: "04", title: "Grow", body: "Build at your own pace on DXN's global platform, with support every step of the way." },
];

// --- Footer ----------------------------------------------------------
export const FOOTER_LINKS = {
  Explore: [
    { label: "Home", to: ROUTES.home },
    { label: "About DXN", to: ROUTES.aboutDxn },
    { label: "Products", to: ROUTES.products },
  ],
  Engage: [
    { label: "Business Opportunity", to: ROUTES.opportunity },
    { label: "Leadership & Vision", to: ROUTES.leadership },
    { label: "Contact", to: ROUTES.contact },
  ],
};

export const LEGAL_NOTE =
  "SuryaSandesh Enterprises is an independent organization within the DXN network. DXN is a registered trademark of DXN Holdings Bhd, founded 1993 in Malaysia. This site is educational and makes no income or health guarantees.";
