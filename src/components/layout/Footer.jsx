import { ArrowUp } from 'lucide-react'
import personal from '../../data/personal.js'
import navLinks from '../../data/navLinks.js'
import socialLinks from '../../data/socialLinks.js'

// Education has its own section but no navbar link, so it is added here.
const exploreLinks = [
  ...navLinks.filter((l) => l.id !== 'home'),
  { id: 'education', label: 'Education' },
].sort((a, b) => {
  const order = ['about', 'skills', 'services', 'projects', 'experience', 'education', 'contact']
  return order.indexOf(a.id) - order.indexOf(b.id)
})

const linkCls =
  'inline-flex min-h-[36px] items-center gap-2 text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline'

// A quiet footer: name, tagline, navigation, links and copyright.
export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="font-display text-2xl">{personal.name}</a>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Software Engineering student and web developer, building things that work.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            Available for work
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink">Explore</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 sm:grid-cols-1">
            {exploreLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={linkCls}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink">Connect</h3>
          <ul className="mt-3">
            {socialLinks.map(({ label, href, text, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`${linkCls} break-all`}
                >
                  <Icon size={16} className="shrink-0 text-accent" aria-hidden="true" />
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-6 py-5 text-sm text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="hidden md:block">Built with React, Tailwind CSS and Framer Motion</p>
          <a href="#home" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
