import { Moon, Sun } from 'lucide-react'

// Sun = light mode, Moon = dark mode. The icon of the current mode is shown and rotates on change.
export default function ThemeToggle({ theme, onToggle, className = '' }) {
  const light = theme === 'light'
  const icon = 'absolute transition-all duration-300'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`relative grid h-11 w-11 place-items-center rounded-btn border border-line text-ink transition-colors hover:border-cyan ${className}`}
    >
      <Sun size={20} aria-hidden="true" className={`${icon} ${light ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
      <Moon size={20} aria-hidden="true" className={`${icon} ${light ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
    </button>
  )
}
