import { useCallback, useEffect, useState } from 'react'

const KEY = 'theme'

const current = () =>
  typeof document !== 'undefined' && document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

function apply(theme) {
  const root = document.documentElement
  root.classList.add('theme-transition')
  root.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#F5F7FF' : '#080B14')
  window.setTimeout(() => root.classList.remove('theme-transition'), 350)
}

// The first value is set before paint by /theme-init.js (saved choice, else system preference).
export default function useTheme() {
  const [theme, setTheme] = useState(current)

  const toggle = useCallback(() => {
    const next = current() === 'light' ? 'dark' : 'light'
    apply(next)
    setTheme(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
  }, [])

  // With no saved choice, follow the system setting if it changes.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (e) => {
      let saved = null
      try {
        saved = localStorage.getItem(KEY)
      } catch {
        /* ignore */
      }
      if (saved) return
      const next = e.matches ? 'light' : 'dark'
      apply(next)
      setTheme(next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return { theme, toggle }
}
