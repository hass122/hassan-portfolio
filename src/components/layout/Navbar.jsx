import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import personal from '../../data/personal.js'
import navLinks from '../../data/navLinks.js'
import useActiveSection from '../../hooks/useActiveSection.js'
import useTheme from '../../hooks/useTheme.js'
import Button from '../common/Button.jsx'
import ThemeToggle from '../common/ThemeToggle.jsx'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const resume = personal.resumeUrl ? (
    <Button href={personal.resumeUrl} download="Hassan_Raza_CV.pdf" variant="accent" className="!min-h-[40px] !px-4 !py-2">
      Download CV
    </Button>
  ) : (
    <Button disabled variant="accent" className="!min-h-[40px] !px-4 !py-2">
      CV coming soon
    </Button>
  )

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
        scrolled || open ? 'border-line bg-bg/85 shadow-soft backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-6">
        <a href="#home" className="flex items-center gap-3 font-display text-lg font-extrabold">
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-grad-primary text-sm text-white">{personal.initials}</span>
          <span>{personal.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative rounded-lg px-3 py-2 text-[15px] transition-colors ${
                  active === id ? 'font-semibold text-indigo' : 'text-muted hover:text-ink'
                }`}
              >
                {label}
                {active === id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-grad-primary" aria-hidden="true" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={toggle} />
          {resume}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={toggle} />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-btn border border-line"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg px-6 pb-6 pt-2 lg:hidden">
          <ul>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? 'true' : undefined}
                  className={`block rounded-lg px-3 py-3.5 ${active === id ? 'bg-elevated font-semibold text-indigo' : 'text-muted'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">{resume}</div>
        </div>
      )}
    </header>
  )
}
