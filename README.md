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
4. Deploy, then replace `YOUR-DOMAIN` in `public/sitemap.xml` and `public/robots.txt` with the real URL and push again.
5. Test: contact form, CV download, links, mobile layout, browser console (security headers are in `vercel.json`).

Docs: see `docs/` (requirements, design specification, testing report).
