import { useEffect } from "react";

// Lightweight per-page SEO. Rather than pull in react-helmet, we mutate
// document.title and the description/OG tags directly on mount. Each page
// renders <Seo title=... description=... /> at its root.
export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — SuryaSandesh Enterprises`
      : "SuryaSandesh Enterprises — Independent DXN Organization in Nepal";
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      const el = document.head.querySelector(selector);
      if (el && value) el.setAttribute(attr, value);
    };

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://suryasandesh.com${path}`);
    setMeta('meta[property="og:url"]', "content", `https://suryasandesh.com${path}`);
  }, [title, description, path]);

  return null;
}
