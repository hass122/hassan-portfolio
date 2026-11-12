const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Tokens come from CSS variables, so each theme (Warm Editorial / Midnight Editorial) has its own palette.
      colors: {
        bg: c('bg'), // page canvas
        surface: c('surface'), // alternate section surface
        card: c('card'), // cards, forms
        line: c('line'), // borders and dividers
        field: c('field'), // slightly stronger border for inputs and the timeline
        ink: c('ink'), // primary text
        muted: c('muted'), // secondary text
        accent: c('accent'), // primary accent (olive / antique brass)
        clay: c('clay'), // secondary accent (terracotta / muted brown), small details only
        onaccent: c('onaccent'), // text on top of the primary accent
        success: c('success'),
        danger: c('danger'),
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: { content: '1200px' },
      borderRadius: { btn: '8px', card: '12px', feature: '16px' },
      boxShadow: { soft: 'var(--shadow-soft)' },
    },
  },
  plugins: [],
}
