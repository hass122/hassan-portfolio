# DESIGN SPECIFICATION v2.0 (supersedes the earlier UI/UX Design Specification)
## Hassan Raza – Personal Portfolio Website

**Status:** Final Design Approved  
**Design Direction:** Premium Aurora Light + Premium Dark  
**Primary Gradient:** Indigo → Royal Purple

> Project note: Experience duration is **5 months** (updated by Hassan after this document was written);
> the document below still says 4 months. Hassan's later instruction wins. Semester is editable (currently 8th).

## 1. Vision
Premium, modern, elegant, professional, developer-focused. Two complete themes (Aurora Light, Premium Dark) with the same functionality and consistent identity. Avoid excessive gradients/animations, overcrowded layouts and distracting effects.

## 2. Brand
Name: Hassan Raza. Initials: HR. Identity: Software Engineering Student | Web Developer. Headline: Building Digital Experiences That Matter.

## 3. Theme system
### Light (Premium Aurora)
| Element | Color |
|---|---|
| Main Background | #F5F7FF |
| Secondary Background | #EEF2FF |
| Card Background | #FFFFFF |
| Lavender Surface | #E8EAFE |
| Sky Surface | #DDF4FF |
| Primary Accent | #4F46E5 |
| Royal Purple | #7C3AED |
| Electric Blue | #0284C7 |
| Emerald Teal | #0D9488 |
| Rose Accent | #DB2777 |
| Amber Accent | #F59E0B |
| Main Heading | #111827 |
| Secondary Heading | #4338CA |
| Paragraph | #475569 |
| Muted Text | #64748B |
| Border | #E2E8F0 |

Rules: #F5F7FF page background; white cards; lavender for selected/highlighted areas; indigo for primary buttons and important links; purple for heading highlights and gradients; electric blue for secondary highlights; teal/rose/amber only as small accents (never all in one section); keep text readable.

### Dark (Premium Dark)
| Element | Color |
|---|---|
| Main Background | #080B14 |
| Secondary Background | #101827 |
| Card Background | #151E30 |
| Elevated Surface | #1B263B |
| Primary Accent | #6366F1 |
| Secondary Accent | #06B6D4 |
| Purple Accent | #8B5CF6 |
| Main Text | #FFFFFF |
| Secondary Text | #A1A1AA |
| Muted Text | #94A3B8 |
| Border | #273449 |

Rules: #080B14 main, #101827 alternate sections, #151E30 cards; indigo for primary interactions, cyan for secondary highlights, purple for decorative gradients; glow only on selected elements; no excessive neon.

## 4. Gradients
- Primary (Indigo → Royal Purple): `linear-gradient(135deg, #4F46E5, #7C3AED)` – primary buttons, hero highlights, selected badges, key decorations.
- Secondary (Electric Blue → Cyan): `linear-gradient(135deg, #0284C7, #06B6D4)` – secondary highlights, small accents.
- Dark: `linear-gradient(135deg, #6366F1, #06B6D4, #8B5CF6)` – hero visuals, subtle backgrounds, selected elements.
Gradients stay subtle and never reduce readability.

## 5. Typography
Headings: Manrope. Body and buttons: Inter. Hero 56–72px, section heading 36–48px, card heading 20–24px, subheading 18–20px, body 16–18px, small 13–14px, buttons 14–16px. Bold headings, consistent line height, highlight key words with approved accents, readable on mobile, do not use too many fonts.

## 6. Buttons
Consistent padding, radius (10–14px), typography and interaction; clear hover/focus; comfortable touch targets; no bouncing; every button performs its action.
- Primary gradient – "Explore My Work": Light #4F46E5→#7C3AED, white text. Dark #6366F1→#8B5CF6, white text. Hover: slight scale, smooth gradient transition, subtle shadow.
- Secondary – "Contact Me": Light bg #FFFFFF, border #A5B4FC, text #4338CA. Dark bg #151E30, border #6366F1, text #FFFFFF. Hover: soft accent background, smooth border transition.
- Accent – "Download CV": Light bg #0284C7, white text. Dark bg #06B6D4, text #080B14. Hover: slight brightness, subtle shadow.

## 7. Navbar
HR. branding, Home, About, Skills, Services, Projects, Experience, Contact, theme toggle. Light: white/soft translucent, dark navy text, indigo active links, subtle border/shadow. Dark: deep navy translucent, white text, cyan/indigo active links, subtle border. Smooth section navigation, active highlighting, mobile hamburger, theme switching, sticky, subtle glass effect.

## 8. Theme switching
Sun = Light, Moon = Dark. Smooth transition, no reload, saved in localStorage, first visit follows system preference, saved preference wins, no flash of wrong theme. Centralized CSS custom properties on `:root[data-theme="light"|"dark"]` (`--bg-primary`, `--bg-secondary`, `--bg-card`, `--text-primary`, `--text-secondary`, `--accent-primary`, `--accent-secondary`, `--border-color`); components use theme variables rather than hardcoded colors.

## 9. Hero
Intro: HELLO, I'M HASSAN RAZA. Heading: Building Digital Experiences That Matter. Role: Software Engineering Student | Web Developer. Description: "I enjoy building modern, responsive, and user-friendly web experiences using creative ideas and practical development skills." Buttons: Explore My Work, Contact Me, Download CV. Visuals: profile image or developer-themed visual, subtle gradient background, decorative shapes, social links, optional availability indicator only when accurate. Light: soft lavender/sky accents, dark navy heading, indigo/blue highlights. Dark: deep navy, white heading, indigo/cyan/purple highlights.

## 10. About
Short intro, education, interests, career goals, strengths. Two columns on desktop, stacked on mobile.

## 11. Skills
Frontend: HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap. Backend: PHP, Python. Database: MySQL, Database Management. Tools: Git, GitHub, VS Code, XAMPP. Modern cards, Lucide icons, soft hover, consistent spacing, clear category headings. No invented percentages.

## 12. Services
Responsive Website Development, Frontend Development, PHP Web Development, Website UI Implementation, Database Integration. Grid cards, consistent icons, short descriptions, subtle hover, clear hierarchy. Only genuinely deliverable services.

## 13. Projects
NexusBids (Online Auction System; PHP, MySQL, JavaScript, HTML, CSS, Tailwind CSS; features shown only after verification: buyer/seller workflows, auction management, bidding, watchlist, AI recommendation). AI Automation Assistant (Python Automation; Python, Flask, Selenium, AI-based analysis). Cards: screenshot, title, short description, tags, GitHub link, live demo if available. No fake links; no unfinished features claimed as complete.

## 14. Experience
Frontend Development Intern, Frototype Software House (see project note for duration). Timeline/card with organization, position, duration, verified responsibilities.

## 15. Education
Isra University – Hyderabad Campus, BS Software Engineering, semester editable and kept current.

## 16. Certifications
Only genuine certificates (name, issuer, date, image/verification link). Hidden until real content exists.

## 17. Contact
Fields: Full Name, Email, Subject, Message. Plus professional email, GitHub, LinkedIn, other verified links. Light: white card, lavender accents, indigo buttons. Dark: dark card, purple/cyan highlights, indigo button. Validation, clear errors, loading state, success confirmation, EmailJS or Formspree; never expose private keys.

## 18. Motion (Framer Motion)
Hero background soft animated gradient; heading fade + upward reveal; description staggered fade-in; buttons slight scale + color transition; project cards lift + shadow; profile image subtle rotating gradient border; skills staggered reveal; section headings fade on scroll; navbar smooth glass; theme toggle sun/moon rotation; page transitions subtle fade. Avoid excess, keep lightweight, short delays, never block interaction, respect `prefers-reduced-motion`. Timing: button hover 150–250ms, card hover 200–300ms, theme transition 250–350ms, section reveal 400–650ms, navbar 200–300ms.

## 19. Cards
Radius 14–20px, consistent padding/spacing. Light: white, soft lavender accents, light gray borders, subtle shadows, indigo hover details. Dark: #151E30, #273449 borders, subtle purple/cyan accents, controlled glow.

## 20. Backgrounds
Soft gradient blobs, low-opacity grid patterns, subtle radial gradients, small dots, light glass surfaces. Light: lavender and sky blue. Dark: indigo, cyan, purple. Never hurt readability.

## 21. Footer
HR. branding, short description, quick links, social links, copyright. Clean, minimal, theme-aware, subtle divider, consistent spacing.

## 22. Responsive
Small mobile 320–480, mobile 481–767, tablet 768–1023, desktop 1024–1279, large 1280+. Usable mobile nav, scaling hero type, stacking cards, touch-friendly buttons, responsive images, no horizontal overflow.

## 23. Accessibility
Contrast, keyboard navigation, visible focus, descriptive labels, alt text, form labels, semantic HTML, reduced motion. Color is never the only signal.

## 24. Performance and SEO
Optimized and lazy-loaded images, minimal dependencies, light animations, optimized build. Title, meta description, headings, Open Graph, favicon, alt text, semantic HTML.

## 25. Consistency rules
Keep both approved palettes; Indigo → Royal Purple primary gradient; Manrope + Inter; consistent spacing/radius/buttons; accents used carefully; avoid glow/gradient excess; same structure in both themes; every component adapts to theme; no third theme without approval; readability over decoration.

## 26. Acceptance criteria
Both themes implemented; switching without reload; preference persists; colors match palettes; buttons follow spec; consistent typography; navbar works on desktop and mobile; unified sections; subtle smooth animations; cards/forms adapt to both themes; responsive; accessible and readable.

**Final decision:** Light = Premium Aurora, Dark = Premium Dark, primary gradient Indigo → Royal Purple, secondary Electric Blue → Cyan, Manrope + Inter, smooth/elegant/subtle motion, Sun/Moon toggle with saved preference.
