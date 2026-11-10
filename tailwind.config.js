const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: c('bg'),
        surface: c('surface'),
        card: c('card'),
        elevated: c('elevated'),
        line: c('line'),
        field: c('field'), // stronger border for inputs, timeline and icon buttons
        ink: c('ink'), // main heading / text color
        body: c('body'), // strong paragraph color
        muted: c('muted'), // secondary text
        sub: c('sub'), // secondary heading color
        indigo: { DEFAULT: c('accent') }, // primary accent
        violet: { DEFAULT: c('purple') }, // royal purple
        cyan: { DEFAULT: c('cyan') }, // secondary accent (electric blue in light, cyan in dark)
        aqua: c('aqua'),
        oncyan: c('oncyan'),
        btn2border: c('btn2border'),
        btn2text: c('btn2text'),
        success: c('success'),
        danger: c('danger'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
      borderRadius: { btn: '12px', card: '18px', feature: '24px' },
      boxShadow: { soft: 'var(--shadow-soft)', glow: 'var(--shadow-glow)' },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, rgb(var(--c-accent)), rgb(var(--c-purple)))',
        'grad-secondary': 'linear-gradient(135deg, rgb(var(--c-cyan)), rgb(var(--c-aqua)))',
      },
    },
  },
  plugins: [],
}
