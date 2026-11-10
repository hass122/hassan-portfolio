# Testing Report (Phase 11)

## A. Automated checks done on the source (no browser, no npm install available)
| Check | Result |
|---|---|
| Every `.js`/`.jsx` file compiles (esbuild) | PASS |
| All relative imports resolve, every component has a default export | PASS |
| Whole app bundles (react, framer-motion, lucide-react as externals) | PASS |
| App server-renders without runtime errors (framer-motion/lucide stubbed) | PASS |
| Sections rendered: home, about, skills, services, projects, experience, education, contact | PASS |
| Every navbar link has a matching section id; no empty or `#` hrefs | PASS |
| Certifications section hidden while the list is empty | PASS |
| Contact form disabled + "not switched on" note when no Formspree endpoint; enabled when set | PASS |
| Form validation unit tests (valid, empty, bad email, short/long message, whitespace) | 7/7 PASS |
| All `<img>` have alt text; no secrets or lorem text in `src/`; `.env` in `.gitignore` | PASS |
| `vercel.json` and JSON-LD are valid JSON | PASS |

## B. NOT verified yet (needs you, in a real browser)
- [ ] `npm install` and `npm run dev` run with no console errors
- [ ] `npm run build` succeeds (Tailwind v3 CSS compile is unverified here)
- [ ] Navbar: links scroll, active highlight changes, mobile menu opens/closes (also Esc)
- [ ] Back-to-top button appears after scrolling and works
- [ ] "View details" on project cards opens/closes
- [ ] Layout at 320, 375, 768, 1024, 1440 px: no horizontal scroll or overlap
- [ ] Reduced-motion setting turns animations off
- [ ] Keyboard: Tab reaches everything, Skip-to-content works, focus ring visible
- [ ] Contact form: errors show; real message arrives in inbox (after adding the Formspree endpoint)
- [ ] Lighthouse: Performance, Accessibility, Best Practices, SEO
- [ ] After deploy: no "blocked by CSP" errors in console (see `vercel.json`)

## C. Still missing real content (not bugs)
Resume PDF, profile photo, project screenshots, GitHub/LinkedIn/WhatsApp links, project GitHub/live URLs,
certificates, real domain in `public/sitemap.xml` and `public/robots.txt`.
