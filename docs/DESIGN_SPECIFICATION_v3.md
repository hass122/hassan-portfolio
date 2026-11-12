# Design Specification v3.0 (summary) - Warm Editorial + Midnight Editorial

Source: `Design_Specification_v3_Warm_Editorial.docx` in this folder (the full document). This supersedes v2.0 visually.
Functionality, content, routes and links are unchanged by the redesign.

| Token | Light (Warm Editorial) | Dark (Midnight Editorial) |
|---|---|---|
| Background | #F7F5EF | #211F1C |
| Alternate surface | same as background (dividers instead) | #292722 |
| Card | #FFFFFF | #302E28 |
| Primary text | #24251F | #F0EDE5 |
| Secondary text | #77766E | #AAA69B |
| Primary accent | #68765B (olive) | #B69A70 (antique brass) |
| Secondary accent | #C47755 (terracotta) | #A77B65 |
| Border | #E4E0D6 | #454138 |

Notes
- Fonts: DM Serif Display (headings), DM Sans (body, buttons), IBM Plex Mono (small metadata).
- No gradients, glows, glass, blobs, floating chips or looping animations. Respect prefers-reduced-motion.
- Open editorial layouts and dividers instead of repeated card grids; cards only for the contact form.
- Radius: 8px small, 12px cards, 12-16px media. Content width 1200px.
- Implementation detail: input borders and the timeline line use a slightly stronger border (`--c-field`) for usability.
- Tokens live in `src/styles/index.css` (CSS variables) and `tailwind.config.js`.
