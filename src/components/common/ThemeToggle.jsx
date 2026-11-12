import { Moon, Sun } from 'lucide-react'

// Sun = light mode, Moon = dark mode. The icon of the current mode is shown.
export default function ThemeToggle({ theme, onToggle, className = '' }) {
  const light = theme === 'light'
  const icon = 'absolute transition-opacity duration-200'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`relative grid h-11 w-11 place-items-center rounded-btn border border-line text-ink transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <Sun size={20} aria-hidden="true" className={`${icon} ${light ? 'opacity-100' : 'opacity-0'}`} />
      <Moon size={20} aria-hidden="true" className={`${icon} ${light ? 'opacity-0' : 'opacity-100'}`} />
    </button>
  )
}
