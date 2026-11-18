# Hassan Raza - Portfolio

React + Vite + Tailwind CSS (v3) + Framer Motion + Lucide React. Light and dark themes (saved in localStorage).

## Run locally
```
npm install
npm run dev
```
Production check: `npm run build` then `npm run preview`.

## Environment variables
Copy `.env.example` to `.env` and set:

| Variable | Purpose |
|---|---|
| `VITE_FORMSPREE_ENDPOINT` | Formspree form URL used by the contact form (public URL, not a secret) |

`.env` is git-ignored. Without the variable the contact form stays disabled and shows the email address instead.

## Where to edit content
All content lives in `src/data/`: `personal.js` (name, links, CV path, semester), `skills.js`, `projects.js`,
`experience.js`, `education.js`, `services.js`, `certifications.js`. Empty values are hidden in the UI.
Images go in `public/images/`, the CV is `public/resume.pdf`.

## Deploy (GitHub + Vercel)
1. Push this folder to a GitHub repository (do not commit `.env`).
2. In Vercel: Add New > Project > import the repository. Framework preset: Vite. Build command `npm run build`, output `dist`.
3. Settings > Environment Variables: add `VITE_FORMSPREE_ENDPOINT`.
4. Deploy. Sitemap, robots, canonical and og:url already use https://hassan-portfolio-pied.vercel.app. If you add a custom domain, update those four places (`public/sitemap.xml`, `public/robots.txt`, `index.html` canonical + og tags + JSON-LD) and push again.
5. Test: contact form, CV download, links, mobile layout, browser console (security headers are in `vercel.json`).

## Extras
- **CI:** `.github/workflows/ci.yml` runs `npm run build` on every push to `main` and on pull requests.
- **Formatting:** `npm run format` (Prettier, config in `.prettierrc`); `npm run format:check` only checks.
- **Case studies:** fill `caseStudy` (problem, role, challenge, result) in `src/data/projects.js`; it shows under "View details" once any field has text.
- **Demo GIF/WebP:** add it to a project's `images` list with the label `Demo`.
- **Currently learning:** set `learning` in `src/data/personal.js` to show it in About.
- **404 page:** `public/404.html`.

Docs: see `docs/` (requirements, design specification, testing report).
