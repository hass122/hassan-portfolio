# Roadmap (updated 18 Nov 2026)

## Needs your input (cannot be done in code alone)
- [ ] Durian Superman: live URL and GitHub URL (`src/data/projects.js`)
- [ ] NexusBids: GitHub URL (optional) and 3-4 more screenshots (auction page, admin dashboard, escrow/KYC)
- [ ] NexusBids demo GIF/WebP (30-40 s) in `public/images/`, added to `images` with label `Demo`
- [ ] Case study text for both projects: `caseStudy` fields in `src/data/projects.js`
- [ ] WhatsApp number (`personal.js`)
- [ ] Certificates (`src/data/certifications.js`), e.g. the Frototype internship certificate
- [ ] A real recommendation or feedback line from your Frototype supervisor (only if it is genuine)
- [ ] Optional "currently learning" (`personal.js` > `learning`)
- [ ] CV vs site: the CV lists Python, Java, C/C++, Next.js and AI Automation Assistant, the site does not. Make them match.

## Run on your machine
- [ ] `npm install`, then commit the new `package-lock.json`
- [ ] `npm run build` and `npm run preview`
- [ ] `npm run format` once (Prettier), commit the result
- [ ] Live checks: contact form delivers to Gmail, Lighthouse, console has no CSP errors, keyboard and mobile menu (see `TESTING.md` section B)

## Done in code
- [x] JSON-LD with url, image, sameAs (GitHub, LinkedIn)
- [x] Favicon recoloured to the v3 palette, PNG favicon and apple-touch-icon
- [x] Custom 404 page
- [x] Copy-email button and "View CV online" link in Contact
- [x] Case study layout, hidden until filled
- [x] "Currently learning" row, hidden until filled
- [x] GitHub Actions build check
- [x] Prettier + EditorConfig
- [x] README and TESTING.md brought up to date

## Ideas for later
- Vercel Web Analytics (decided to skip for now), notes/blog section, print-friendly CV styles, GitHub pinned repos (needs `api.github.com` in `connect-src`), custom domain
